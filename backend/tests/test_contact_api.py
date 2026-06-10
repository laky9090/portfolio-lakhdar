"""Backend API tests for Lakhdar DAMAR portfolio.

Covers:
- Health/root endpoints
- Contact POST validation (email, name, message)
- Contact persistence (POST -> GET round trip)
- CORS headers
"""
import os
import uuid
import pytest
import requests

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "https://design-impact-16.preview.emergentagent.com").rstrip("/")
API = f"{BASE_URL}/api"


@pytest.fixture(scope="module")
def session():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# ---------- Health / root ----------
class TestHealth:
    def test_root(self, session):
        r = session.get(f"{API}/")
        assert r.status_code == 200
        data = r.json()
        assert data.get("status") == "ok"
        assert "message" in data

    def test_health(self, session):
        r = session.get(f"{API}/health")
        assert r.status_code == 200
        assert r.json().get("status") == "healthy"


# ---------- Contact POST validation ----------
class TestContactValidation:
    def test_invalid_email(self, session):
        r = session.post(f"{API}/contact", json={
            "name": "TEST_User",
            "email": "not-an-email",
            "message": "Hello there, this is a message."
        })
        assert r.status_code == 422

    def test_empty_message(self, session):
        r = session.post(f"{API}/contact", json={
            "name": "TEST_User",
            "email": "test@example.com",
            "message": ""
        })
        assert r.status_code == 422

    def test_short_message(self, session):
        r = session.post(f"{API}/contact", json={
            "name": "TEST_User",
            "email": "test@example.com",
            "message": "hi"  # < 5 chars
        })
        assert r.status_code == 422

    def test_empty_name(self, session):
        r = session.post(f"{API}/contact", json={
            "name": "",
            "email": "test@example.com",
            "message": "Hello, this is valid."
        })
        assert r.status_code == 422


# ---------- Contact happy paths + persistence ----------
class TestContactCreateAndList:
    def test_create_minimal_and_persist(self, session):
        unique = uuid.uuid4().hex[:8]
        payload = {
            "name": f"TEST_Min_{unique}",
            "email": f"test_min_{unique}@example.com",
            "message": "Minimal valid message body."
        }
        r = session.post(f"{API}/contact", json=payload)
        assert r.status_code in (200, 201), f"Got {r.status_code}: {r.text}"
        data = r.json()
        # Response shape
        assert data["name"] == payload["name"]
        assert data["email"] == payload["email"]
        assert data["message"] == payload["message"]
        assert isinstance(data.get("id"), str) and len(data["id"]) > 0
        assert "created_at" in data
        # ISO timestamp check
        from datetime import datetime
        datetime.fromisoformat(data["created_at"].replace("Z", "+00:00"))

        # Persistence via GET
        g = session.get(f"{API}/contact")
        assert g.status_code == 200
        items = g.json()
        assert isinstance(items, list)
        found = next((x for x in items if x.get("id") == data["id"]), None)
        assert found is not None, "Newly created message not found in GET list"
        assert found["email"] == payload["email"]

    def test_create_full_payload(self, session):
        unique = uuid.uuid4().hex[:8]
        payload = {
            "name": f"TEST_Full_{unique}",
            "email": f"test_full_{unique}@example.com",
            "company": "Acme Corp",
            "subject": "Project inquiry",
            "message": "Full payload message with all optional fields."
        }
        r = session.post(f"{API}/contact", json=payload)
        assert r.status_code in (200, 201)
        data = r.json()
        assert data["company"] == "Acme Corp"
        assert data["subject"] == "Project inquiry"
        assert data["name"] == payload["name"]

    def test_list_sorted_desc(self, session):
        # create two sequentially
        u1 = uuid.uuid4().hex[:8]
        u2 = uuid.uuid4().hex[:8]
        p1 = {"name": f"TEST_Sort1_{u1}", "email": f"s1_{u1}@example.com",
              "message": "first sort message body"}
        p2 = {"name": f"TEST_Sort2_{u2}", "email": f"s2_{u2}@example.com",
              "message": "second sort message body"}
        r1 = session.post(f"{API}/contact", json=p1)
        assert r1.status_code in (200, 201)
        r2 = session.post(f"{API}/contact", json=p2)
        assert r2.status_code in (200, 201)

        g = session.get(f"{API}/contact")
        assert g.status_code == 200
        items = g.json()
        # Find indices
        idx1 = next((i for i, x in enumerate(items) if x["id"] == r1.json()["id"]), None)
        idx2 = next((i for i, x in enumerate(items) if x["id"] == r2.json()["id"]), None)
        assert idx1 is not None and idx2 is not None
        # r2 created after r1, so r2 should appear earlier (lower index) in desc sort
        assert idx2 < idx1, f"Expected desc order by created_at: idx2={idx2}, idx1={idx1}"


# ---------- CORS ----------
class TestCORS:
    def test_cors_preflight(self, session):
        r = session.options(
            f"{API}/contact",
            headers={
                "Origin": "https://example.com",
                "Access-Control-Request-Method": "POST",
                "Access-Control-Request-Headers": "content-type",
            },
        )
        # Should be 200/204 with CORS headers
        assert r.status_code in (200, 204), f"Preflight failed: {r.status_code}"
        allow_origin = r.headers.get("access-control-allow-origin")
        assert allow_origin is not None, "Missing Access-Control-Allow-Origin"

    def test_cors_on_get(self, session):
        r = session.get(f"{API}/health", headers={"Origin": "https://example.com"})
        assert r.status_code == 200
        assert r.headers.get("access-control-allow-origin") is not None
