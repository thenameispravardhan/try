# Pravardhan Project

A modern, production-ready web application for learning and development, built with modern web technologies and best practices.

## ✨ Features

- 🎨 **Modern UI/UX** - Clean, responsive design with smooth animations
- 📱 **Mobile-First** - Fully responsive across all devices
- ♿ **Accessible** - WCAG compliant with proper ARIA labels
- 🚀 **Fast Performance** - Optimized with Vite build tool
- ✅ **Form Validation** - Real-time client-side validation with feedback
- 🎯 **Interactive** - Dynamic navigation and smooth transitions
- 🔧 **Developer-Friendly** - ESLint, Prettier, and modern tooling

## 🛠️ Tech Stack

- **Build Tool:** Vite
- **Styling:** SCSS with modern CSS features
- **JavaScript:** ES6+ modules
- **Code Quality:** ESLint + Prettier
- **Version Control:** Git

## 📁 Project Structure

```
pravardhan-project/
├── src/
│   ├── index.html          # Homepage
│   ├── about.html          # About page
│   ├── login.html          # Login form
│   ├── signup.html         # Signup form
│   ├── styles/
│   │   ├── main.scss       # Main stylesheet (imports all partials)
│   │   ├── _variables.scss # SCSS variables
│   │   ├── _mixins.scss    # SCSS mixins
│   │   ├── _base.scss      # Base styles
│   │   ├── _navbar.scss    # Navigation component
│   │   ├── _hero.scss      # Hero section
│   │   ├── _about.scss     # About page styles
│   │   ├── _forms.scss     # Form components
│   │   └── _footer.scss    # Footer component
│   └── scripts/
│       ├── main.js         # Main entry point
│       ├── navigation.js   # Navigation functionality
│       ├── formValidation.js # Form validation
│       └── animations.js   # Animation effects
├── public/                 # Static assets
├── dist/                   # Build output (generated)
├── .eslintrc.json          # ESLint configuration
├── .prettierrc.json        # Prettier configuration
├── vite.config.js          # Vite configuration
├── package.json            # Dependencies and scripts
└── README.md              # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/thenameispravardhan/try.git
cd try
```

2. Install dependencies:

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### Building for Production

Build the project:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

### Code Quality

Lint your code:

```bash
npm run lint
```

Auto-fix linting issues:

```bash
npm run lint:fix
```

Format code with Prettier:

```bash
npm run format
```

## 📝 Available Scripts

| Script             | Description               |
| ------------------ | ------------------------- |
| `npm run dev`      | Start development server  |
| `npm run build`    | Build for production      |
| `npm run preview`  | Preview production build  |
| `npm run lint`     | Run ESLint                |
| `npm run lint:fix` | Fix ESLint issues         |
| `npm run format`   | Format code with Prettier |

## 🎨 Design Features

### Color Palette

- Primary: `#667eea` (Purple-blue)
- Secondary: `#f27373` (Coral red)
- Success: `#48bb78` (Green)
- Error: `#f56565` (Red)

### Typography

- Base: Segoe UI, Tahoma, Geneva, Verdana, sans-serif
- Headings: Inter, Helvetica Neue, Arial, sans-serif

### Responsive Breakpoints

- Small: 640px
- Medium: 768px
- Large: 1024px
- Extra Large: 1280px

## ♿ Accessibility

This project follows accessibility best practices:

- Semantic HTML5 elements
- ARIA labels and roles
- Keyboard navigation support
- Focus management
- Color contrast compliance
- Screen reader friendly

## 🔒 Form Validation

The application includes comprehensive client-side form validation:

- Real-time validation on blur
- Visual feedback (success/error states)
- Helpful error messages
- Password strength indicator
- Email format validation
- Phone number validation
- Required field validation

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is licensed under the MIT License.

## 👤 Author

**Pravardhan**

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## ⭐ Show your support

Give a ⭐️ if you like this project!

---

Made with ❤️ by Pravardhan
