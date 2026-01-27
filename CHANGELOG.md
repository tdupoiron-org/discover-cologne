# Changelog

All notable changes to the Discover Guadeloupe project will be documented in this file.

## [Unreleased]

### Added - Interactive Map View (PR #66)
- **Interactive OpenStreetMap Integration**: Added a fully interactive map view powered by React Leaflet and OpenStreetMap
  - Users can now toggle between grid and map views using the view mode selector
  - Seamless switching between traditional card grid and geographic map visualization
  
- **Geolocation Support**: Automatic user location detection and map centering
  - App requests user's current location on map view load
  - Map automatically centers on user's location when permission is granted
  - Blue marker indicates user's current position on the map
  - "Your Location" badge displays when geolocation is active
  
- **Custom Map Markers**: Color-coded markers based on site status and popularity
  - Red markers for "must-see" attractions
  - Orange markers for "popular" sites
  - Green markers for "hidden gem" locations
  - Gray markers for visited sites
  - Custom SVG pin design with white center for better visibility
  
- **Interactive Popups**: Rich site information displayed directly on the map
  - Site images with 4:3 aspect ratio
  - Site name, category, and description
  - Quick visit status toggle checkbox
  - Popularity and crowd level badges
  - Visit duration and rating information
  - Visual overlay on visited site images with checkmark
  
- **Enhanced Navigation**: Improved user interface elements
  - View mode toggle with Grid/Map buttons and icons
  - Consistent filtering across both view modes (All Sites, To Visit, Visited)
  - Progress tracking visible in both views
  - Responsive design adapting to different screen sizes

### Technical Implementation
- Added Leaflet dependencies (`leaflet`, `react-leaflet`, `@types/leaflet`)
- Created new `MapView.tsx` component with memoized icon creation for performance
- Integrated geolocation API for user positioning
- Custom marker icons using base64-encoded SVG data
- Responsive map container with proper height calculations
- Proper TypeScript typing for all map-related components

### UI/UX Improvements
- Professional map styling with OpenStreetMap tiles
- Smooth transitions between view modes
- Touch-friendly popups on mobile devices
- Scroll wheel zoom support for desktop users
- Clear visual feedback for visited vs unvisited sites
- Accessible markers and controls with proper ARIA labels

## [Initial Release]

### Features
- Curated list of Guadeloupe's must-see locations
- Visit tracking with progress indicators
- Responsive card-based design
- Filtering by visit status (all, visited, unvisited)
- Beautiful imagery and detailed site descriptions
- Location categories (natural wonders, cultural sites, marine experiences, etc.)
- Professional AXA-branded color scheme
- Inter font family for clean, modern typography
