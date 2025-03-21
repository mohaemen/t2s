# MyBuilder Clone

A clone of the MyBuilder.com website built with Next.js and Tailwind CSS.

## Local Development

1. Clone the repository
2. Install dependencies:

```bash
bun install
```

3. Start the development server:

```bash
bun run dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploying to Azure Web App

This project is configured to deploy to Azure Web App using GitHub Actions.

### Prerequisites

1. An Azure account with an active subscription
2. An Azure Web App created and configured for Node.js
3. GitHub repository with this code pushed to it

### Setup Azure Web App

1. Create a new Web App in Azure Portal
   - Choose Node.js 18 LTS as the runtime stack
   - Configure the Web App to use Linux OS

2. Get your publish profile:
   - Go to your Web App in Azure Portal
   - Click on "Get publish profile" and download the file
   - This file contains credentials that GitHub Actions will use to deploy your application

### Configure GitHub Actions

1. Add the publish profile to your GitHub repository secrets:
   - Go to your GitHub repository
   - Navigate to Settings > Secrets and variables > Actions
   - Click on "New repository secret"
   - Name: `AZURE_WEBAPP_PUBLISH_PROFILE`
   - Value: Paste the entire contents of the publish profile file
   - Click "Add secret"

2. Update the GitHub Actions workflow file:
   - Open `.github/workflows/azure-deploy.yml`
   - Change the `AZURE_WEBAPP_NAME` to match your Azure Web App name

3. Push changes to your repository:
   - The GitHub Actions workflow will automatically trigger on push to the main branch
   - You can also manually trigger the workflow from the Actions tab in your GitHub repository

### Troubleshooting Deployment

If your deployment fails, check the following:

1. Make sure the Web App name in the workflow file matches your actual Web App name in Azure
2. Verify that your publish profile secret is correctly set in GitHub
3. Check the GitHub Actions logs for detailed error messages
4. Ensure your Azure Web App is configured for Node.js 18 or later

## Application Structure

- `src/components/layout`: Header and Footer components
- `src/components/home`: Homepage-specific components
- `public`: Static assets
- `web.config`: Configuration for Azure IIS
- `server.js`: Custom server for Azure

## Technologies Used

- Next.js 15
- Tailwind CSS
- Shadcn UI Components
- Azure Web App for hosting
