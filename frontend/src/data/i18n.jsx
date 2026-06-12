// Bilingual translations: FR (canonical) + EN.
// All UI strings and structured data live here.
// Each component uses `const t = useI18n()` to access the right language.

import { createContext, useContext, useEffect, useMemo, useState } from "react";

const IT_CAREER_START_YEAR = 2015;
const PM_INFRA_START_YEAR = 2017;

function years(start) {
  return new Date().getFullYear() - start;
}

const TOTAL_IT_YEARS = years(IT_CAREER_START_YEAR);
const PM_INFRA_YEARS = years(PM_INFRA_START_YEAR);

const PHOTO = "https://customer-assets.emergentagent.com/job_design-impact-16/artifacts/dma8jbex_JUD_6173a.jpg";
const CV_URL = "https://customer-assets.emergentagent.com/job_101a3f2c-482b-4382-9291-93afae4d9b77/artifacts/br868tb6_CV_Lakhdar_DAMAR.html";
const CAL_URL = "https://cal.com/lakhdar-damar/15min";
const LINKEDIN = "https://www.linkedin.com/in/lakhdar-damar/";

const COMPANY_BASE = {
  name: "LAKY",
  form: "SASU",
  siret: "924 923 766 00027",
  siren: "924 923 766",
  vat: "FR77 924 923 766",
  rcs: "Bobigny",
  address: "35 avenue Paul Vaillant Couturier, 93150 Le Blanc-Mesnil",
  created: "26/03/2024",
};

