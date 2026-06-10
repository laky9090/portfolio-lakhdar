// Portfolio data - Lakhdar DAMAR

export const PROFILE = {
  name: "Lakhdar DAMAR",
  role: "Chef de Projet IT Infrastructure",
  tagline: "Multi-cloud · Hybride · Régulé",
  shortPitch:
    "8 ans à piloter des transformations IT complexes pour des grands groupes — Banque, Assurance, Pharma, Industrie. Je livre dans les délais, dans le budget, et avec un niveau de sécurité non négociable.",
  contact: {
    email: "dhllaky@gmail.com",
    phone: "07 53 77 03 20",
    linkedin: "https://www.linkedin.com/in/lakhdar-damar/",
    location: "Paris, Île-de-France · Remote/Hybride",
    availability: "Disponible pour mission freelance",
  },
};

export const METRICS = [
  { value: "4M€", label: "Plus gros projet piloté", caption: "Séparation AVIVA FR ↔ UK" },
  { value: "4200+", label: "Postes sécurisés", caption: "Déploiement MFA / EDR" },
  { value: "120", label: "Serveurs migrés", caption: "Décommissionnement & migrations" },
  { value: "8", label: "Années d'expérience", caption: "Pilotage projets IT" },
  { value: "7", label: "Secteurs régulés", caption: "Banque, Assurance, Pharma…" },
  { value: "200+", label: "Flux réseau analysés", caption: "Coupures & rapatriements" },
];

export const EXPERTISES = [
  {
    title: "Pilotage & Planification",
    short: "Périmètre, Gantt, jalons, charges, dépendances, arbitrage des priorités.",
    icon: "Compass",
  },
  {
    title: "Gouvernance & Reporting",
    short: "COPROJ, COPIL, RACI, KPI, comités de validation, gates & go/no-go.",
    icon: "BarChart3",
  },
  {
    title: "Risques, Alertes & Escalades",
    short: "Identification, mitigation, gestion des incidents, suivi jusqu'à résolution.",
    icon: "ShieldAlert",
  },
  {
    title: "Coordination & Delivery",
    short: "Équipes infra/réseau/cloud, prestataires, métier ↔ technique, déploiements.",
    icon: "Network",
  },
  {
    title: "Tests, MEP & Sécurité",
    short: "UAT, anomalies, go-live, firewall, accès, conformité ITIL/ISO.",
    icon: "ShieldCheck",
  },
  {
    title: "Changement, Budget & Doc",
    short: "Conduite du changement, handover RUN, coûts, PMP, décisions.",
    icon: "FileText",
  },
];

export const STACK = [
  { cat: "Cloud", items: ["Azure IaaS", "Azure SSO", "Azure AD", "Azure VPN", "Azure Monitoring", "Guacamole"] },
  { cat: "Réseaux", items: ["TCP/IP", "LAN/WAN", "VLAN", "SAN", "WIFI", "VPN IPSec", "Firewall", "SNMP"] },
  { cat: "Systèmes", items: ["Windows 10/11", "Windows Server", "AIX", "Red Hat", "Ubuntu", "Debian", "AS400", "IBM i"] },
  { cat: "Virtualisation", items: ["VMware", "Hyper-V"] },
  { cat: "Sécurité", items: ["CrowdStrike", "MFA", "CyberArk", "ACL"] },
  { cat: "Base de données", items: ["SQL Server", "Oracle", "DataStage", "IBM DB2"] },
  { cat: "Scripts", items: ["Bash", "PowerShell", "Python", "SQL"] },
  { cat: "Outils projet", items: ["JIRA", "MS Project", "ServiceNow", "Trello", "Gantt Project"] },
  { cat: "Méthodes", items: ["Agile Scrum", "Cycle en V", "PRINCE2", "ITIL"] },
  { cat: "Supervision", items: ["Centreon", "Veeam", "Micro Focus", "Splunk", "Commvault"] },
];

