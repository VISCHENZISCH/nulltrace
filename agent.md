# 🧠 Agent Memory — NullTrace

> Source : `NullTrace_Cahier_des_Charges.docx` — Félix TOVIGNAN (VISCHENZISCH) — Dark Packet

---

## 1. Vision du projet

**NullTrace** est une plateforme OSINT (Open Source Intelligence) web qui centralise la recherche d'informations sur des **adresses IP**, **emails** et **numéros de téléphone** à partir de sources publiques et gratuites.

### Objectifs
- Centraliser plusieurs sources OSINT gratuites dans une interface unique
- Visualisation géographique claire (cartes interactives)
- API REST documentée (Swagger/OpenAPI)
- Respect des CGU des APIs tierces
- Déploiement conteneurisé Docker

### Public cible
- Étudiants/chercheurs en cybersécurité
- Analystes SOC / Blue Team
- Professionnels de la sécurité informatique
- Communauté Dark Packet / francophone africaine

---

## 2. Modules fonctionnels

### Module 1 — Lookup Email
- Vérification existence/validité du format
- Recherche dans les bases de leaks (HaveIBeenPwned API)
- Détection plateformes d'inscription (Holehe)
- Récupération profil Gravatar
- Score de risque calculé

### Module 2 — Lookup Numéro de téléphone
- Validation/parsing via libphonenumber (Google)
- Identification pays, opérateur, type de ligne
- Géolocalisation approximative (région/ville)
- Vérification via NumVerify ou AbstractAPI
- Affichage sur carte Leaflet.js

### Module 3 — Lookup Adresse IP
- Géolocalisation (ville, région, pays, coordonnées GPS)
- Infos réseau : ISP, ASN, organisation
- Score de réputation via AbuseIPDB
- Ports/services exposés via Shodan (free tier)
- BGP/routing via BGPView API
- Affichage carte interactive OpenStreetMap + Leaflet.js

### Fonctionnalités transversales
- Interface multilingue (FR / EN) — `next-intl`
- Historique des recherches (session locale)
- Export résultats en JSON et PDF
- Thème sombre / clair
- API REST publique avec rate limiting
- Documentation Swagger / OpenAPI intégrée

---

## 3. Architecture technique

### Stack

| Couche | Technologie |
|---|---|
| **Frontend** | Next.js 14 (App Router) — TypeScript |
| **Composants UI** | Tailwind CSS + shadcn/ui |
| **Carte interactive** | Leaflet.js + OpenStreetMap |
| **Backend API** | Rust — framework Axum |
| **Base de données** | PostgreSQL + SQLite (cache local) |
| **ORM Rust** | SQLx |
| **Auth** | JWT (optionnel v1) |
| **Conteneurisation** | Docker + Docker Compose |
| **Doc API** | Swagger UI (utoipa) |
| **CI/CD** | GitHub Actions |

### Flux de données
```
Utilisateur → Next.js (UI) → API Axum (Rust) → APIs tierces → Réponse JSON → Affichage carte + tableaux
```

### Structure des répertoires
```
nulltrace/
├── backend/                  # Projet Rust / Axum
│   ├── src/
│   │   ├── main.rs
│   │   ├── routes/           # Handlers HTTP (ip.rs, email.rs, phone.rs)
│   │   ├── services/         # Appels APIs tierces
│   │   ├── models/           # Structs serde
│   │   └── db/               # SQLx migrations
│   └── Cargo.toml
├── frontend/                 # Projet Next.js 14
│   ├── app/
│   │   ├── page.tsx          # Page d'accueil
│   │   ├── ip/page.tsx
│   │   ├── email/page.tsx
│   │   ├── phone/page.tsx
│   │   └── layout.tsx
│   ├── components/
│   └── package.json
├── docker-compose.yml
└── README.md
```

---

## 4. APIs tierces intégrées

| API | Usage | Clé requise | Limite gratuite |
|---|---|---|---|
| ip-api.com | Géoloc IP | Non | 45 req/min |
| IPInfo.io | Géoloc + ASN | Oui (free) | 50 000/mois |
| AbuseIPDB | Réputation IP | Oui (free) | 1 000/jour |
| Shodan | Ports/services | Oui (free) | 100/mois |
| BGPView | Routing ASN | Non | Illimitée |
| HaveIBeenPwned | Email leaks | Oui (free) | 1 req/1.5s |
| Gravatar | Profil email | Non | Illimitée |
| NumVerify | Validation tel | Oui (free) | 250/mois |
| AbstractAPI | Géoloc tel | Oui (free) | 500/mois |

### Librairies open source
- **libphonenumber** (Google) — parsing/validation numéros
- **MaxMind GeoLite2** — base offline optionnelle pour IP
- **Holehe** — détection email sur plateformes sociales

