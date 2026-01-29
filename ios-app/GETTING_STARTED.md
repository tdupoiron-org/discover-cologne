# Getting Started with the iOS App

This guide will help you run and test the Discover Guadeloupe iOS app.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 18 or higher)
- **npm** or **yarn**
- **Expo Go** app on your iPhone (download from App Store)

For iOS Simulator testing (macOS only):
- **Xcode** (latest version)
- **Command Line Tools for Xcode**

## Installation Steps

1. Navigate to the iOS app directory:
```bash
cd ios-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

## Running the App

### Option 1: On Your iPhone (Recommended for Testing)

1. Download the **Expo Go** app from the App Store on your iPhone 13 mini
2. After running `npm start`, a QR code will appear in your terminal
3. Open the Camera app on your iPhone and scan the QR code
4. Tap the notification to open the app in Expo Go

### Option 2: iOS Simulator (macOS only)

1. After running `npm start`, press `i` in the terminal
2. The iOS Simulator will launch automatically and load the app
3. Note: Geolocation features work differently in the simulator

### Option 3: Web Preview (Limited Features)

While this is an iOS app, you can preview basic UI on the web:
```bash
npm run web
```
Note: Native features like maps and location may not work properly.

## Testing Features

### 1. List View
- Browse all 12 Guadeloupe attractions
- Tap any site card to expand details
- Use filter buttons to show All/To Visit/Visited sites
- Mark sites as visited using the button at the bottom of each card

### 2. Map View
- View all sites on an interactive OpenStreetMap
- Tap markers to see site details in callouts
- Color-coded markers:
  - Red: Must-see attractions
  - Orange: Popular sites
  - Green: Hidden gems
  - Gray: Visited sites
- Allow location access to see your position on the map

### 3. Settings
- **Theme**: Switch between Light, Dark, and System modes
- **Language**: Choose English, French, or German
- All preferences are saved and persist across app restarts

### 4. Visit Tracking
- Mark sites as visited in either List or Map view
- Progress bar shows completion percentage
- Visit history is saved and syncs between screens
- Data persists even after closing the app

## Troubleshooting

### Cannot connect to Metro bundler
- Ensure your computer and phone are on the same Wi-Fi network
- Try restarting the Metro bundler with `npm start --clear`

### Location not working
- Make sure you've granted location permissions to Expo Go
- On simulator, use Debug > Location to simulate a position in Guadeloupe

### App not loading
- Clear the Expo cache: `npm start --clear`
- Reinstall dependencies: `rm -rf node_modules && npm install`

### Map not showing
- Check your internet connection (maps require data)
- Restart the app

## Development

### Project Structure
```
ios-app/
├── App.tsx                 # Main app entry point
├── src/
│   ├── components/        # Reusable UI components
│   ├── contexts/          # React contexts for state
│   ├── data/              # Static site data
│   ├── i18n/              # Translations
│   ├── screens/           # Main app screens
│   ├── types/             # TypeScript types
│   └── utils/             # Helper functions
└── assets/                # Images and icons
```

### Making Changes
- Components automatically reload when you save changes
- Shake your device or press Cmd+D (simulator) to open the developer menu
- Use React Native Debugger for advanced debugging

## Building for Production

To create a standalone app for the App Store:

1. Install EAS CLI:
```bash
npm install -g eas-cli
```

2. Login to Expo:
```bash
eas login
```

3. Configure build:
```bash
eas build:configure
```

4. Build for iOS:
```bash
eas build --platform ios
```

## Additional Resources

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Documentation](https://reactnative.dev/)
- [React Navigation Guide](https://reactnavigation.org/)
- [iOS App README](README.md)

## Need Help?

If you encounter any issues or have questions, please:
1. Check the [iOS App README](README.md) for detailed documentation
2. Review the troubleshooting section above
3. Check the [Expo community forums](https://forums.expo.dev/)
4. Open an issue in the GitHub repository

Happy exploring Guadeloupe! 🌴🏖️
