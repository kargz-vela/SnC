# S n C Production House

Editorial photography and creative production studio website built with React, Vite, and a small Node SMTP API for contact inquiries.

## Setup

```bash
npm install
copy .env.example .env
```

Fill in the SMTP values in `.env`. Never commit `.env` or SMTP credentials.

## Development

Run the frontend and contact API in separate terminals:

```bash
npm run dev
npm run dev:api
```

The Vite development server proxies `/api/contact` to `http://localhost:5174`.

## Production

Build the frontend with:

```bash
npm run build
```

Run the contact API with:

```bash
npm run start:api
```

Deploy the generated `dist` directory with the Vite frontend and run the Node API as a separate service. If the API is hosted on another domain, set `VITE_CONTACT_API_URL` to its full `/api/contact` URL when building the frontend.

## Routes

- `/` Home
- `/portfolio` Portfolio and lightbox
- `/about` Studio story and team
- `/packages` Packages, add-ons, and FAQs
- `/contact` Booking form and studio location

## Validation

```bash
npm run lint
npm run build
```
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
