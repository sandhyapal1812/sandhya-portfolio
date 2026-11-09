# Sandhya Pal — Developer Portfolio

A responsive, dark futuristic React portfolio built with Vite, JavaScript, Framer Motion, and Lucide React.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Production build

```bash
npm run build
npm run preview
```

## Personalize before publishing

1. Add your professional photo as `public/profile.jpg` (create the `public` folder if needed). The circular hero photo will use this file; if it is missing, the initials fallback remains visible.
2. Add your real resume as `public/resume.pdf`. The hero download button expects this exact path.
3. Replace the LinkedIn and GitHub URLs in `src/App.jsx` with your profile URLs.
4. Verify the contact email in the contact section and form handler.
5. Add actual repository/live-demo URLs for each project where available.
6. Review all project descriptions and achievements for accuracy before publishing.

## Notes

- The contact form opens the visitor's default email application using a `mailto:` link. It does not send messages through a backend.
- Skill cards intentionally do not show invented proficiency percentages.
- Project cards use abstract CSS artwork rather than fabricated project screenshots.
- The site respects `prefers-reduced-motion` and includes responsive mobile navigation.


Research entries are currently labelled “In Progress”. Update each status only when its submission or publication stage changes.
