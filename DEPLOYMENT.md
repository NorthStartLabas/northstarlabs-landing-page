# Deployment Guide

## Prerequisites

Before deploying, make sure you have:

1. **Resend Account**
   - Sign up at [resend.com](https://resend.com)
   - Get your API key from the dashboard
   - Verify your domain (optional, can use default for testing)

2. **Plausible Analytics** (Optional)
   - Sign up at [plausible.io](https://plausible.io)
   - Add your domain
   - Note: Plausible is privacy-friendly and doesn't require cookie consent

3. **Vercel Account**
   - Sign up at [vercel.com](https://vercel.com)

## Step-by-Step Deployment

### 1. Initialize Git Repository

```bash
git init
git add .
git commit -m "Initial commit: North Star Labs website"
```

### 2. Push to GitHub

```bash
# Create a new repository on GitHub first, then:
git remote add origin https://github.com/YOUR_USERNAME/northstarlabs.git
git branch -M main
git push -u origin main
```

### 3. Deploy to Vercel

#### Option A: Using Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your GitHub repository
4. Configure the project:
   - **Framework Preset**: Astro
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `dist` (auto-detected)

5. Add Environment Variables:
   - `RESEND_API_KEY`: Your Resend API key
   - `PUBLIC_PLAUSIBLE_DOMAIN`: Your domain (e.g., `northstarlabs.nl`)

6. Click "Deploy"

#### Option B: Using Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Add environment variables
vercel env add RESEND_API_KEY
vercel env add PUBLIC_PLAUSIBLE_DOMAIN

# Deploy to production
vercel --prod
```

### 4. Configure Custom Domain

1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your domain (e.g., `northstarlabs.nl`)
4. Update your DNS records as instructed by Vercel
5. Wait for DNS propagation (can take up to 24-48 hours)

### 5. Update Contact Form Email

After verifying your domain in Resend:

1. Open `src/pages/api/contact.ts`
2. Update the `from` field:
   ```typescript
   from: 'North Star Labs <noreply@yourdomain.com>',
   ```
3. Commit and push the changes

### 6. Verify Everything Works

- [ ] Visit your deployed website
- [ ] Test the contact form
- [ ] Check that emails are received
- [ ] Verify Plausible analytics is tracking (check dashboard after a few hours)
- [ ] Test on mobile devices
- [ ] Check page load speed

## Environment Variables Reference

| Variable | Required | Description |
|----------|----------|-------------|
| `RESEND_API_KEY` | Yes | API key from Resend for sending emails |
| `PUBLIC_PLAUSIBLE_DOMAIN` | No | Your domain for Plausible analytics |

## Troubleshooting

### Contact Form Not Working

1. Check that `RESEND_API_KEY` is set in Vercel
2. Verify the API key is valid in Resend dashboard
3. Check Vercel function logs for errors
4. Make sure the `from` email address is verified in Resend

### Analytics Not Tracking

1. Verify `PUBLIC_PLAUSIBLE_DOMAIN` matches your domain exactly
2. Check browser console for errors
3. Disable ad blockers temporarily to test
4. Wait 1-2 hours for data to appear in Plausible dashboard

### Build Failures

1. Check build logs in Vercel
2. Make sure all dependencies are in `package.json`
3. Test build locally: `npm run build`
4. Clear Vercel cache and redeploy

## Post-Deployment

### Optional Improvements

1. **Add sitemap to robots.txt**
   - Update the Sitemap URL in `public/robots.txt` to your actual domain

2. **Set up monitoring**
   - Use Vercel Analytics for performance monitoring
   - Set up uptime monitoring with a service like UptimeRobot

3. **Configure email templates**
   - Create custom HTML email templates in Resend
   - Update the contact form API to use templates

4. **Add SSL certificate**
   - Vercel provides this automatically
   - Verify HTTPS is working

5. **SEO optimization**
   - Submit sitemap to Google Search Console
   - Add structured data for organization
   - Create Open Graph images

## Support

If you encounter any issues:
- Check Vercel deployment logs
- Review Astro documentation: [docs.astro.build](https://docs.astro.build)
- Check Resend documentation: [resend.com/docs](https://resend.com/docs)
