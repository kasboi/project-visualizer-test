# Real Estate Floor Selector

A modern React application for exploring apartment towers, floors, and unit layouts with smooth interactive animations.

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

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── TowerSelector.tsx          # Tower selection interface
├── TowerSelector.css          # Tower component styles
├── FloorSelector.tsx          # Floor selection interface
├── FloorSelector.css          # Floor component styles
├── ApartmentSelector.tsx      # Apartment thumbnail grid with hover effects
├── ApartmentSelector.css      # Apartment selector styles
├── ApartmentDetail.tsx        # Detailed apartment view
├── ApartmentDetail.css        # Apartment detail styles
├── App.tsx                    # Main application component with routing
├── App.css                    # Global app styles
├── main.tsx                   # Application entry point
├── index.css                  # Global CSS styles
└── assets/                    # Static assets (images, icons)
```

## Technology Stack

- **React 19** - UI framework with hooks for state management
- **TypeScript** - Type safety and better developer experience
- **Vite** - Fast build tool and development server
- **CSS3** - Custom styling with animations, transitions, and responsive design
- **ESLint** - Code linting and quality assurance

## Architecture & Design Decisions

### Component Structure

- **Modular Components**: Each view (towers, floors, apartments, details) is a separate component for maintainability
- **Props Interface**: Clear TypeScript interfaces for all component props
- **State Management**: React useState for simple local state management
- **CSS Modules**: Separate CSS files for each component to maintain clean separation of concerns

### Interactive Features

- **Hover Effects**: Background dimming and thumbnail scaling on apartment hover
- **Smooth Animations**: CSS transitions and keyframe animations for polished UX
- **Responsive Design**: Mobile-first approach with CSS Grid and Flexbox
- **Accessibility**: Keyboard navigation support and ARIA labels

## Known Limitations & Tradeoffs

### Limitations

1. **Static Data**: Currently uses mock data instead of a real backend API
2. **Image Placeholders**: Uses external placeholder images instead of dynamic uploads
3. **No Persistence**: Application state resets on page refresh
4. **No Search/Filter**: No search or filtering functionality for apartments
5. **Limited Apartment Types**: Only 4 predefined apartment layouts

### Tradeoffs

1. **Simplicity vs Features**: Chose simplicity for this prototype over advanced features like virtual scrolling or complex state management
2. **CSS vs UI Library**: Used custom CSS instead of a UI library for more control over animations and styling
3. **Local State vs Global State**: Used component-level state instead of Context/Redux for simplicity
4. **Static Images vs Dynamic**: Used placeholder images instead of implementing image upload/management

## Future Enhancements

- Integration with real estate APIs
- Image upload and management system
- Advanced search and filtering
- Favorite/bookmark functionality
- Virtual tours integration
- Map integration for tower locations
- User authentication and saved preferences
