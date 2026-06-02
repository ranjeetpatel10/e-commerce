# ECommerce

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.11.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

# Features
## Authentication
Login and Logout functionality
Login implemented as a lazy‑loaded module for performance
Access Denied page for unauthorized users

## Navigation
Global header with links to Home, Cart, Login/Logout, and Orders
Cart link shows live item count badge

## Products
Home page displays product list
Filter option to show only “featured” products

## Cart
Add/remove products with quantity updates
Cart badge updates dynamically
Cart details are retained on page refresh using localStorage
Checkout moves items into Orders

## Orders
Orders page lists placed orders
Checkout clears cart and shows success message
Empty state message with link to add products

## Error Handling
Custom Access Denied page
404 Page Not Found route for invalid URLs

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