// ---------------- FR ----------------
const fr = {
  lang: "fr",
  meta: { totalYears: TOTAL_IT_YEARS, pmYears: PM_INFRA_YEARS, careerStart: IT_CAREER_START_YEAR },
  profile: {
    name: "Lakhdar DAMAR",
    role: "Chef de Projet IT Infrastructure",
    photo: PHOTO,
    shortPitchPrefix: "Chef de projet IT Infrastructure freelance.",
    shortPitch: `${TOTAL_IT_YEARS} ans dans l'IT, dont ${PM_INFRA_YEARS} ans en gestion de projet IT Infrastructure pour des grands groupes, Banque, Assurance, Pharma, Industrie. Je livre dans les délais, dans le budget, et avec un niveau de sécurité non négociable.`,
    contact: {
      email: "dhllaky@gmail.com",
      phone: "07 53 77 03 20",
      linkedin: LINKEDIN,
      location: "Paris, Île-de-France · Remote/Hybride",
      availability: "Contactez-moi pour mes disponibilités",
      calUrl: CAL_URL,
      cvUrl: CV_URL,
    },
    company: { ...COMPANY_BASE, activity: "Conseil en systèmes et logiciels informatiques" },
  },
  ui: {
    nav: {
      profil: "Profil", chiffres: "Chiffres clés", expertises: "Expertises",
      stack: "Stack", methode: "Méthode", parcours: "Parcours",
      certifications: "Certifications", contact: "Contact",
      cv: "CV", cta: "Réserver un call",
    },
    hero: {
      h1a: "Je pilote vos ", h1b: "projets IT", h1c: " les plus ", h1d: "stratégiques",
      cta1: "Réserver un call 15 min", cta2: "Écrire un message", cta3: "Télécharger mon CV",
      enBref: "en bref",
      stat_total_unit: "ans dans l'IT",
      stat_pm_unit: "ans en pilotage IT Infra",
      stat_budget: "plus gros projet piloté",
      stat_sectors: "secteurs régulés couverts",
      stat_int: "environnements internationaux",
      trusted: "Ils m'ont fait confiance",
    },
    about: {
      kicker: "/00, profil",
      h1a: "Aligner la ", h1b: "technique", h1c: " et le ", h1d: "métier",
      lead_pre: "",
      lead_em: "Chef de projet IT Infrastructure",
      lead_post: " avec une solide expertise dans le pilotage de projets IT complexes en environnements ",
      lead_accent: "multi-cloud (Azure), on-premise et hybrides",
      body: "Spécialisé dans la coordination transverse d'équipes techniques internationales, la conduite du changement et la livraison de projets dans des contextes réglementés exigeants, Banque, Assurance, Pharma, Industrie. Reconnu pour ma capacité à aligner les enjeux techniques et métier tout en assurant le respect des délais, budgets et standards de sécurité.",
      pill1_label: "Méthodes", pill1_value: "Scrum · PRINCE2 · ITIL · Cycle en V",
      pill2_label: "Cloud", pill2_value: "Azure · Hybride · On-Prem",
      pill3_label: "Secteurs", pill3_value: "Banque · Assurance · Pharma · Industrie",
    },
    metrics: {
      kicker: "/01, pourquoi me recruter",
      h1a: "Des résultats ", h1b: "mesurables",
      lead: "Des chiffres concrets issus de projets réellement livrés, budgets, périmètres, volumes et niveaux d'exigence.",
    },
    expertise: {
      kicker: "/02, expertises clés",
      h1a: "Six piliers, ", h1b: "zéro angle mort",
      lead: "Une méthode complète, de la définition du périmètre jusqu'au transfert au RUN, chaque pilier est éprouvé sur des projets critiques au sein de programmes stratégiques.",
    },
    stack: {
      kicker: "/03, stack technique",
      h1a: "Le terrain · ", h1b: "pas que la slide",
      lead: "Une connaissance opérationnelle des couches infra, cloud et sécurité pour échanger d'égal à égal avec les équipes techniques.",
      entries: "entrées",
    },
    valueprop: {
      kicker: "/04, méthode & outils",
      h1a: "Je m'adapte à ", h1b: "votre écosystème",
      lead: "Pas de friction au démarrage : je travaille avec vos outils existants, ou j'apporte les miens, déjà éprouvés sur le terrain.",
      card1_kicker: "Vous avez déjà vos outils",
      card1_h_pre: "Je m'aligne ", card1_h_em: "vite", card1_h_post: " sur vos process",
      card1_body: "J'ai manié l'ensemble des outils standards de pilotage projet, opérationnel dès la première semaine, sans courbe d'apprentissage.",
      card2_kicker: "Pas d'outil en place ?",
      card2_h_pre: "J'arrive avec mon ", card2_h_em: "template Excel",
      card2_body_pre: "Un classeur de pilotage IT prêt à l'emploi, avec un maximum de formules pour automatiser le reporting, le suivi des risques et le scoring, ",
      card2_body_strong: "sans macro",
      card2_body_post: ", déjà éprouvé sur plusieurs projets.",
      card2_bullets: [
        "Reporting automatisé (avancement, charges, RAG)",
        "Matrice des risques avec scoring dynamique",
        "Suivi budget, jalons et dépendances",
        "100 % formules, zéro macro, zéro VBA",
      ],
    },
    timeline: {
      kicker: "/05, parcours",
      h1_a: `${TOTAL_IT_YEARS} ans · `, h1_em_suffix: " terrains",
      lead: "Banque, assurance, pharma, industrie, retail. Des projets On-Prem, Cloud et hybrides, toujours en environnement réglementé ou international.",
    },
    certifications: {
      kicker: "/06, formations & certifications",
      h1a: "Des credentials, ", h1b: "vérifiables",
      certs_label: "Certifications",
      formations_label: "Formation académique",
      languages_label: "Langues",
    },
    contact: {
      kicker: "/08, contact",
      h1a: "Parlons de votre ", h1b: "prochain projet",
      lead: "Cadrage, audit, pilotage, mise en production, je réponds sous 24h ouvrées. Disponibilité immédiate ou avec un préavis d'un mois. Contactez-moi pour en savoir plus.",
      structureLabel: "Structure",
      field_name: "Nom", field_email: "Email", field_company: "Société", field_subject: "Sujet", field_message: "Message",
      ph_name: "Votre nom", ph_email: "vous@entreprise.com", ph_company: "Votre entreprise", ph_subject: "Mission, audit, etc.", ph_message: "Contexte, périmètre, deadline…",
      response_24h: "Réponse sous 24h ouvrées",
      send: "Envoyer le message", sending: "Envoi…",
      success: "Message envoyé. Je vous réponds sous 24h.",
      error_fill: "Merci de remplir nom, email et message.",
      error_generic: "Une erreur est survenue, réessayez.",
      ico: { email: "Email", phone: "Téléphone", linkedin: "LinkedIn", location: "Localisation" },
    },
    footer: {
      structure: "Structure juridique",
      contact: "Contact",
      pitch: "Pilotage de projets IT Infrastructure au sein de programmes stratégiques, multi-cloud, on-premise et environnements régulés.",
      tagline: "Conçu pour les recruteurs exigeants.",
      seat: "Siège",
    },
  },
  metrics: [
    { value: "600k€", label: "Plus gros projet piloté", caption: "Séparation IT, AXA" },
    { value: "4200+", label: "Postes sécurisés", caption: "Déploiement MFA / EDR" },
    { value: "120", label: "Serveurs migrés", caption: "Décommissionnement & migrations" },
    { value: `${TOTAL_IT_YEARS}`, label: "Années dans l'IT", caption: `Depuis ${IT_CAREER_START_YEAR}`, note: `Dont ${PM_INFRA_YEARS} ans en pilotage IT Infra` },
    { value: "7", label: "Secteurs régulés", caption: "Banque, Assurance, Pharma…" },
    { value: "200+", label: "Flux réseau analysés", caption: "Coupures & rapatriements" },
  ],
  expertises: [
    { title: "Pilotage & Planification", short: "Périmètre, Gantt, jalons, charges, dépendances, arbitrage des priorités.", icon: "Compass" },
    { title: "Gouvernance & Reporting", short: "COPROJ, COPIL, RACI, KPI, comités de validation, gates & go/no-go.", icon: "BarChart3" },
    { title: "Risques, Alertes & Escalades", short: "Identification, mitigation, gestion des incidents, suivi jusqu'à résolution.", icon: "ShieldAlert" },
    { title: "Coordination & Delivery", short: "Équipes infra/réseau/cloud, prestataires, métier ↔ technique, déploiements.", icon: "Network" },
    { title: "Tests, MEP & Sécurité", short: "UAT, anomalies, go-live, firewall, accès, conformité ITIL/ISO.", icon: "ShieldCheck" },
    { title: "Changement, Budget & Doc", short: "Conduite du changement, handover RUN, coûts, PMP, décisions.", icon: "FileText" },
  ],
  stack: [
    { cat: "Cloud", items: ["Azure IaaS", "Azure SSO", "Azure AD", "Azure VPN", "Azure Monitoring", "Guacamole"] },
    { cat: "Réseaux", items: ["TCP/IP", "LAN/WAN", "VLAN", "SAN", "WIFI", "VPN IPSec", "Firewall", "SNMP"] },
    { cat: "Systèmes", items: ["Windows 10/11", "Windows Server", "AIX", "Red Hat", "Ubuntu", "Debian", "AS400", "IBM i"] },
    { cat: "Virtualisation", items: ["VMware", "Hyper-V"] },
    { cat: "Sécurité", items: ["CrowdStrike", "MFA", "CyberArk", "ACL"] },
    { cat: "Base de données", items: ["SQL Server", "Oracle", "DataStage", "IBM DB2"] },
    { cat: "Scripts", items: ["Bash", "PowerShell", "Python", "SQL"] },
    { cat: "Outils projet", items: ["JIRA", "MS Project", "ServiceNow", "Trello", "Asana", "Gantt Project"] },
    { cat: "Méthodes", items: ["Agile Scrum", "Cycle en V", "PRINCE2", "ITIL"] },
    { cat: "Supervision", items: ["Centreon", "Veeam", "Micro Focus", "Splunk", "Commvault"] },
  ],
  experiences: [
    {
      company: "AXA",
      logo: "https://customer-assets.emergentagent.com/job_design-impact-16/artifacts/7rycan9s_AXA_Logo.png",
      period: "Sep. 2024 – Déc. 2025", duration: "1 an 4 mois",
      role: "Chef de Projet IT Infrastructure",
      context: "International FR/EN · Agile Scrum · Gating process groupe AXA · Coordination DevOps, Cloud Broker, Product Owner et équipes métier.",
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
      logo: "https://customer-assets.emergentagent.com/job_design-impact-16/artifacts/bjt3f34t_logo%20abeille%20assurances.png",
      period: "Nov. 2022 – Août 2024", duration: "1 an 10 mois",
      role: "Chef de Projet Infrastructure & Cybersécurité",
      context: "Assurance / Bancaire réglementé · Cycle en V · Coordination Réseaux, Systèmes, Middleware, Stockage, Sécurité · Design Authority & Comité Cyber · FR/EN.",
      highlights: [
        "Participation au programme de séparation AVIVA France ↔ AVIVA UK : pilotage des lots infrastructure sur 8 mois, décommissionnement 120 serveurs, 200+ flux réseau analysés.",
        "Déploiement MFA Microsoft Authenticator sur ~4 200 postes (coordination AD, Sécurité, Support).",
        "Déploiement EDR CrowdStrike (Linux) sur serveurs critiques.",
        "Migration 20 serveurs AIX 7.1 → 7.2 avec maintien de disponibilité.",
        "Projet ERP : mise en place SSO SAML v2 et VPN IPsec partenaires.",
      ],
      tags: ["AVIVA", "Cyber", "MFA", "AIX"],
    },
    {
      company: "Sanofi",
      logo: "https://customer-assets.emergentagent.com/job_design-impact-16/artifacts/2s309tp2_Logo_Sanofi.png",
      period: "Nov. 2021 – Oct. 2022", duration: "1 an",
      role: "Chef de Projet Infrastructure (GxP)",
      context: "Pharmaceutique réglementé GxP · Coordination équipes offshore Cognizant (Inde) · FR/EN.",
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
      logo: "https://customer-assets.emergentagent.com/job_design-impact-16/artifacts/hp4b0use_Lacoste_logo.png",
      period: "Jan. 2021 – Oct. 2021", duration: "10 mois",
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
      logo: "https://customer-assets.emergentagent.com/job_design-impact-16/artifacts/u62qkwwx_Logo%20Corelia.png",
      period: "Mar. 2020 – Déc. 2020", duration: "10 mois",
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
      logo: "https://customer-assets.emergentagent.com/job_design-impact-16/artifacts/y5tbcy56_Logo%20bnp.png",
      period: "Fév. 2019 – Fév. 2020", duration: "1 an",
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
      logo: "https://customer-assets.emergentagent.com/job_design-impact-16/artifacts/7w06ic0y_Logo_TotalEnergies.svg",
      period: "Fév. 2017 – Fév. 2019", duration: "2 ans",
      role: "Chef de Projet Infrastructure Multi-pays",
      context: "International multi-pays · Coordination offshore Capgemini (Inde) et CGI (Maroc, Canada) · FR/EN.",
      highlights: [
        "Migration vers Azure : déploiement IaaS et extension multi-sites.",
        "Projet drone, Raffinerie de Feyzin : pilotage drone sur Azure, infrastructure réseaux & flux sécurisés en milieu industriel sensible.",
        "Socle infrastructure décisionnelle : flux CFT, Job Control-M et conteneurs Docker sur Azure.",
        "Extension infrastructure multi-pays : serveurs applicatifs et BDD sur plusieurs entités.",
      ],
      tags: ["Azure", "Industrie", "Drone"],
    },
    {
      company: "Gebo Cermex",
      logo: "https://customer-assets.emergentagent.com/job_design-impact-16/artifacts/8l8ubljw_Gebo_Cermex_logo.png",
      period: "Sep. 2015 – Août 2016", duration: "1 an",
      role: "Apprenti Réseaux, équipe Remote Access",
      context: "Industriel international · FR/EN.",
      highlights: [
        "Configuration VPN Fortinet 40C : déploiements clients internationaux.",
        "Wi-Fi industriel usine Heineken (Italie) : réalité augmentée pour maintenance à distance.",
        "Gestion droits d'accès utilisateurs sites distants.",
        "Tests plateforme EasyAccess : liaisons LAN-to-LAN.",
      ],
      tags: ["VPN", "Industriel"],
    },
  ],
  certifications: [
    { name: "PSM1", year: "2025", body: "Scrum.org" },
    { name: "ITIL 4 Foundation", year: "2025", body: "Axelos" },
    { name: "AWS CCP (CLF-C02)", year: "2024", body: "Amazon Web Services" },
    { name: "PRINCE2 Foundation", year: "2022", body: "Axelos" },
    { name: "Azure AZ-900", year: "2021", body: "Microsoft" },
  ],
  formations: [
    { school: "IGS", title: "Master Systèmes & Réseaux, option Management de Projet IT", year: "2018" },
    { school: "UHA", title: "Licence Admin. & Sécurité Réseaux", year: "2016" },
    { school: "UHA", title: "DUT Réseaux & Télécoms", year: "2015" },
  ],
  languages: [
    { lang: "Français", level: "Natif" },
    { lang: "Anglais", level: "Professionnel B2" },
  ],
};

