# CoinCash App

CoinCash is a React-based application designed to provide a seamless user experience with a consistent theme, reusable components, and custom hooks. This README outlines the key features and components implemented in the CoinCash app.

## Features

### Theming
- A custom theme has been created using the color values provided by Figma.
- Consistent theming ensures a unified look and feel across the entire application.

### Reusable Components
- **Buttons**: Both contained and text buttons have been created as reusable components.
  - Contained buttons have a custom hover color.
  - Text buttons are underlined on hover.
- **Text Box**: A reusable text box component has been implemented with optional button functionality.

### Custom Hooks
- **useWindowSize**: This hook tracks the window size and determines if the view is mobile or not.
- **useInView**: This hook is used to implement the animation of showing list items when they come into view.

### Features List
- The features items are displayed with a smooth transition effect when they enter the viewport.
- Transitions are implemented using the Intersection Observer API.

### Redirection
- An `onClick` function has been used to open a new tab for redirection purposes.

## Usage

### Theming
The theme values are defined in the `theme` object and can be accessed throughout the application to maintain consistency.




























# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
#   c o i n c a s h - a p p 
 
 
