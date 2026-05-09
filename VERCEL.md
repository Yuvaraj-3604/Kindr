# Deploying Kindr to Vercel

This guide provides instructions for deploying the **Kindr** donation platform to [Vercel](https://vercel.com).

## 🚀 One-Click Deploy

You can deploy this project to Vercel with a single click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyourusername%2Fkindr)

## 🛠️ Manual Deployment

1. **Push your code** to a GitHub, GitLab, or Bitbucket repository.
2. **Import the project** in the [Vercel Dashboard](https://vercel.com/new).
3. Vercel will automatically detect **Next.js** and configure the optimal build settings.

### Build Settings

If you need to configure them manually:

- **Framework Preset**: `Next.js`
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

## 🔑 Environment Variables

Currently, the project is a high-fidelity frontend demo. As you integrate backend services (like Stripe, Supabase, or Sanity), ensure you add the following environment variables in the Vercel project settings:

```env
# Example variables (add as needed)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_SUPABASE_URL=https://...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
```

## 📈 Optimization on Vercel

Kindr takes advantage of several Vercel features:

- **Next.js Image Optimization**: Automatically optimizes images in the `public` folder for faster loading.
- **Edge Runtime**: Ideal for global performance if you implement Edge API routes.
- **Incremental Static Regeneration (ISR)**: Perfect for keeping donation stats and stories up to date without a full rebuild.

## ❓ Troubleshooting

If you encounter issues during the build:
1. Ensure your Node.js version in Vercel settings is set to **20.x** or higher.
2. Check that `package-lock.json` is up to date.
3. If using Tailwind CSS 4, ensure the `@tailwindcss/postcss` plugin is correctly configured in `postcss.config.mjs`.

---

For more information, visit the [Vercel Documentation](https://vercel.com/docs).