export const EXPERIENCES = [
  {
    company: "AXA",
    logo: "https://logo.clearbit.com/axa.com",
    period: "Sep. 2024 – Déc. 2025",
    duration: "1 an 4 mois",
    role: "Chef de Projet IT Infrastructure",
    context:
      "International FR/EN · Agile Scrum · Gating process groupe AXA · Coordination DevOps, Cloud Broker, Product Owner et équipes métier.",
    highlights: [
      "Pilotage d'un projet stratégique de séparation IT (budget 600k€), élaboration du PMP, gestion planning, risques et gouvernance.",
      "Migration vers environnement MPI sur Azure (Dev/Preprod/Prod), création d'une landing zone et coordination transverse.",
      "Reconfiguration des flux réseau (matrices UDM) & sécurisation transferts inter-environnements.",
      "Coordination tests techniques + UAT, durcissement, pentests, passage des gates jusqu'au go-live.",
    ],
    tags: ["Azure", "Scrum", "Sécurité", "600k€"],
  },
  {
    company: "Abeille Assurances",
    logo: "https://logo.clearbit.com/abeille-assurances.fr",
    period: "Nov. 2022 – Août 2024",
    duration: "1 an 10 mois",
    role: "Chef de Projet Infrastructure & Cybersécurité",
    context:
      "Assurance / Bancaire réglementé · Cycle en V · Coordination Réseaux, Systèmes, Middleware, Stockage, Sécurité · Design Authority & Comité Cyber · FR/EN.",
    highlights: [
      "Séparation AVIVA France ↔ AVIVA UK (3-4M€) : pilotage 8 mois, décommissionnement 120 serveurs, 200+ flux réseau analysés.",
      "Déploiement MFA Microsoft Authenticator sur ~4 200 postes (coordination AD, Sécurité, Support).",
      "Déploiement EDR CrowdStrike (Linux) sur serveurs critiques.",
      "Migration 20 serveurs AIX 7.1 → 7.2 avec maintien de disponibilité.",
      "Projet ERP : mise en place SSO SAML v2 et VPN IPsec partenaires.",
    ],
    tags: ["4M€", "Cyber", "MFA", "AIX"],
  },
  {
    company: "Sanofi",
    logo: "https://logo.clearbit.com/sanofi.com",
    period: "Nov. 2021 – Oct. 2022",
    duration: "1 an",
    role: "Chef de Projet Infrastructure (GxP)",
    context:
      "Pharmaceutique réglementé GxP · Coordination équipes offshore Cognizant (Inde) · FR/EN.",
    highlights: [
      "Migration Lift & Shift On-Prem → Azure en conformité GxP.",
      "Upgrade Oracle 11.2 → 19c (BDD critiques sur conteneurs Azure).",
      "Déplacement datacenter Italie : ~15 VMs + 2 physiques, décommissionnement complet.",
      "Upgrade OS Windows & Linux obsolètes en environnement GxP.",
    ],
    tags: ["GxP", "Azure", "Oracle"],
  },
  {
    company: "Lacoste",
    logo: "https://logo.clearbit.com/lacoste.com",
    period: "Jan. 2021 – Oct. 2021",
    duration: "10 mois",
    role: "Chef de Projet Réseaux & Télécoms",
    context: "Retail international · Projets FR & USA · FR/EN.",
    highlights: [
      "Flagship Champs-Élysées : déploiement complet infrastructure réseau & télécoms.",
      "Boutiques USA (Broadway & Las Vegas) : VPN, Wi-Fi, interconnexions.",
      "Extension datacenter US vers IBM Cloud (latence & performance).",
      "Restructuration socle Azure : conventions de nommage, structuration Cloud.",
    ],
    tags: ["Retail", "Azure", "Multi-pays"],
  },
  {
    company: "Corelia (ex D.FI)",
    logo: "https://logo.clearbit.com/corelia.fr",
    period: "Mar. 2020 – Déc. 2020",
    duration: "10 mois",
    role: "Chef de Projet Infrastructure (ESN)",
    context: "ESN · Projets clients externes · FR.",
    highlights: [
      "Remplacement infrastructure PRA/PCA (stockage, sauvegarde, BDD) en secteur distribution.",
      "Upgrade environnements IBM i, sécurisation plateformes critiques.",
      "Mise en place supervision 24/7 industrialisée en services managés.",
    ],
    tags: ["PRA/PCA", "IBM i"],
  },
  {
    company: "BNP Paribas Leasing Solutions",
    logo: "https://logo.clearbit.com/mabanque.bnpparibas",
    period: "Fév. 2019 – Fév. 2020",
    duration: "1 an",
    role: "Chef de Projet Infrastructure (Banque)",
    context: "Bancaire · Environnements On-Premise critiques · FR/EN.",
    highlights: [
      "Migration application bancaire UK (Barclays) → France, conformité flux et standards.",
      "Déploiement supervision Micro Focus sur périmètre critique.",
      "Migration RedHat 5 → 7 & DataStage 7 → 11.",
    ],
    tags: ["Banque", "Linux", "Supervision"],
  },
  {
    company: "TotalEnergies",
    logo: "https://logo.clearbit.com/totalenergies.com",
    period: "Fév. 2017 – Fév. 2019",
    duration: "2 ans",
    role: "Chef de Projet Infrastructure Multi-pays",
    context:
      "International multi-pays · Coordination offshore Capgemini (Inde) et CGI (Maroc, Canada) · FR/EN.",
    highlights: [
      "Migration vers Azure : déploiement IaaS et extension multi-sites.",
      "Projet drone — Raffinerie de Feyzin : pilotage drone sur Azure, infrastructure réseaux & flux sécurisés en milieu industriel sensible.",
      "Socle infrastructure décisionnelle : flux CFT, Job Control-M et conteneurs Docker sur Azure.",
      "Extension infrastructure multi-pays : serveurs applicatifs et BDD sur plusieurs entités.",
    ],
    tags: ["Azure", "Industrie", "Drone"],
  },
  {
    company: "Gebo Cermex",
    logo: "https://logo.clearbit.com/gebocermex.com",
    period: "Sep. 2015 – Août 2016",
    duration: "1 an",
    role: "Apprenti Réseaux — équipe Remote Access",
    context: "Industriel international · FR/EN.",
    highlights: [
      "Configuration VPN Fortinet 40C : déploiements clients internationaux.",
      "Wi-Fi industriel usine Heineken (Italie) : réalité augmentée pour maintenance à distance.",
      "Gestion droits d'accès utilisateurs sites distants.",
      "Tests plateforme EasyAccess : liaisons LAN-to-LAN.",
    ],
    tags: ["VPN", "Industriel"],
  },
];

