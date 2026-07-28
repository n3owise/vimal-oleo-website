# Security, Optimization, and Traceability Audit Report

Generated: 2026-07-29

Scope: Static Vite React site in this repository. The review covered source code, public assets, routing, Vercel config, package metadata, contact forms, external handoffs, and current build assumptions.

Method: Six sub-agents reviewed security, optimization, UI traceability, form/external integration traceability, routing/build traceability, and data/assets traceability. High-impact findings were cross-checked directly with source searches and `npm audit`.

## Executive Summary

The site is a frontend-only static website. There is no backend, API route, database client, auth layer, storage layer, or server-side lead persistence in the codebase. Traceability therefore ends at browser navigation, FormSubmit, `mailto:`, `tel:`, WhatsApp, Google Maps, and static file downloads.

No critical security issue was confirmed. Two high-priority security/configuration risks were confirmed: a vulnerable PostCSS version in the dependency tree and a Vite config that can expose `GEMINI_API_KEY` to the browser if frontend code references it.

The production contact page at `/contact-us` is now wired to FormSubmit and has named fields plus validation. It still depends on FormSubmit activation and has no first-party delivery confirmation or backend receipt.

The largest traceability problem is that `/contact-variants/01` through `/contact-variants/10` are publicly reachable prototype routes. Only Variant09 has a real FormSubmit target. The other variants contain visible forms that either do nothing or submit nowhere.

The largest optimization problem is accumulated prototype/dead code. Contact variants, product page prototypes, duplicated product data, duplicated contact data, unused menu components, unused asset copies, and permissive TypeScript settings make future changes riskier than necessary.

## Security Findings

### Critical

No critical findings were confirmed.

### High

| ID | Finding | Evidence | Impact | Recommended Fix |
|---|---|---|---|---|
| SEC-HIGH-001 | `postcss@8.5.10` has known arbitrary file read and information disclosure advisories. | `package-lock.json:1702`, `npm audit` reports GHSA-6g55-p6wh-862q and GHSA-r28c-9q8g-f849. | A malicious CSS/source map input during build could disclose files from a developer or CI machine. | Run `npm audit fix` or update dependencies so PostCSS resolves above the vulnerable range. Re-run `npm audit`. |
| SEC-HIGH-002 | Vite defines `process.env.GEMINI_API_KEY` into client code. | `vite.config.ts:10-12`, `.env.example:1-4`, `README.md:18`. | If frontend code ever references this key, it will be bundled into public JavaScript. | Remove the define entry and stale Gemini docs. Keep private API keys only in server-side code. |

### Medium

| ID | Finding | Evidence | Impact | Recommended Fix |
|---|---|---|---|---|
| SEC-MED-001 | Contact form sends PII directly to FormSubmit with CAPTCHA disabled. | `src/components/contact-variants/ContactVariants2.tsx:8`, `412-424`. | Spam and abuse protection depend on a third party. User data is processed outside first-party infrastructure. | Prefer a serverless endpoint with validation, rate limiting, spam protection, and a privacy notice. If staying with FormSubmit, monitor inbox abuse and consider enabling CAPTCHA. |
| SEC-MED-002 | Production security headers are missing. | `vercel.json:1-11`, `index.html:3-13`. | Future XSS/clickjacking/referrer issues would have fewer browser mitigations. | Add Vercel headers for CSP, HSTS, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, and `frame-ancestors`. |
| SEC-MED-003 | Dev server binds to all interfaces. | `package.json:7`, `vite.config.ts:33-37`. | Vite dev server can be reachable from the LAN/tunnel by default. | Make `npm run dev` localhost-only and add a separate explicit host/tunnel script if required. |

### Low

