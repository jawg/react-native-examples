# react-native-examples

Integrating Jawg Maps with React Native

## How to build the project

First, make sure to have an emulator or a physical device connected.

Add your access token and custom style in the file `./src/config.js`: 

```bash
# Install all dependencies
npm install
# For iOS only, install pods before start
cd ios && pod install 
```

Then open 2 terminals and run

```bash
# first prompt
npm start
```

```bash
# second prompt
npm run [android|web|ios]
```

All our examples are located here: [`src/screen/example`](./src/screen/example)