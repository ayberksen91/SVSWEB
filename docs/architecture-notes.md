# Architecture and platform sketches

## Cloudflare-compatible service boundaries

- `apps/web` – frontend shell and future public pages
- `functions` – API and worker-facing endpoints
- `db` – D1 schema and migrations
- `docs` – architecture and roadmap

## Data contracts

- `site_settings` stores branding and configuration values.
- `pages` and `sections` model the CMS content graph.
- `portfolio_items` and `media_assets` support business and creative portfolios.
- `contact_submissions` records inbound inquiries.
- `users`, `roles`, and `user_roles` drive auth and permission enforcement.

## Security requirements to encode in the implementation later

- Server-side auth checks on every admin route.
- Permission scoping for supervisor roles.
- Strict upload validation and content-type restrictions.
- Allowed embed providers only.
- Rate limiting and anti-spam protections on contact submissions.
- Sanitization of CMS JSON and HTML embed fields.

## Current project state

This repository has no committed source implementation on the default branch yet, so this is a fresh foundation rather than a refactor of existing code.