| ID | Finding | Evidence | Impact | Recommended Fix |
|---|---|---|---|---|
| SEC-LOW-001 | Contact success state is query-string driven. | `src/components/contact-variants/ContactVariants2.tsx:44-48`, `347-350`. | Anyone can open `/contact-us?submitted=1` and see a success message. | Use backend confirmation if delivery proof is required. Otherwise keep as cosmetic only. |
| SEC-LOW-002 | Some SVG files contain legacy external DTD declarations. | `public/favicon.svg`, `public/vinal-oleo-logo.svg`, `public/vimal-logo-mobile.svg`. | Low browser risk, but unsafe if reused in XML parsers. | Remove `DOCTYPE` declarations. |
| SEC-LOW-003 | README exposes an AI Studio app URL and stale Gemini instructions. | `README.md:5-20`. | Misleading docs and possible reconnaissance value. | Replace README with production project instructions. |
| SEC-LOW-004 | `.DS_Store` files exist locally. | `.DS_Store`, `public/.DS_Store`, `src/.DS_Store`, `dist/.DS_Store`. | Manual deploys can leak local metadata. | Remove local `.DS_Store` files and keep them ignored. |

## Optimization and Maintainability Findings

### High Priority

| ID | Finding | Evidence | Why It Matters | Recommended Fix |
|---|---|---|---|---|
| OPT-HIGH-001 | Prototype contact variants are included in the production contact bundle. | `src/App.tsx:29`, `src/pages/contact-variants/ContactVariantViewer.tsx:1-25`, `src/components/contact-variants/*`. | Users can reach broken forms, and `/contact-us` loads all variant code. | Route `/contact-us` directly to the final contact component. Remove or dev-gate `/contact-variants`. |
| OPT-HIGH-002 | `ProductsPage.tsx` contains many unrendered product page prototypes. | `src/pages/ProductsPage.tsx` is over 1,200 lines; current render uses only `FullImageHero` and `ProductStoryDeck3D`. | Product updates are harder to review and dead code passes lint. | Delete/archive unused prototypes or move them to a dev-only area. |
| OPT-HIGH-003 | Gemini/API Studio configuration is unused and risky. | `vite.config.ts:10-12`, `.env.example`, `README.md`. | Increases security risk and onboarding confusion. | Remove it as part of security cleanup. |

### Medium Priority

| ID | Finding | Evidence | Why It Matters | Recommended Fix |
|---|---|---|---|---|
| OPT-MED-001 | GSAP is registered globally in `App`. | `src/App.tsx:13-16`, `38-41`; GSAP only appears needed for about timeline work. | Home/contact/products load avoidable vendor code. | Lazy-load/register GSAP inside the component/page that uses it. |
| OPT-MED-002 | Vendor chunk matching checks `react` before `lucide-react`. | `vite.config.ts:22-28`. | `lucide-react` can be grouped into the wrong vendor chunk. | Check exact package path segments or test `lucide-react` before `react`. |
| OPT-MED-003 | TypeScript/lint is too permissive for this codebase. | `tsconfig.json:12-24`, `package.json:10-11`. | Dead code, unused locals, and weak typing are not caught. | Add `strict`, `noUnusedLocals`, `noUnusedParameters`, focused `include`, and ESLint if desired. |
| OPT-MED-004 | Product data and modal logic are duplicated. | `src/components/ProductMarqueeCPreview.tsx`, `src/pages/ProductsPage.tsx`. | Product names, applications, and details can drift. | Create one `product-catalog.ts` and one shared product detail modal. |
| OPT-MED-005 | Contact data is duplicated. | `src/lib/contact-data.ts`, `src/components/Footer.tsx`, `src/components/Contact.tsx`. | Email, phone, map, and address data can drift. | Centralize contact data, map URL, WhatsApp number, and contact actions. |
| OPT-MED-006 | Below-the-fold images/logos are mostly eager and lack intrinsic dimensions. | `Reliability.tsx`, `CertifiedTrust.tsx`, `AuthorizedDistributor.tsx`, `Contact.tsx`, `Footer.tsx`. | Unnecessary loading work and possible layout shift. | Add `loading="lazy"`, `decoding="async"`, dimensions or aspect ratio where appropriate. |
| OPT-MED-007 | Mobile industries section renders complex hidden/stacked visual elements. | `src/components/Industries.tsx`. | Extra DOM and animation work on mobile. | Use a simpler mobile render path or conditionally render desktop image panels. |
| OPT-MED-008 | Product marquee repeats many cards and relies on global mobile overrides. | `src/components/ProductMarqueeCPreview.tsx`, `src/index.css`. | Heavier DOM and harder responsive maintenance. | Reduce repeated DOM where practical and move responsive styling closer to components. |
| OPT-MED-009 | Brochure PDF is large. | `public/vimal-oleo-chemicals-brochure.pdf`. | Build output and downloads are heavier. | Compress/linearize the PDF or serve from CDN. |
| OPT-MED-010 | Route state reads `window.location` directly during render. | `src/App.tsx`, `src/components/Header.tsx`, `src/components/FullScreenMenu.tsx`, `ContactVariantViewer.tsx`. | Harder testing, no route state, full document navigations. | Add a small router or React Router if app navigation grows. |

