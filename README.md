# Flex Store

Flex Store is a fully responsive e-commerce web application built with vanilla JavaScript. This project demonstrates a variety of web development techniques while maintaining compatibility with older JavaScript versions. 


## Table of Contents
- [Features](#features)
- [Setup](#setup)
- [Usage](#usage)
- [Modules](#modules)
- [Contributing](#contributing)


## Features
1. **User Authentication**: Sign up and log in using cookies as a pseudo-database.
2. **Single Page Application**: Utilizes a single HTML file with dynamic content rendering.
3. **Dynamic Product Fetching**: Retrieves products from the Fakestore API without using ES6 features like promises.
4. **Responsive Design**: Seamless navigation on both desktop and mobile devices.
5. **Profile Management**: Easy profile editing with dynamic validation.
6. **Persistent Shopping Cart**: Saves cart state across sessions.
7. **Modular Code Structure**: Organized scripts and styles for each component.
8. **Cookie Management**: Users and cart data are managed using cookies, ensuring data persistence and security.


## Setup

To run this project locally:

1. Clone the repository:
    ```bash
    git clone https://github.com/ku18m/flex_store.git
    cd flex_store
    ```

2. Open `index.html` in your browser to view the application.


## Usage

When you load the application, the `checkLogin` function (entry point) runs to check for the `loggedInUser` cookie and handles the logged-in and not logged-in states.

### Main Components:
- **Sign Up/Login**: Register and log in to your account.
- **Product Listing**: View products dynamically fetched from the Fakestore API.
- **Profile Management**: Edit your profile with dynamic validation.
- **Shopping Cart**: Add products to your cart and persist your cart state across sessions.


## Modules

### `display.js`
Handles the display of containers using CSS classes.

### `validation.js`
Dynamically assigns validation based on the chosen property to modify in the profile edit tab.

### `user.js`
Manages the current user object, including logging out.

### `users.js`
Acts as the application database, handling user objects stored in cookies.

### `cartController.js`
Manages the cart state, saving the current cart in the logged-in user object.

### `products.js`
Fetches products dynamically from the Fakestore API, rendering them based on the response.


## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any bugs, feature requests, or improvements.
