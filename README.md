# ContractorCTO Landing Page

A modern, responsive landing page for ContractorCTO.com built with Tailwind CSS and TypeScript.

## Features

- 🔥 **Modern Stack**: Built with Tailwind CSS and TypeScript
- 📱 **Responsive**: Mobile-friendly design that looks great on all devices
- 🚀 **Optimized**: Fast loading with minimal JavaScript
- 🧩 **Component-Based**: Modular sections for easy customization
- 🔄 **Automatic Deployment**: Changes to the Git repository automatically update the live website

## Project Structure

- `src/ts/` - TypeScript source files
- `src/input.css` - Tailwind CSS input file
- `dist/ts/` - Compiled JavaScript files
- `dist/output.css` - Compiled CSS
- `img/` - Directory for images
- `index.html` - Main landing page
- `CNAME` - Domain configuration for GitHub Pages
- `.github/workflows/` - GitHub Actions workflow for automatic deployment

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- Git

### Installation

1. Clone the repository
   ```
   git clone https://github.com/pranney82/contractorcto.git
   cd contractorcto
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Start the development server
   ```
   npm run dev:all
   ```

4. Open your browser and navigate to `http://localhost:3000`

## Development

- **Development Mode**: Run `npm run dev:all` to watch and compile both TypeScript and CSS
- **Build for Production**: Run `npm run build` to create minified production files

## Automatic Deployment Workflow

This project is set up with an automatic deployment workflow that updates your live website whenever you push changes to the main branch of your Git repository. Here's how it works:

### How the Workflow Works

1. You make changes to your files in VS Code
2. You commit and push those changes to your GitHub repository
3. GitHub Actions automatically:
   - Builds the website (compiles TypeScript and Tailwind CSS)
   - Prepares all necessary files for deployment
   - Deploys the website to GitHub Pages
4. Your GoDaddy domain, configured through the CNAME file, points to your GitHub Pages site
5. Visitors to your website see the latest version of your site

### Workflow File

The workflow is defined in `.github/workflows/deploy.yml`. This file configures the GitHub Actions process that automatically builds and deploys your website whenever changes are pushed to the main branch.

## Connecting GoDaddy Domain to GitHub Pages

To connect your GoDaddy domain to your GitHub Pages site, you need to:

### 1. Configure GitHub Pages

- Ensure your repository has GitHub Pages enabled
- In your repository settings, under "Pages", select the `gh-pages` branch as the source

### 2. Set Up the CNAME File

- The CNAME file in your repository root contains your domain name (`contractorcto.com`)
- This file is automatically included in the deployment
- It tells GitHub Pages which domain should be used for your site

### 3. Configure GoDaddy DNS Settings

In your GoDaddy account, navigate to your domain's DNS settings and add the following records:

1. **For apex domain (contractorcto.com):**
   - Type: A Records
   - Name: @ (or leave blank)
   - Value: 185.199.108.153
   - Value: 185.199.109.153
   - Value: 185.199.110.153
   - Value: 185.199.111.153
   - TTL: 600 (or 1 hour)

2. **For www subdomain:**
   - Type: CNAME Record
   - Name: www
   - Value: pranney82.github.io. (replace with your GitHub username)
   - TTL: 600 (or 1 hour)

### 4. Wait for DNS Propagation

DNS changes can take anywhere from a few minutes to 48 hours to propagate. Once complete, your domain will point to your GitHub Pages site.

## Complete Workflow: VS Code to Live Website

Here's the complete workflow for updating your website:

1. **Make changes locally in VS Code**
   - Edit your HTML, CSS, or TypeScript files
   - Use `npm run dev:all` to see changes locally
   - Test your changes thoroughly

2. **Commit your changes**
   ```
   git add .
   git commit -m "Description of your changes"
   ```

3. **Push to GitHub**
   ```
   git push origin main
   ```

4. **Automatic deployment begins**
   - GitHub Actions will detect your push
   - It will run the workflow defined in `.github/workflows/deploy.yml`
   - You can monitor the progress in the "Actions" tab of your GitHub repository

5. **Deployment completes**
   - Your changes are now live on your website
   - Visit your domain (contractorcto.com) to see the updates

## Troubleshooting

- **Changes not appearing on the website?**
  - Check the "Actions" tab in your GitHub repository to ensure the deployment workflow completed successfully
  - Verify your GoDaddy DNS settings are correct
  - Clear your browser cache

- **Deployment failures?**
  - Check the workflow logs in the "Actions" tab
  - Ensure your code builds correctly locally with `npm run build`

## Technologies Used

- **[Tailwind CSS](https://tailwindcss.com/)**: For utility-first styling
- **[TypeScript](https://www.typescriptlang.org/)**: For type-safe JavaScript
- **[Font Awesome](https://fontawesome.com/)**: For icons
- **[GitHub Pages](https://pages.github.com/)**: For hosting
- **[GitHub Actions](https://github.com/features/actions)**: For CI/CD

## License

ISC

## Author

[Peter Ranney](https://github.com/pranney82)