### Low Priority

| ID | Finding | Evidence | Recommended Fix |
|---|---|---|---|
| OPT-LOW-001 | Several menu/test/utility components appear unreferenced. | `src/components/menus/*`, `src/components/Stats.tsx`, `src/components/JNPTMap.tsx`, `src/components/ui/marquee.tsx`. | Delete or move to a prototype area. |
| OPT-LOW-002 | `Products` is a one-line wrapper. | `src/components/Products.tsx`. | Inline or keep only if it will own section behavior. |
| OPT-LOW-003 | Product fields like `grade`, `formula`, and some style metadata are unused. | `ProductMarqueeCPreview.tsx`, `ProductsPage.tsx`. | Render them or remove them. |
| OPT-LOW-004 | Asset names contain spaces, typo-like names, and placeholder folders. | `/logo for hero and product.png`, `/vinal-oleo-logo.svg`, `/untitled folder/...`. | Rename to stable kebab-case names and update references. |
| OPT-LOW-005 | Root/source assets and ad hoc test scripts are not part of the app workflow. | `Assets/`, `FINAL LOGO.png`, `test-icons*.cjs`, `test.cjs`. | Remove or move into documented `scripts/`/design-source folders. |
| OPT-LOW-006 | Alias `@` points to repo root. | `vite.config.ts:13-16`, `tsconfig.json:18-22`. | Alias to `src` and update imports to reduce accidental root imports. |
| OPT-LOW-007 | `allowImportingTsExtensions` is only needed because `main.tsx` imports `./App.tsx`. | `src/main.tsx`, `tsconfig.json:23`. | Import `./App` and remove this option. |

## Traceability Findings

### Layer Map

| Layer | Exists | Notes |
|---|---:|---|
| UI components | Yes | Header, hero, product cards/modals, contact dock, footer, contact page. |
| Client routing | Yes | Hand-written path checks in `App.tsx`; Vercel SPA rewrite. |
| Client validation | Yes | Active Variant09 contact form validates `firstName`, `lastName`, `companyName`, `mobileNumber`, `email`, and `message`. |
| Network/API layer | No first-party API | No `fetch`, `axios`, `XMLHttpRequest`, Supabase, Firebase, Prisma, or database client found. |
| External handoff | Yes | FormSubmit, `mailto:`, `tel:`, WhatsApp, Google Maps, static PDF. |
| Backend/database | No | There is nothing to trace past FormSubmit or browser navigation. |

### Route Trace

| Route | Status | Evidence | Notes |
|---|---|---|---|
| `/` | OK | `src/App.tsx:77-100`, `src/components/Header.tsx:80`. | Home renders default app. |
| `/about` | OK | `src/App.tsx:18`, `43-54`, `Header.tsx:8`. | Lazy page exists. |
| `/products` | OK | `src/App.tsx:19`, `67-74`, `Header.tsx:9`. | Lazy page exists. |
| `/contact-us` | OK | `src/App.tsx:29`, `57-62`, `ContactVariantViewer.tsx:9`. | Defaults to Variant09. |
| `/contact-variants/01` to `/contact-variants/10` | Risky | `ContactVariantViewer.tsx:13-24`. | Public prototype routes, most forms broken. |
| `/contact-variants/1` to `/contact-variants/8` | Broken mapping | `ContactVariantViewer.tsx:8-24`. | Parser captures `1`, switch expects `01`; silently renders Variant09. |
| Unknown routes | Risky | `src/App.tsx:77-100`, `vercel.json:5-10`. | No 404; unknown routes show home. |

