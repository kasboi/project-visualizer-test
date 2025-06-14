# Real Estate Floor Selector

A modern React + TypeScript + Vite application for exploring apartment towers, floors, and unit layouts with smooth interactive animations.

## Features

- **Tower Selection**: Choose from multiple towers (A, B, C)
- **Floor Navigation**: Browse through 15 floors per tower
- **Apartment Layouts**: View 4 different apartment types with detailed information
- **Interactive Animations**: Smooth hover effects with background dimming and thumbnail scaling
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Beautiful gradients and animations for an engaging user experience

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/
│   ├── TowerSelector.tsx      # Tower selection interface
│   ├── FloorSelector.tsx      # Floor selection interface
│   ├── ApartmentSelector.tsx  # Apartment thumbnail grid
│   └── ApartmentDetail.tsx    # Detailed apartment view
├── styles/
│   ├── TowerSelector.css
│   ├── FloorSelector.css
│   ├── ApartmentSelector.css
│   └── ApartmentDetail.css
├── App.tsx                    # Main application component
└── main.tsx                   # Application entry point
```

## Technology Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and development server
- **CSS3** - Styling with animations and transitions
- **ESLint** - Code linting
  tsconfigRootDir: import.meta.dirname,
  },
  },
  })

````

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
````
