# Production Readiness Audit Report

Generated: 2026-07-29

Scope: Static Vite React website for Vimal Oleo Chemicals. This report reflects the current state after applying the production-blocker fixes.

## Current Status

The site is production-ready for a static website deployment, with one operational requirement: FormSubmit must be activated after the live site is deployed.

There is no backend, database, auth layer, API route, or server-side lead storage in this project. Traceability ends at browser navigation, FormSubmit, `mailto:`, `tel:`, WhatsApp, Google Maps, and static file downloads.

## Fixed Production Blockers

| Area | Status | Result |
|---|---|---|
| Dependency security | Fixed | `npm audit` reports zero vulnerabilities. |
| API key exposure risk | Fixed | Stale Gemini/API Studio client env wiring and docs were removed. |
| Broken public form variants | Fixed | Prototype contact variant routing/files were removed from the production source path. |
| Unknown routes | Fixed | Unknown paths now render a not-found page instead of silently rendering the homepage. |
| Security headers | Fixed | Vercel headers now include CSP, HSTS, nosniff, referrer policy, permissions policy, and frame protection. |
| Contact data drift | Fixed | Email, phone, WhatsApp, maps, FormSubmit, footer, and contact dock handoffs now read from `src/lib/contact-data.ts`. |
| Dev server exposure | Fixed | `npm run dev` is localhost by default; `npm run dev:host` is available only when explicitly needed. |
| UI/UX fundamentals | Fixed | Fonts are loaded, focus states are visible, form errors are accessible, mobile menu overflow is handled, product cards have clear detail affordances, mobile industries layout is stable, and contact actions use consistent brand cards. |

## Remaining Security Notes

### Critical

No critical issues are currently known.

### High

No high-severity issues are currently known from the checks run.

### Medium

| ID | Finding | Impact | Recommendation |
|---|---|---|---|
| SEC-MED-001 | The contact form sends inquiry data directly to FormSubmit. | Spam protection, rate limiting, and delivery confirmation depend on a third-party service. | This is acceptable for a static site, but use a first-party serverless endpoint later if verified delivery, rate limiting, or lead storage is required. |
| SEC-MED-002 | FormSubmit CAPTCHA is disabled. | Lower friction for users, but more possible spam. | Keep the honeypot and monitor inbox quality. Enable FormSubmit CAPTCHA or move to a backend if spam becomes a problem. |

### Low

| ID | Finding | Impact | Recommendation |
|---|---|---|---|
| SEC-LOW-001 | Contact success message is based on FormSubmit redirect query state. | Users can manually open the success URL. | Treat it as a UI acknowledgement, not a cryptographic delivery receipt. |
| SEC-LOW-002 | `.DS_Store` files may exist locally in ignored folders. | Manual uploads could include local metadata. | Keep `.DS_Store` ignored and avoid manual uploads from Finder. |

## Traceability Summary

| Route or Control | Current Trace |
|---|---|
| `/` | Renders the home page. |
| `/about` | Renders the about page. |
| `/products` | Renders the products page. |
| `/contact-us` | Renders the production contact page. |
| Unknown routes | Render the not-found page. |
| Contact form | Validates locally, then posts to FormSubmit at `vimaloleochemicals@gmail.com`. |
| Email links | Use `mailto:vimaloleochemicals@gmail.com`. |
| Phone links | Use `tel:` values from centralized contact data. |
| WhatsApp link | Uses the centralized WhatsApp URL. |
| Maps links | Use the centralized Google Maps URL. |
| Brochure download | Uses the static PDF in `public/`. |

## Contact Form Activation Checklist

1. Deploy the website.
2. Open `/contact-us` on the live domain.
3. Submit one real test inquiry.
4. Open `vimaloleochemicals@gmail.com`.
5. Click the FormSubmit activation link.
6. Submit a second test inquiry and confirm it arrives in the inbox.

## Optional Future Cleanup

| Priority | Task | Why |
|---|---|---|
| Medium | Replace FormSubmit with a first-party serverless endpoint. | Adds server-side validation, rate limiting, delivery logs, and lead persistence. |
| Medium | Consolidate product catalog and product detail modal data. | Prevents product copy drift between home and products pages. |
| Medium | Add stricter TypeScript and lint rules after dead-code cleanup. | Catches unused code and type drift earlier. |
| Medium | Optimize below-the-fold images and the brochure PDF. | Improves performance and deployment size. |
| Low | Rename public assets with spaces/typos to kebab-case names. | Makes CDN/manual URL handling safer and cleaner. |
| Low | Remove unused source/design assets and ad hoc test scripts. | Keeps the repo easier to maintain. |

## Verification Commands

| Command | Result |
|---|---|
| `npm audit` | Passed, zero vulnerabilities. |
| `npm run lint` | Passed. |
| `npm run build` | Passed. |