### Working UI Controls

| Component | Control | Trace Result |
|---|---|---|
| Header | Logo and nav links | Routes are implemented. |
| Header and FullScreenMenu | Mobile menu open/close | Local state and `onClose` signatures are correct. |
| Hero | `Contact Us` CTA | Links to `/contact-us`, route exists. |
| Product marquee | Product cards | `onProductClick(product)` opens modal with correct product object. |
| Product marquee and product page | Modal close buttons/backdrop | `onClose()` signatures are correct. |
| Products section | `See Full Product List` | Links to `/products`, route exists. |
| Product page | Brochure download | `/vimal-oleo-chemicals-brochure.pdf` exists. |
| Main contact dock | Call, WhatsApp, email, directions | Handoffs exist. WhatsApp number should be verified against business contacts. |
| Footer | Landline, email, personnel phone links | Handoffs exist and use expected formats. |
| Footer | `Go Top` | Calls `window.scrollTo`, works, missing `type="button"` only. |

### Broken or Risky UI Controls

| ID | Severity | Finding | Evidence | Recommended Fix |
|---|---|---|---|---|
| TRACE-HIGH-001 | High | Contact Variants 01 to 05 render visible send buttons that do nothing. | `ContactVariants1.tsx:72-116`, `196-211`, `288-311`, `391-414`, `494-503`. | Remove/dev-gate variants or wire forms to the same production form component. |
| TRACE-HIGH-002 | High | Contact Variants 06, 08, and 10 have forms without `action`, `method`, or `onSubmit`; submit buttons default to same-page submit. | `ContactVariants2.tsx:119-146`, `316-337`, `650-666`. | Remove/dev-gate variants or set safe `type="button"` if prototypes remain. |
| TRACE-HIGH-003 | High | Most prototype form fields lack `name` attributes. | `ContactVariants1.tsx`, `ContactVariants2.tsx` prototype forms. | Use named reusable fields if any prototype becomes production. |
| TRACE-MED-001 | Medium | WhatsApp number is not in canonical contact data. | `src/components/Contact.tsx:14-16`, `src/lib/contact-data.ts:11-18`. | Verify number and centralize in contact data. |
| TRACE-MED-002 | Medium | Form success is display-only after FormSubmit redirect. | `ContactVariants2.tsx:44-48`, `347-350`, `423`. | Treat as UI acknowledgement, not proof of delivery, unless backend confirmation is added. |
| TRACE-MED-003 | Medium | No real 404 route. | `src/App.tsx:77-100`, `vercel.json:5-10`. | Add a NotFound route or route guard. |
| TRACE-LOW-001 | Low | Google Maps URL is hard-coded separately from displayed address. | `src/components/Contact.tsx:5`, `ContactVariants2.tsx:7`. | Centralize map URL and address together. |
| TRACE-LOW-002 | Low | Footer `Go Top` missing `type="button"`. | `src/components/Footer.tsx:106-114`. | Add explicit type. |

### Active Contact Form Trace

Production route `/contact-us` renders Variant09.

Form target: `POST https://formsubmit.co/vimaloleochemicals@gmail.com` from `src/components/contact-variants/ContactVariants2.tsx:8`, `412-418`.

| Field | Type | Validation | Submitted Name |
|---|---|---|---|
| First Name | `text` | Required, max 80 | `firstName` |
| Last Name | `text` | Required, max 80 | `lastName` |
| Company Name | `text` | Required, max 120 | `companyName` |
| Mobile Number | `tel` | Required, exactly 10 digits | `mobileNumber` |
| Email Address | `email` | Required, email regex, max 120 | `email` |
| Message | `textarea` | Required, max 1500 | `message` |

