# Superview Systems Platform

This repository is being evolved into a modular, production-ready web platform for Superview Systems.

## Current status

- Architecture and foundational backend/data structure are being established.
- Public-facing visual pages are intentionally deferred until the CMS, data layer, and admin system are in place.

## Phase 1 foundation

This initial implementation establishes the default technical foundation for a Cloudflare-native stack:

- Cloudflare Pages for the frontend
- Pages Functions / Workers for admin and API operations
- D1 for relational content and admin records
- R2 for media storage
- A structured service layer for content, media, and contact submissions

## Repository layout

- `apps/web` – frontend shell and future public site
- `functions` – Cloudflare Pages Functions API foundation
- `db` – schema and migration planning
- `docs` – architecture and delivery roadmap

## Deployment assumptions

This project is designed for Cloudflare deployment. Real credentials, DO NOT commit secrets into this repository. Use Cloudflare environment bindings and secrets for production resources.
