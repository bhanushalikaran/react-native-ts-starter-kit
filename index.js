#!/usr/bin/env node

const shell = require("shelljs");
const fs = require("fs");
const path = require("path");

// Get the app name and version from command-line arguments
const appName = process.argv[2];
const rnVersion = process.argv[3] || "latest"; // Default to 'latest' if version is not provided

if (!appName) {
  console.error(
    "\x1b[31mError: Please provide a name for your React Native app.\x1b[0m"
  );
  process.exit(1);
}

// Define paths
const starterSrcPath = path.join(__dirname, "src");
const projectPath = path.join(process.cwd(), appName);
const destinationSrcPath = path.join(projectPath, "src");

// Check for existing project
if (fs.existsSync(projectPath)) {
  console.error(
    `\x1b[31mError: Project directory \"${appName}\" already exists.\x1b[0m`
  );
  process.exit(1);
}

// Define the dependencies to install
const dependencies = [
  "@bhanushalikaran/react-native-doublepress",
  "axios",
  "react-native-fast-image",
  "@react-navigation/native",
  "@react-navigation/native-stack",
  "@react-navigation/bottom-tabs",
  "@react-navigation/material-top-tabs",
  "react-native-tab-view",
  "react-native-pager-view",
  "react-native-screens",
  "react-native-safe-area-context",
  "@react-native-async-storage/async-storage",
  "redux-persist",
  "react-redux",
  "@reduxjs/toolkit",
  "@react-native-firebase/app",
  "@react-native-firebase/messaging",
  "react-native-gesture-handler",
  "react-native-worklets",
  "react-native-reanimated",
  "@gorhom/bottom-sheet",
  "@gorhom/portal",
  "@react-native-community/netinfo",
  "react-native-device-info",
];

// Function to run shell commands
const execCommand = (cmd, errorMessage) => {
  if (shell.exec(cmd, { silent: true }).code !== 0) {
    console.error(`\x1b[31m${errorMessage}\x1b[0m`);
    process.exit(1);
  }
};

// Step 1: Initialize new React Native project
console.log(
  `\x1b[34mInitializing new React Native project: ${appName} (version: ${rnVersion})...\x1b[0m`
);
execCommand(
  `npx @react-native-community/cli init ${appName} ${
    rnVersion !== "latest" ? "--version " + rnVersion : ""
  } --skip-install`,
  "Error: Failed to initialize React Native project."
);

// Step 2: Navigate to the project directory
shell.cd(projectPath);

// Step 3: Copy the `src` directory from the starter to the new project
if (fs.existsSync(starterSrcPath)) {
  shell.cp("-r", starterSrcPath, destinationSrcPath);
  console.log("\x1b[32mCopied src directory to the new project.\x1b[0m");
} else {
  console.error(
    "\x1b[31mError: 'src' directory not found in the starter.\x1b[0m"
  );
  process.exit(1);
}

// Step 3.1: Replace root App.tsx with custom one from boilerplate
const boilerplateAppPath = path.join(__dirname, "App.tsx");
const projectAppPath = path.join(projectPath, "App.tsx");

if (fs.existsSync(boilerplateAppPath)) {
  // Delete the default App.tsx from newly created project
  if (fs.existsSync(projectAppPath)) {
    fs.unlinkSync(projectAppPath);
    console.log("\x1b[32mDeleted default App.tsx.\x1b[0m");
  }

  // Copy custom App.tsx from boilerplate
  fs.copyFileSync(boilerplateAppPath, projectAppPath);
  console.log("\x1b[32mCopied custom App.tsx.\x1b[0m");
} else {
  console.error(
    "\x1b[31mError: Custom App.tsx not found in the boilerplate root.\x1b[0m"
  );
  process.exit(1);
}

// Step 3.2: Replace babel.config.js with boilerplate version
const boilerplateBabelPath = path.join(__dirname, "babel.config.js");
const projectBabelPath = path.join(projectPath, "babel.config.js");

if (fs.existsSync(boilerplateBabelPath)) {
  // Delete default babel.config.js if it exists
  if (fs.existsSync(projectBabelPath)) {
    fs.unlinkSync(projectBabelPath);
    console.log("\x1b[32mDeleted default babel.config.js.\x1b[0m");
  }

  // Copy custom babel.config.js from boilerplate
  fs.copyFileSync(boilerplateBabelPath, projectBabelPath);
  console.log("\x1b[32mCopied custom babel.config.js.\x1b[0m");
} else {
  console.warn(
    "\x1b[33mWarning: babel.config.js not found in boilerplate. Skipping this step.\x1b[0m"
  );
}

// Step 4: Install dependencies
console.log("\x1b[34mInstalling dependencies with Yarn...\x1b[0m");
execCommand(
  `yarn add ${dependencies.join(" ")}`,
  "Error: Failed to install dependencies."
);

// Final message
console.log(
  `\x1b[32mReact Native project created successfully!\x1b[0m\n\n` +
    `Next steps:\n` +
    `1. Navigate to your project directory: \x1b[33mcd ${appName}\x1b[0m\n` +
    `2. Install iOS dependencies using CocoaPods:\n` +
    `   \x1b[33mcd ios && pod install\x1b[0m\n` +
    `3. Configure native setup for the libraries you installed. Refer to each library's documentation.`
);
