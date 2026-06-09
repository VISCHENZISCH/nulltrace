# NullTrace

NullTrace est une plateforme OSINT (Open-Source Intelligence) premium développée par Dark Packet.
Cet outil permet aux analystes SOC et aux enquêteurs de réaliser des recherches approfondies sur :
- Les Adresses IP (Géolocalisation, ASN, BGP)
- Les Adresses Email (Validation, Fuites de données, Profils)
- Les Numéros de Téléphone (Opérateurs, Format, Localisation)

## Architecture

Le projet est composé d'une interface frontend moderne, conçue selon des principes de design stricts (Dark Canvas, Framer-like), et d'un backend performant pour les requêtes asynchrones vers de multiples fournisseurs de données.

## Déploiement local

```bash
npm install
npm run dev
```

Lancez le serveur et accédez à `http://localhost:3000` pour commencer vos investigations.

## Légalité et Éthique

Cet outil interroge uniquement des sources de données publiquement accessibles (Open Source Intelligence). L'utilisateur est invité à respecter l'éthique de la recherche en cybersécurité lors de son utilisation.
