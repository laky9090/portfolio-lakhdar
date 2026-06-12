# Lakhdar DAMAR — Portfolio

Portfolio web bilingue (FR/EN) du freelance Chef de Projet IT Infrastructure Lakhdar DAMAR.

**Stack** :
- Frontend : React (Create React App) + Tailwind + Shadcn UI
- Backend : 1 fonction Vercel Serverless Node.js (`api/contact.js`)
- Envoi d'email : Resend
- Hébergement : Vercel (plan Hobby gratuit)

Aucune base de données, aucun service externe payant.

---

## Déployer sur Vercel (plan Hobby gratuit)

### 1. Récupérer le projet sur GitHub

Pousse ce dépôt sur ton compte GitHub (`laky9090`) via le bouton "Save to GitHub" d'Emergent ou via `git push`.

### 2. Importer le projet dans Vercel

1. Va sur [vercel.com/new](https://vercel.com/new)
2. Connecte ton compte GitHub si ce n'est pas déjà fait
3. Sélectionne le dépôt `lakhdar-portfolio`
4. **Framework Preset** : `Other` (le fichier `vercel.json` se charge du reste)
5. **Root Directory** : `./` (racine, ne pas changer)

### 3. Configurer les variables d'environnement (Vercel → Settings → Environment Variables)

| Nom | Valeur | Notes |
|---|---|---|
| `RESEND_API_KEY` | `re_R9wS3TPe_AzXxu7h3CnxcnMosaqssBMpK` | Ta clé Resend |
| `NOTIFY_EMAIL` | `dhllaky@gmail.com` | Adresse qui reçoit les messages |
| `SENDER_EMAIL` | `onboarding@resend.dev` | Optionnel. Tu pourras le changer en `contact@tondomaine.fr` après avoir vérifié ton domaine sur Resend |

Coche `Production`, `Preview`, `Development` pour chaque variable.

### 4. Déployer

Clique sur **Deploy**. Vercel va :
1. Installer `resend` (racine)
2. Builder le frontend (`cd frontend && yarn build`)
3. Déployer le frontend statique + la fonction `api/contact`

Première URL : `https://lakhdar-portfolio.vercel.app`

### 5. (Optionnel) Domaine custom

Settings → Domains → Add `lakhdar-damar.fr` (à acheter chez OVH/Gandi ~10€/an).

---

## Développement local

```bash
# Frontend
cd frontend
yarn install
yarn start    # http://localhost:3000

# Test API local (nécessite Vercel CLI)
npm i -g vercel
cd .. && vercel dev     # bind /api/contact + frontend ensemble
```

---

## Architecture

```
/
├── api/
│   └── contact.js          ← Fonction Vercel (Resend)
├── frontend/
│   ├── src/                ← React app
│   ├── package.json
│   └── .env.production     ← REACT_APP_BACKEND_URL vide → /api relatif
├── package.json            ← Dépendances serverless (resend)
└── vercel.json             ← Configuration Vercel
```

Le frontend appelle `/api/contact` en relatif. Vercel route cette URL vers `api/contact.js`.
Aucune base de données : le message part directement par email via Resend.

---

## Coût

**0 €/mois** sur le plan Hobby :
- 100 GB bande passante / mois
- 100 GB-hours de Serverless Functions / mois
- HTTPS auto, déploiement auto à chaque push

Resend free tier : 3 000 emails/mois, 100/jour — largement suffisant pour un portfolio.
