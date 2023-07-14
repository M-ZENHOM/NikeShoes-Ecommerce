# [NikeShoesEcommerce](https://nike-shoes-ecommerce.vercel.app/)

This is an open source e-commerce nike shoes build with Next.js. It is bootstrapped with `create-t3-app`.

[![NikeShoesEcommerce](./public/banner.png)](https://nike-shoes-ecommerce.vercel.app/)

## Tech Stack

- [Next.js](https://nextjs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Next Auth](https://next-auth.js.org)
- [MongoDB](https://www.mongodb.com/)
- [Reduxjs/toolkit](https://redux-toolkit.js.org/)
- [Contentlayer](https://www.contentlayer.dev)
- [uploadthing](https://uploadthing.com)
- [Stripe](https://stripe.com)

## Features to be implemented

- [x] Authentication with **NextAuth**
- [x] File uploads with **uploadthing**
- [x] Database on **MongoDB**
- [x] Validation with **Yup**
- [x] Storefront with products, categories, and subcategories
- [x] User Payments with **Stripe**
- [x] Checkout with **Stripe Checkout**
- [x] Dashboard with products, orders, and payments

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/M-ZENHOM/NikeShoes-Ecommerce
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create a `.env` file

Create a `.env` file in the root directory and add the environment variables as shown in the `.env.example` file.

### 4. Run the application

```bash
npm run dev
```

### 6. Listen for stripe events

```bash
pnpm run stripe:listen
```

## How do I deploy this?

Follow the deployment guides for [Vercel](https://create.t3.gg/en/deployment/vercel), [Netlify](https://create.t3.gg/en/deployment/netlify) and [Docker](https://create.t3.gg/en/deployment/docker) for more information.
