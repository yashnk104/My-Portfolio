# Yash Nikam - Portfolio Website

A professional portfolio website showcasing my projects, skills, and experience as a full-stack developer and UI/UX designer.

## Technologies Used

- React with TypeScript
- Vite for build and development
- Tailwind CSS for styling
- Framer Motion for animations 
- ShadCN UI components
- GitHub Actions for deployment

## Features

- Responsive design for mobile, tablet, and desktop
- Interactive UI with animations and transitions
- Project showcase with detailed descriptions
- Skills and technology section with visual indicators
- Contact form for easy communication
- Downloadable resume

## Development

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

## Deployment to GitHub Pages

This website is configured to automatically deploy to GitHub Pages using GitHub Actions. When changes are pushed to the main branch, the site will automatically build and deploy.

### Automated Deployment with GitHub Actions

The project includes a GitHub Actions workflow that will:
1. Build the project with the correct base path for GitHub Pages
2. Copy necessary files like `.nojekyll` and `404.html`
3. Deploy the built files to the `gh-pages` branch

### Setting Up GitHub Pages

1. In your GitHub repository, go to Settings > Pages
2. Set the source to deploy from the `gh-pages` branch
3. The site will be published at `https://yourusername.github.io/repository-name/`

### Troubleshooting GitHub Pages Deployment

If you encounter a "File not found" error:
1. Ensure the GitHub Actions workflow executed successfully
2. Check that the `gh-pages` branch contains the expected files
3. Verify the repository's GitHub Pages settings are correct
4. The `.nojekyll` file is included in the deployment to prevent Jekyll processing issues
5. The `404.html` file handles client-side routing

### Manual Deployment Steps

If you need to manually deploy:

1. Build the project with the correct base path:
   ```bash
   export BASE_URL="/<repository-name>"
   echo "VITE_BASE_URL=$BASE_URL" > client/.env.production
   npm run build
   ```

2. Copy the special GitHub Pages files:
   ```bash
   cp public/.nojekyll dist/public/
   cp public/404.html dist/public/
   ```

3. Deploy the contents of the `dist/public` directory to your hosting service

## Project Structure

- `/client/src/components`: React components for different sections of the portfolio
- `/client/src/data`: Static data for projects and other content
- `/public`: Static assets like resume PDF, images, etc.
- `/.github/workflows`: GitHub Actions workflow for automatic deployment

## Contact

Feel free to reach out to me at yash10nikam@gmail.com or connect with me on [LinkedIn](https://www.linkedin.com/in/yash-nikam-7866b6250/).