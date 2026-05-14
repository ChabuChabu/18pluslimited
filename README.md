# 18Plus Limited Gatsby Website

A modern, mobile-first Gatsby rebuild of the 18Plus Support website using Tailwind CSS.

## Pages included

- Home: `/`
- About: `/about/`
- Services: `/services/`
- Privacy Notice: `/privacy-notice/`
- Contact: `/contact/`
- Legacy privacy route: `/projects/` redirects/exports to Privacy Notice

## Tech stack

- Gatsby 5
- React 18
- Tailwind CSS
- PostCSS
- Netlify-compatible contact form markup

## Run locally

```bash
cd 18pluslimited
npm install
npm run develop
```

Then open the local URL Gatsby prints in the terminal, normally:

```text
http://localhost:8000
```

## Production build

```bash
npm run build
npm run serve
```

## Notes

- Local images are included under `static/images` and were created from the supplied screenshots.
- The contact form currently gives a local success message. If deploying to Netlify, the included `data-netlify="true"` form markup can be connected to Netlify Forms. For another host, connect the form to your preferred email/form handler.
- Text content has been copied from the public pages and structured into React components/data files.