// ---------------- EN ----------------
const en = {
  ...fr,
  lang: "en",
  profile: {
    ...fr.profile,
    role: "IT Infrastructure Project Manager",
    shortPitchPrefix: "Freelance IT Infrastructure Project Manager.",
    shortPitch: `${TOTAL_IT_YEARS} years in IT, including ${PM_INFRA_YEARS} years managing IT Infrastructure projects for major enterprises, Banking, Insurance, Pharma, Industry. I deliver on time, on budget, with non-negotiable security standards.`,
    contact: {
      ...fr.profile.contact,
      location: "Paris, France · Remote/Hybrid",
      availability: "Contact me for current availability",
    },
    company: { ...fr.profile.company, activity: "IT systems and software consulting" },
  },
  ui: {
    nav: {
      profil: "Profile", chiffres: "Key figures", expertises: "Expertise",
      stack: "Stack", methode: "Method", parcours: "Experience",
      certifications: "Certifications", contact: "Contact",
      cv: "CV", cta: "Book a call",
    },
    hero: {
      h1a: "I lead your ", h1b: "most strategic", h1c: " ", h1d: "IT projects",
      cta1: "Book a 15-min call", cta2: "Send a message", cta3: "Download my CV",
      enBref: "at a glance",
      stat_total_unit: "years in IT",
      stat_pm_unit: "years leading IT Infra projects",
      stat_budget: "largest project led",
      stat_sectors: "regulated sectors covered",
      stat_int: "international environments",
      trusted: "Trusted by",
    },
    about: {
      kicker: "/00, profile",
      h1a: "Bridging ", h1b: "engineering", h1c: " and ", h1d: "business",
      lead_pre: "",
      lead_em: "IT Infrastructure Project Manager",
      lead_post: " with strong expertise leading complex IT projects across ",
      lead_accent: "multi-cloud (Azure), on-premise and hybrid environments",
      body: "Specialized in cross-functional coordination of international tech teams, change management, and delivering projects in demanding regulated contexts, Banking, Insurance, Pharma, Industry. Recognized for aligning technical and business stakes while protecting deadlines, budgets and security standards.",
      pill1_label: "Methods", pill1_value: "Scrum · PRINCE2 · ITIL · V-model",
      pill2_label: "Cloud", pill2_value: "Azure · Hybrid · On-Prem",
      pill3_label: "Sectors", pill3_value: "Banking · Insurance · Pharma · Industry",
    },
    metrics: {
      kicker: "/01, why hire me",
      h1a: "Results ", h1b: "you can measure",
      lead: "Concrete numbers from projects actually delivered, budgets, scope, volumes and required standards.",
    },
    expertise: {
      kicker: "/02, core skills",
      h1a: "Six pillars, ", h1b: "no blind spot",
      lead: "A complete method, from scope definition to RUN handover, every pillar battle-tested on critical projects within strategic programs.",
    },
    stack: {
      kicker: "/03, technical stack",
      h1a: "The field · ", h1b: "not just the slide",
      lead: "Hands-on knowledge of infra, cloud and security layers, peer-to-peer conversations with technical teams.",
      entries: "items",
    },
    valueprop: {
      kicker: "/04, method & tools",
      h1a: "I adapt to ", h1b: "your ecosystem",
      lead: "No friction at kickoff: I work with your existing tools, or bring my own, already proven in the field.",
      card1_kicker: "You already have your tools",
      card1_h_pre: "I get aligned ", card1_h_em: "fast", card1_h_post: " with your process",
      card1_body: "I have hands-on experience with every standard project management tool, operational from week one, no learning curve.",
      card2_kicker: "No tooling in place?",
      card2_h_pre: "I bring my own ", card2_h_em: "Excel template",
      card2_body_pre: "A ready-to-use IT project workbook, packed with formulas to automate reporting, risk tracking and scoring, ",
      card2_body_strong: "no macros",
      card2_body_post: ", already proven across several projects.",
      card2_bullets: [
        "Automated reporting (progress, workload, RAG)",
        "Risk matrix with dynamic scoring",
        "Budget, milestones and dependencies tracking",
        "100% formulas, zero macro, zero VBA",
      ],
    },
    timeline: {
      kicker: "/05, experience",
      h1_a: `${TOTAL_IT_YEARS} years · `, h1_em_suffix: " companies",
      lead: "Banking, insurance, pharma, industry, retail. On-Prem, Cloud and hybrid projects, always in regulated or international environments.",
    },
    certifications: {
      kicker: "/06, education & certifications",
      h1a: "Credentials, ", h1b: "verifiable",
      certs_label: "Certifications",
      formations_label: "Academic background",
      languages_label: "Languages",
    },
    contact: {
      kicker: "/08, contact",
      h1a: "Let's talk about your ", h1b: "next project",
      lead: "Scoping, audit, project leadership, go-live, I reply within 24 business hours. Immediate start or one-month notice period. Reach out to learn more.",
      structureLabel: "Entity",
      field_name: "Name", field_email: "Email", field_company: "Company", field_subject: "Subject", field_message: "Message",
      ph_name: "Your name", ph_email: "you@company.com", ph_company: "Your company", ph_subject: "Project, audit, etc.", ph_message: "Context, scope, deadline…",
      response_24h: "Reply within 24 business hours",
      send: "Send message", sending: "Sending…",
      success: "Message sent. I'll reply within 24 hours.",
      error_fill: "Please fill in name, email and message.",
      error_generic: "Something went wrong, please try again.",
      ico: { email: "Email", phone: "Phone", linkedin: "LinkedIn", location: "Location" },
    },
    footer: {
      structure: "Legal entity",
      contact: "Contact",
      pitch: "IT Infrastructure project leadership within strategic programs, multi-cloud, on-premise and regulated environments.",
      tagline: "Built for discerning recruiters.",
      seat: "Registered office",
    },
  },
  metrics: [
    { value: "600k€", label: "Largest project led", caption: "IT separation, AXA" },
    { value: "4200+", label: "Endpoints secured", caption: "MFA / EDR rollout" },
    { value: "120", label: "Servers migrated", caption: "Decommissioning & migrations" },
    { value: `${TOTAL_IT_YEARS}`, label: "Years in IT", caption: `Since ${IT_CAREER_START_YEAR}`, note: `Including ${PM_INFRA_YEARS} years as IT Infra PM` },
    { value: "7", label: "Regulated sectors", caption: "Banking, Insurance, Pharma…" },
    { value: "200+", label: "Network flows analysed", caption: "Cutover & repatriation" },
  ],
  expertises: [
    { title: "Planning & Delivery", short: "Scope, Gantt, milestones, workload, dependencies, prioritization.", icon: "Compass" },
    { title: "Governance & Reporting", short: "Project board, steerco, RACI, KPIs, gates & go/no-go.", icon: "BarChart3" },
    { title: "Risks, Alerts & Escalation", short: "Identification, mitigation, incident handling, follow-up to resolution.", icon: "ShieldAlert" },
    { title: "Coordination & Delivery", short: "Infra/network/cloud teams, vendors, business ↔ tech, rollouts.", icon: "Network" },
    { title: "Testing, Go-live & Security", short: "UAT, defects, go-live, firewall, access, ITIL/ISO compliance.", icon: "ShieldCheck" },
    { title: "Change, Budget & Docs", short: "Change management, RUN handover, cost, PMP, decisions.", icon: "FileText" },
  ],
  // stack: keep canonical (technical terms identical)
  stack: fr.stack.map((s) => ({
    ...s,
    cat: ({
      "Cloud": "Cloud", "Réseaux": "Networking", "Systèmes": "Systems",
      "Virtualisation": "Virtualization", "Sécurité": "Security",
      "Base de données": "Databases", "Scripts": "Scripting",
      "Outils projet": "PM tools", "Méthodes": "Methods", "Supervision": "Monitoring",
    })[s.cat] || s.cat,
  })),
  experiences: [
    {
      company: "AXA", logo: fr.experiences[0].logo,
      period: "Sep 2024 – Dec 2025", duration: "1 year 4 months",
      role: "IT Infrastructure Project Manager",
      context: "International FR/EN · Agile Scrum · AXA group gating process · Coordination with DevOps, Cloud Broker, Product Owner and business teams.",
      highlights: [
        "Led a strategic IT separation project (budget €600k): PMP, planning, risks and governance.",
        "Migration to MPI on Azure (Dev/Preprod/Prod), landing zone creation and cross-team coordination.",
        "Reconfiguration of network flows (UDM matrices) & secured cross-environment transfers.",
        "Coordinated technical tests + UAT, hardening, pentests, gate passing through go-live.",
      ],
      tags: ["Azure", "Scrum", "Security", "€600k"],
    },
    {
      company: "Abeille Assurances", logo: fr.experiences[1].logo,
      period: "Nov 2022 – Aug 2024", duration: "1 year 10 months",
      role: "Infrastructure & Cybersecurity Project Manager",
      context: "Regulated insurance/banking · V-model · Coordination of Network, Systems, Middleware, Storage, Security · Design Authority & Cyber Committee · FR/EN.",
      highlights: [
        "Contributed to the AVIVA France ↔ AVIVA UK separation program: led infrastructure workstreams over 8 months, decommissioned 120 servers, analyzed 200+ network flows.",
        "Rolled out MFA Microsoft Authenticator on ~4,200 endpoints (AD, Security, Support coordination).",
        "Deployed CrowdStrike EDR (Linux) on critical servers.",
        "Migrated 20 AIX 7.1 → 7.2 servers maintaining availability.",
        "ERP project: SSO SAML v2 setup and partner IPsec VPNs.",
      ],
      tags: ["AVIVA", "Cyber", "MFA", "AIX"],
    },
    {
      company: "Sanofi", logo: fr.experiences[2].logo,
      period: "Nov 2021 – Oct 2022", duration: "1 year",
      role: "Infrastructure Project Manager (GxP)",
      context: "Regulated pharmaceutical GxP · Offshore Cognizant teams coordination (India) · FR/EN.",
      highlights: [
        "Lift & Shift On-Prem → Azure migration in GxP compliance.",
        "Oracle 11.2 → 19c upgrade (critical DBs on Azure containers).",
        "Italy datacenter relocation: ~15 VMs + 2 physical servers, full decommissioning.",
        "Upgrade of legacy Windows & Linux OS in GxP environment.",
      ],
      tags: ["GxP", "Azure", "Oracle"],
    },
    {
      company: "Lacoste", logo: fr.experiences[3].logo,
      period: "Jan 2021 – Oct 2021", duration: "10 months",
      role: "Network & Telecom Project Manager",
      context: "International retail · FR & USA projects · FR/EN.",
      highlights: [
        "Champs-Élysées flagship: full network & telecom infrastructure rollout.",
        "USA stores (Broadway & Las Vegas): VPN, Wi-Fi, interconnects.",
        "US datacenter extension to IBM Cloud (latency & performance).",
        "Azure foundation restructuring: naming conventions, cloud structure.",
      ],
      tags: ["Retail", "Azure", "Multi-country"],
    },
    {
      company: "Corelia (ex D.FI)", logo: fr.experiences[4].logo,
      period: "Mar 2020 – Dec 2020", duration: "10 months",
      role: "Infrastructure Project Manager (IT Services)",
      context: "IT services firm · External clients · FR.",
      highlights: [
        "DR/BCP infrastructure replacement (storage, backup, DB) in distribution sector.",
        "IBM i environments upgrade, hardening of critical platforms.",
        "Implementation of industrialized 24/7 supervision as managed services.",
      ],
      tags: ["DR/BCP", "IBM i"],
    },
    {
      company: "BNP Paribas Leasing Solutions", logo: fr.experiences[5].logo,
      period: "Feb 2019 – Feb 2020", duration: "1 year",
      role: "Infrastructure Project Manager (Banking)",
      context: "Banking · Critical On-Premise environments · FR/EN.",
      highlights: [
        "Banking application migration UK (Barclays) → France, flow & standards compliance.",
        "Micro Focus supervision rollout on critical scope.",
        "RedHat 5 → 7 & DataStage 7 → 11 migration.",
      ],
      tags: ["Banking", "Linux", "Monitoring"],
    },
    {
      company: "TotalEnergies", logo: fr.experiences[6].logo,
      period: "Feb 2017 – Feb 2019", duration: "2 years",
      role: "Multi-country Infrastructure Project Manager",
      context: "International multi-country · Offshore coordination with Capgemini (India) and CGI (Morocco, Canada) · FR/EN.",
      highlights: [
        "Migration to Azure: IaaS rollout and multi-site extension.",
        "Drone project, Feyzin refinery: drone management on Azure, network infrastructure & secured flows in a sensitive industrial environment.",
        "Decision-making infrastructure foundation: CFT flows, Control-M jobs and Docker containers on Azure.",
        "Multi-country infrastructure extension: application servers and DBs across multiple entities.",
      ],
      tags: ["Azure", "Industry", "Drone"],
    },
    {
      company: "Gebo Cermex", logo: fr.experiences[7].logo,
      period: "Sep 2015 – Aug 2016", duration: "1 year",
      role: "Network Apprentice, Remote Access team",
      context: "International industry · FR/EN.",
      highlights: [
        "Fortinet 40C VPN configuration: international client rollouts.",
        "Industrial Wi-Fi at Heineken factory (Italy): augmented reality for remote maintenance.",
        "Access rights management for remote-site users.",
        "EasyAccess platform tests: LAN-to-LAN connections.",
      ],
      tags: ["VPN", "Industrial"],
    },
  ],
  certifications: fr.certifications,
  formations: [
    { school: "IGS", title: "MSc Systems & Networks, IT Project Management track", year: "2018" },
    { school: "UHA", title: "BSc Network Administration & Security", year: "2016" },
    { school: "UHA", title: "Associate's Degree, Networks & Telecoms", year: "2015" },
  ],
  languages: [
    { lang: "French", level: "Native" },
    { lang: "English", level: "Professional B2" },
  ],
};

const DICTS = { fr, en };

// ---------------- Context ----------------
const I18nContext = createContext({ lang: "fr", t: fr, setLang: () => {} });

export function I18nProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    if (typeof window === "undefined") return "fr";
    return window.localStorage.getItem("portfolio_lang") || "fr";
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("portfolio_lang", lang);
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const value = useMemo(
    () => ({ lang, t: DICTS[lang] || fr, setLang: setLangState }),
    [lang]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  return useContext(I18nContext);
}
