# Guido Café & Co. Website

A React-based website for Guido Café & Co., a coffee shop located in Canoas, Brazil. Named after the owner's dog, this website showcases the café's menu, location, and story.

### Features

- Responsive home page
- About section with the café's origin story
- Interactive menu with tabs for:
  - Coffee drinks
  - Filter coffee options
  - Bakery items ("Padoca")
- Location information with embedded Google Maps
- Social media integration (false link for company privacy)
- Career opportunities section (false link for company privacy)

### Tech Stack

- React 18
- TypeScript
- CSS3

## Project Structure

```
src/
├── components/          # React components
│   ├── About/          # About section
│   ├── Footer/         # Footer with contact information
│   ├── Header/         # Navigation header
│   ├── Home/           # Home section
│   ├── Location/       # Maps and address
│   └── Menu/           # Menu components
├── assets/             # Images and media
├── styles/             # Global styles
└── types/             # TypeScript definitions
```

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/guido.git
```

2. Install dependencies:
```bash
cd guido
npm install
```

3. Start the development server:
```bash
npm start
```

Visit [http://localhost:3000](http://localhost:3000) to view the site.

### Available Scripts

- `npm start` - Runs development server
- `npm test` - Executes test suite
- `npm run build` - Creates production build
- `npm run eject` - Ejects from Create React App

### Design Features

- Custom color scheme with CSS variables
- Responsive design for mobile devices
- Interactive menu tabs
- Custom scrollbar styling
- Hover effects and animations