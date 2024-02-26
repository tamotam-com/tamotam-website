# Landing Page for tamotam.com

This page has been created using [v0](https://v0.dev). The project can be found on: https://v0.dev/r/KAq17dBYWv5

## Feedback on using v0

- Responsive Web Design (RWD) needs minor tweaks before production-ready
- When running a prompt, the result is there, but on the next prompt the app often almost always requires browser reload
- Image optimization improvements related to LCP, `<Image />` from `next/image` could've been used instead of `<img>` (tweak in `images.unoptimized: true` was required to deploy statically).
- Aligning text to good lucking doesn't work - almost doesn't make a use of centering and justyfing text.
- Animations aren't working.
- Confuses some social network icons, such as `Discord` (it generates really unknown logo), `TikTok` (it generates `YouTube` logo), and `X` (it generates x itself).
- It can't generate original `Download on App/Google store` images + the generated icons for stores aren't RWD.
- Missing `default` on `export` while trying to make pages via routes out of this.
- Slightly problematic setup with `globals.css` when trying to leverage `pages`/add routing even though as per [official docs](https://nextjs.org/docs/app/building-your-application/styling/tailwind-css#importing-styles) it's looking correctly.
- Deployment, at least to `Vercel`, should've been out-of-the-box, but in fact it requires tweaks with `output: "export"` in the `next.cponfig.mjs`.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
