CoinCash App README
===================

Introduction
------------

Welcome to CoinCash App! This application is designed to provide a seamless and intuitive user experience for managing your digital currency transactions. The app features a custom theme, reusable components, and several other functionalities aimed at enhancing user interaction.

Features
--------

### Custom Theme

*   **Colors:** A theme has been created using specific colors to ensure a cohesive and visually appealing interface. The colors are based on the values provided by Figma.
*   **Hover Effects:** Buttons feature a custom hover color to enhance interactivity. Text buttons are underlined on hover for better visibility.

### Reusable Components

*   **Buttons and Text Boxes:** Reusable button and text box components have been implemented to maintain consistency throughout the app and streamline the development process.

### Custom Hooks

*   **Mobile View Detection:** A custom hook is used to detect whether the app is being viewed on a mobile device, enabling responsive design adjustments.
*   **Animation Hook:** Another custom hook is used to implement animations for showing list items, enhancing the visual appeal of the app.

### Validation

*   **Email Validation:** Input validation has been implemented to check if the entered value is an email. This ensures that only valid email addresses are accepted.
*   **Sign-In Button Disable:** The sign-in button is disabled if the input field is empty, preventing incomplete submissions and enhancing user experience.

### Redirection

*   **OnClick Function:** The app includes an `onClick` function that opens a new tab for redirection purposes, making it easy for users to navigate to external links or sections of the app.

### Transitions

*   **Feature Item Transitions:** Transitions are used to smoothly display feature items, creating a more engaging user experience.

Testing
-------

The app has been thoroughly tested on the following platforms to ensure compatibility and performance:

*   **Browsers:**
    
    *   Google Chrome
    *   Mozilla Firefox
*   **Mobile Devices:**
    
    *   Samsung Galaxy S20 Ultra (in Google Chrome)



Installation and Running the App
--------------------------------

To install and run the CoinCash App locally, follow these steps:

1.  **Clone the Repository:**
      ```
    git clone https://github.com/your-username/coincash-app.git
      cd coincash-app
    ```

    
2.  **Install Dependencies:** Make sure you have Node.js installed. Then, run:
    ```
    npm install
    ```

    
3.  **Run the App:** To start the development server, run:

```
    npm install
```


    
*    This will start the app on a local development server. You can access it by navigating to `http://localhost:3000` in your web browser.
    
4.  **Build for Production:** To create a production build of the app, run:
     ```
    npm run build
    ```
    
    The production-ready files will be generated in the `dist` directory.
    



Conclusion
----------

The CoinCash App is designed with a focus on usability and aesthetics. By leveraging reusable components, custom hooks, validation mechanisms, and smooth transitions, we aim to provide a high-quality user experience. We hope you enjoy using CoinCash and find it useful for managing your digital currency transactions.
