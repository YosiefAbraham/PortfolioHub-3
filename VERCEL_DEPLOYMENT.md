# PortfolioHub - Vercel Deployment Guide

This project has been configured for deployment on Vercel. Here's how to deploy it:

## Prerequisites

1. A Vercel account
2. A Neon database (or any PostgreSQL database)
3. Node.js 18+ installed locally

## Environment Variables

Set the following environment variables in your Vercel dashboard:

- `DATABASE_URL`: Your PostgreSQL connection string (e.g., Neon database URL)
- `NODE_ENV`: Set to `production` for production deployments

## Deployment Steps

1. **Connect your repository to Vercel:**

   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository

2. **Configure build settings:**

   - Framework Preset: `Other`
   - Build Command: `npm run vercel-build`
   - Output Directory: `dist`
   - Install Command: `npm install`

3. **Set environment variables:**

   - In your Vercel project dashboard, go to Settings > Environment Variables
   - Add `DATABASE_URL` with your database connection string
   - Add `NODE_ENV` set to `production`

4. **Deploy:**
   - Click "Deploy" and wait for the build to complete

## Project Structure

- `api/`: Vercel serverless functions (API routes)
- `client/`: React frontend application
- `dist/`: Built static files (generated during build)
- `server/`: Express server code (used for local development)
- `shared/`: Shared TypeScript schemas and types

## API Endpoints

- `GET /api/health`: Health check endpoint
- `GET /api/users?id={userId}`: Get user by ID
- `POST /api/users`: Create a new user

## Local Development

To run locally:

```bash
npm install
npm run dev
```

This will start the Express server with Vite development server.

## Database Setup

If using Neon database:

1. Create a Neon database
2. Copy the connection string
3. Set it as `DATABASE_URL` environment variable
4. Run `npm run db:push` to create tables

## Build Process

The build process:

1. Runs `vite build` to create static files in `dist/`
2. Vercel serves static files from `dist/`
3. API routes in `api/` are deployed as serverless functions
