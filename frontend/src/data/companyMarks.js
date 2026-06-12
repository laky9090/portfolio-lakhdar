// Branded monogram marks — reliable cross-browser, consistent visual identity.
// Colors derived from each company's known brand identity.
export const COMPANY_MARKS = {
  "AXA": { bg: "#00008F", fg: "#FFFFFF", abbr: "AXA", weight: 700 },
  "Sanofi": { bg: "#7A00E6", fg: "#FFFFFF", abbr: "Sa", weight: 600 },
  "Abeille Assurances": { bg: "#FFD400", fg: "#0B0D10", abbr: "AA", weight: 800 },
  "BNP Paribas Leasing Solutions": { bg: "#00915A", fg: "#FFFFFF", abbr: "BNP", weight: 700 },
  "TotalEnergies": { bg: "#ED1C24", fg: "#FFFFFF", abbr: "TE", weight: 700 },
  "Lacoste": { bg: "#004526", fg: "#FFFFFF", abbr: "L", weight: 600 },
  "Corelia (ex D.FI)": { bg: "#0066B3", fg: "#FFFFFF", abbr: "Co", weight: 600 },
  "Gebo Cermex": { bg: "#003DA5", fg: "#FFFFFF", abbr: "GC", weight: 700 },
};

export function getMark(name) {
  return (
    COMPANY_MARKS[name] || {
      bg: "#0B0D10",
      fg: "#FFFFFF",
      abbr: name.slice(0, 2).toUpperCase(),
      weight: 700,
    }
  );
}
