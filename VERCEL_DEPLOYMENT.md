# Vercel Deployment Guide

This project has been configured to work with Vercel deployment. Here's how to deploy:

## Prerequisites

1. Install Vercel CLI: `npm i -g vercel`
2. Make sure you have a Vercel account

## Deployment Steps

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Deploy to Vercel:**
   ```bash
   vercel
   ```
   
   Or for production deployment:
   ```bash
   vercel --prod
   ```

## Configuration

The project includes:
- `vercel.json` - Vercel configuration for routing and builds
- `.vercelignore` - Files to exclude from deployment
- Serverless Express app wrapped with `serverless-http`

## How it Works

1. **API Routes**: All `/api/*` requests are routed to the Express serverless function
2. **Static Files**: All other requests serve the React app from `dist/public/`
3. **Build Process**: 
   - React app builds to `dist/public/`
   - Express server builds to `dist/index.js`
   - Serverless handler is copied to `api/index.js`

## Environment Variables

Make sure to set up your environment variables in the Vercel dashboard:
- Database connection strings
- Any API keys or secrets
- Other configuration variables

## Local Development

The app still works locally with the same commands:
```bash
npm run dev    # Development mode
npm run build  # Production build
npm start      # Run production build locally
```
