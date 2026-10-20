# Iqchu Portfolio — React + Vite

A responsive personal portfolio for a web developer and coding tutor, using a dark charcoal and scarlet-red visual theme.

## Included sections

- Responsive navigation
- Hero / introduction
- Personal philosophy and values
- Selected projects
- Skills and technologies
- Teaching and mentorship
- Journey / personal statement
- Contact links and footer
- Netlify build configuration

## Requirements

Install a current LTS version of Node.js from https://nodejs.org/ (Node 20 or later is recommended for current Vite versions).

## Run locally

1. Extract this ZIP file.
2. Open the extracted `iqchu-portfolio-redesign` folder in VS Code.
3. Open **Terminal → New Terminal**.
4. Run:

   ```bash
   npm install
   npm run dev
   ```

5. Open the local URL Vite prints in the terminal (usually `http://localhost:5173`).

Keep the terminal running while you work. Press `Ctrl + C` to stop the server.

## Build for production

```bash
npm run build
npm run preview
```

The production files will be created in the `dist` folder.

## Deploy to Netlify

### Recommended: connect a Git repository

1. Push this project to a GitHub repository.
2. In Netlify, choose **Add new project → Import an existing project**.
3. Connect GitHub and select the repository.
4. Set:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Deploy. Future pushes to the connected production branch can trigger new deployments automatically.

This project includes `netlify.toml` with these settings.

## Personalise before publishing

- In `src/App.jsx`, verify the bio and update any wording that doesn't sound like you.
- Replace or supplement the project cards with your strongest real projects, screenshots, repository links, and the work you personally contributed.
- Confirm the contact email and LinkedIn URL.
- Add a GitHub profile link if you want to share your code.
- Add a real headshot if desired; the current hero artwork is CSS-based.
- Add authentic testimonials only with permission.
- Update the mentorship section with current course dates and registration details.
- Consider adding a downloadable CV link once you have a current CV file.

## Notes

This is a starter redesign, not an automatic modification of the live Netlify website. Deploy it to a preview site first. Only replace your current production site after reviewing the preview on desktop and mobile.
