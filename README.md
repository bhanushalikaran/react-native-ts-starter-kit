# React Native Project Starter Kit

# Version 2 🚀

A customizable TypeScript-based React Native boilerplate built to accelerate mobile app development — complete with pre-configured navigation, Redux, theming, and scalable project architecture.
This script initializes a new React Native project with optional version specification and copies a custom `src` folder from the starter project.

## Package Name

`react-native-ts-starter-kit`

Ensure you have the following installed:

- Node.js
- Yarn

### Running the Script

Run the following command:

```bash
npx react-native-ts-starter-kit <app-name> [react-native-version]
```

## After Project is Created

Please follow these steps to complete the setup:

1. Navigate to your project directory:
   ```bash
   cd <app-name>
   ```

2. Install iOS dependencies using CocoaPods:
   ```bash
   cd ios
   pod install
   ```

3. Configure any necessary native setup for the libraries you've installed. Refer to the documentation of each library for specific instructions.
