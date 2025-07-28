# Deployment Guide

## GitHub Deployment

### 1. Initialize Git Repository
```bash
git init
git add .
git commit -m "Initial commit"
```

### 2. Create GitHub Repository
1. Go to [GitHub.com](https://github.com)
2. Click "New repository"
3. Name it `guiban-qr-app`
4. Make it public or private (your choice)
5. **Don't** initialize with README, .gitignore, or license (we already have these)

### 3. Push to GitHub
```bash
git remote add origin https://github.com/YOUR_USERNAME/guiban-qr-app.git
git branch -M main
git push -u origin main
```

## Vercel Deployment

### 1. Connect to Vercel
1. Go to [Vercel.com](https://vercel.com)
2. Sign up/Login with your GitHub account
3. Click "New Project"
4. Import your `guiban-qr-app` repository

### 2. Configure Environment Variables
Add these environment variables in Vercel:
- `NODE_ENV`: `production`
- `GOOGLE_CLIENT_ID`: Your Google OAuth Client ID
- `GOOGLE_REDIRECT_URI`: Your Vercel domain + `/auth/callback`

### 3. Deploy Settings
- **Framework Preset**: Nuxt.js
- **Build Command**: `npm run build`
- **Output Directory**: `.nuxt`
- **Install Command**: `npm install`

### 4. Deploy
Click "Deploy" and wait for the build to complete.

## Post-Deployment

### 1. Update Google OAuth Settings
1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Update your OAuth 2.0 client ID
3. Add your Vercel domain to authorized redirect URIs:
   - `https://your-app.vercel.app/auth/callback`

### 2. Test the Application
1. Visit your Vercel URL
2. Test the Google OAuth login
3. Verify all functionality works

## Troubleshooting

### Common Issues:
1. **Build fails**: Check if all dependencies are in `package.json`
2. **OAuth errors**: Verify redirect URIs in Google Console
3. **404 errors**: Check if all pages exist in the `pages/` directory

### Environment Variables:
Make sure these are set in Vercel:
- `NODE_ENV=production`
- `GOOGLE_CLIENT_ID=your-client-id`
- `GOOGLE_REDIRECT_URI=https://your-app.vercel.app/auth/callback` 