export const CERTIFICATIONS = [
  { name: "PSM1", year: "2025", body: "Scrum.org" },
  { name: "ITIL 4 Foundation", year: "2025", body: "Axelos" },
  { name: "AWS CCP (CLF-C02)", year: "2024", body: "Amazon Web Services" },
  { name: "PRINCE2 Foundation", year: "2022", body: "Axelos" },
  { name: "Azure AZ-900", year: "2021", body: "Microsoft" },
];

export const FORMATIONS = [
  { school: "IGS", title: "Master Systèmes & Réseaux — option Management de Projet IT", year: "2018" },
  { school: "UHA", title: "Licence Admin. & Sécurité Réseaux", year: "2016" },
  { school: "UHA", title: "DUT Réseaux & Télécoms", year: "2015" },
];

export const LANGUAGES = [
  { lang: "Français", level: "Natif" },
  { lang: "Anglais", level: "Professionnel B2" },
];

export const TESTIMONIALS = [
  {
    quote:
      "Lakhdar a transformé un programme complexe en une trajectoire claire. Son alignement entre exigences sécurité et delivery a été décisif.",
    name: "Directrice Programme",
    company: "Secteur Assurance",
  },
  {
    quote:
      "Une rigueur exceptionnelle sur le pilotage du périmètre, des risques et de la gouvernance. Profil 100% fiable sur des projets régulés.",
    name: "PMO Senior",
    company: "Secteur Bancaire",
  },
  {
    quote:
      "Coordination remarquable d'équipes offshore et métier. Il rend le complexe lisible pour les COPIL.",
    name: "Head of Infrastructure",
    company: "Industrie Pharma",
  },
];
