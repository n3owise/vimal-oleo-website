# Production Fix Checklist

1. Done: Removed the broken Nexa `@font-face` references from `src/index.css` to prevent production font 404s.
2. Done: Removed confirmed unused production assets from `public`.
3. Done: Deleted `public/.DS_Store`.
4. Done: Deleted unused `public/hero-flowing-elements.mov`.
5. Done: Deleted confirmed unused large JPEGs from `public`.
6. Done: Compressed `public/hero-flowing-elements.mp4` from about `2.4 MB` to about `580 KB`.
7. Change the hero video loading strategy from `preload="auto"` to a lighter production-safe option.
8. Compress or resize `public/factory.jpg`.
9. Compress or replace `public/Upscan-Enhance-Photo-May-4-2026.jpeg`.
10. Replace repeated heavy product image usage with optimized AVIF/WebP versions.
11. Self-host external contact icons instead of loading them from Iconify.
12. Done: Replaced Unsplash image URLs with local images.
13. Make the contact form actually submit somewhere, such as email, API, CRM, or form backend.
14. Add production SPA rewrite rules for `/about`, `/products`, and `/contact-us`.
15. Re-check the `Industries We Serve` stack animation on short-height screens.
16. Reduce the main JavaScript bundle size if performance testing shows slow loading.
17. Clean up unused contact variant components if only variant `09` is used.
18. Update the package name from `react-example` to the real project name.
19. Review SEO metadata beyond the homepage title and description.
20. Add Open Graph and social sharing metadata.
21. Verify all phone, WhatsApp, email, and map links are correct.
22. Run final responsive QA on mobile, tablet, laptop, and large desktop.
23. Run final image clarity QA after compression so visuals still look premium.