Hidden FormSubmit fields: `_subject`, `_template=table`, `_captcha=false`, `_next`, and `_honey`.

Expected activation flow: after deployment, submit one real test form, open `vimaloleochemicals@gmail.com`, click the FormSubmit activation link, then submit a second test to confirm delivery.

## Recommended Execution Order

1. Fix security blockers: update PostCSS and remove Gemini client define/docs.
2. Remove or dev-gate public contact variants so users cannot reach broken forms.
3. Add security headers in `vercel.json`.
4. Centralize contact data and verify WhatsApp number.
5. Add a real 404 and clean route handling.
6. Tighten TypeScript/lint settings and remove dead prototype code.
7. Consolidate product data/modal code.
8. Optimize images, brochure PDF, assets, and vendor chunking.
9. Decide whether FormSubmit is enough or whether a first-party serverless form endpoint is needed.

## Task Backlog for Sub-Agents

| Task ID | Priority | Area | Task | Acceptance Criteria |
|---|---|---|---|---|
| SEC-HIGH-001 | High | Security | Update vulnerable PostCSS dependency. | `npm audit` returns no high vulnerabilities. Build and lint pass. |
| SEC-HIGH-002 | High | Security | Remove Gemini client env define and stale docs. | `vite.config.ts` no longer defines `process.env.GEMINI_API_KEY`; `.env.example` and README no longer instruct users to set Gemini for this site. |
| TRACE-HIGH-001 | High | Traceability | Remove or dev-gate `/contact-variants/*`. | Public navigation cannot reach broken forms; direct variant routes either 404, redirect, or are only enabled in development. |
| TRACE-HIGH-002 | High | Traceability | If keeping variants, replace prototype forms with the production form component. | Every visible contact form has named fields, validation, and a real target, or clearly does not render. |
| SEC-MED-002 | Medium | Security | Add production security headers. | Vercel response includes CSP, HSTS, nosniff, referrer policy, permissions policy, and frame protection. |
| TRACE-MED-001 | Medium | Data | Centralize and verify all contact data. | Footer, contact dock, contact page, mailto, tel, WhatsApp, and maps all read one source of truth. |
| TRACE-MED-003 | Medium | Routing | Add not-found handling. | Unknown paths do not silently render the homepage; invalid contact variant IDs are handled intentionally. |
| OPT-HIGH-002 | High | Cleanup | Remove product page prototype code. | `ProductsPage.tsx` contains only rendered production components or clearly separated dev-only exports. |
| OPT-MED-003 | Medium | Tooling | Tighten TypeScript and lint checks. | `npm run lint` catches unused locals/params and strict type issues after cleanup. |
| OPT-MED-004 | Medium | Products | Create a shared product catalog and modal. | Home marquee and product page use one data source and one modal implementation. |
| OPT-MED-006 | Medium | Performance | Add lazy loading and dimensions for below-the-fold images. | Lighthouse/network waterfall shows fewer eager image requests below the fold; no visible layout shift. |
| OPT-MED-009 | Medium | Assets | Compress or externalize brochure PDF. | PDF size is reduced or served from CDN without breaking the download button. |
| OPT-LOW-004 | Low | Assets | Rename fragile asset filenames. | Spaces/typos/placeholders are removed from public asset URLs and references are updated. |
| OPT-LOW-005 | Low | Repo Hygiene | Remove unused root assets, test scripts, and `.DS_Store`. | Repo root and public folder contain only documented assets and scripts. |

## Verification Commands Used

| Command | Result |
|---|---|
| `npm run lint` | Passed before report creation. |
| `npm run build` | Passed after FormSubmit/email changes before this audit artifact. |
| `npm audit` | Confirmed one high vulnerability in PostCSS. |
| Source searches for unsafe APIs | No `dangerouslySetInnerHTML`, raw `innerHTML`, `eval`, `new Function`, `fetch`, `axios`, XHR, Supabase, Firebase, Prisma, or database client usage found in `src`. |