---

## 5. Exigences non-fonctionnelles

| Critère | Exigence | Priorité |
|---|---|---|
| Performance | Réponse < 2s pour lookup IP | **Haute** |
| Disponibilité | Uptime > 99% (auto-hébergé) | **Haute** |
| Sécurité | Rate limiting, CORS strict, sanitisation inputs | **Haute** |
| Scalabilité | Architecture stateless, prête pour load balancer | Moyenne |
| Accessibilité | WCAG 2.1 AA, responsive mobile | Moyenne |
| Maintenabilité | Code documenté, tests unitaires > 70% | **Haute** |
| i18n | Support FR / EN dès v1 | Moyenne |

---

## 6. Sécurité et conformité

### Backend Rust
- Validation stricte des inputs (regex + types Rust)
- Rate limiting par IP via `tower-governor`
- Headers de sécurité HTTP (HSTS, X-Frame-Options, CSP)
- Pas de stockage persistant sans consentement
- Clés API via variables d'environnement uniquement

### Conformité légale
- Usage exclusif d'APIs et données publiques/open source
- Respect des CGU de chaque fournisseur d'API
- Avertissement légal affiché : usage éthique uniquement
- Pas de scraping non autorisé
- Conformité RGPD

### ⚠️ Avertissement éthique
> NullTrace est un outil de recherche en cybersécurité destiné à un usage légal et éthique. Toute utilisation à des fins de harcèlement, de traque ou d'activités illégales est strictement interdite.

---

## 7. Planning de développement

| Phase | Semaines | Tâches principales | Livrable |
|---|---|---|---|
| Phase 1 | S1 – S2 | Setup Rust/Axum, structure projet, CI/CD GitHub | Squelette projet |
| Phase 2 | S3 – S5 | Module IP lookup complet + tests | API IP v1 |
| Phase 3 | S6 – S8 | Module Email + Phone, frontend Next.js | Interface v1 |
| Phase 4 | S9 – S10 | Carte Leaflet, export PDF/JSON, Docker | MVP complet |
| Phase 5 | S11 – S12 | Tests, sécurité, documentation, publication GitHub | v1.0 release |

---

## 8. Dépendances techniques

### Backend Rust — Cargo.toml
```toml
[dependencies]
axum          = "0.7"
tokio         = { version = "1", features = ["full"] }
serde         = { version = "1", features = ["derive"] }
serde_json    = "1"
reqwest       = { version = "0.12", features = ["json"] }
sqlx          = { version = "0.8", features = ["postgres", "runtime-tokio"] }
tower-http    = { version = "0.5", features = ["cors", "trace"] }
tower-governor = "0.4"
utoipa        = "4"
tracing       = "0.1"
dotenvy       = "0.15"
```

### Frontend Next.js — package.json
```json
{
  "dependencies": {
    "next": "14.x",
    "react": "18.x",
    "typescript": "5.x",
    "tailwindcss": "3.x",
    "shadcn-ui": "latest",
    "leaflet": "^1.9",
    "react-leaflet": "^4",
    "@tanstack/react-query": "^5",
    "axios": "^1.6",
    "next-intl": "^3"
  }
}
```

---

## 9. Critères d'acceptation MVP

| Fonctionnalité | Critère de succès | Statut |
|---|---|---|
| Lookup IP | Retourne géoloc + ISP + réputation en < 2s | ⬜ À faire |
| Lookup Email | Détecte leaks + plateformes associées | ⬜ À faire |
| Lookup Phone | Valide + retourne pays/opérateur | ⬜ À faire |
| Carte interactive | Affiche marker sur coordonnées correctes | ⬜ À faire |
| Export JSON | Données téléchargeables proprement | ⬜ À faire |
| Rate limiting | Bloque après N requêtes / minute | ⬜ À faire |
| Docker | `docker-compose up` lance tout l'environnement | ⬜ À faire |
| Documentation | Swagger UI accessible sur `/docs` | ⬜ À faire |

---

## 10. Livrables attendus

- [ ] Code source complet sur GitHub (`VISCHENZISCH/nulltrace`)
- [ ] README détaillé avec instructions d'installation
- [ ] Docker Compose fonctionnel
- [ ] Documentation API Swagger
- [ ] Logo et assets visuels Dark Packet
- [ ] Cahier de tests (unitaires + intégration)

---

## 📌 Notes agent

- Le projet est **entièrement neuf** — aucun code source n'existe encore dans le workspace
- Architecture **découplée** : frontend Next.js ↔ backend Rust/Axum via REST
- Priorité sur les **APIs gratuites** avec gestion intelligente des rate limits
- Le repo GitHub cible est `VISCHENZISCH/nulltrace`
- Auteur : **Félix TOVIGNAN** — projet **Dark Packet**
