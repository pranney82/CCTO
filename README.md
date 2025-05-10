# ContractorCTO Landing Page

A modern, responsive landing page for ContractorCTO.com built with Tailwind CSS and TypeScript.

## Features

- 🔥 **Modern Stack**: Built with Tailwind CSS and TypeScript
- 📱 **Responsive**: Mobile-friendly design that looks great on all devices
- 🚀 **Optimized**: Fast loading with minimal JavaScript
- 🧩 **Component-Based**: Modular sections for easy customization

## Project Structure

- `src/ts/` - TypeScript source files
- `src/input.css` - Tailwind CSS input file
- `dist/ts/` - Compiled JavaScript files
- `dist/output.css` - Compiled CSS
- `img/` - Directory for images
- `index.html` - Main landing page

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

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

## Deployment

To deploy to a web host:

1. Run `npm run build` to generate production files
2. Upload all files to your web host (keep the same directory structure)
3. Make sure to include:
   - index.html
   - dist/ directory (with output.css and ts/script.js)
   - Add your actual images to the img/ directory

## Technologies Used

- **[Tailwind CSS](https://tailwindcss.com/)**: For utility-first styling
- **[TypeScript](https://www.typescriptlang.org/)**: For type-safe JavaScript
- **[Font Awesome](https://fontawesome.com/)**: For icons

## License

ISC

## Author

[Peter Ranney](https://github.com/pranney82)