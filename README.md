# E-Commerce Shop Page

## About The Project
This project is a simple e-commerce shop page that allows users to browse products, add them to a cart, and manage their shopping cart. It demonstrates clean coding practices, state management using React Context, and scalable design principles.

## Features
### Implemented Functionality
- Product Browsing: Users can scroll through the product list.
- Adding to Cart: Clicking "Add to Cart" adds the product to the cart and updates the cart total.
- Viewing Cart: Clicking the cart icon opens the cart.
- Removing from Cart: Clicking the trash icon on a item removes it.
  
### Technologies 
Frontend: React, Next.js, CSS Modules, React Context.


## Key Design Considerations
Several important design decisions were made to balance simplicity, scalability, and development speed. Here are the primary choices:

#### State Management: React Context vs. Redux
- Used React Context instead of Redux for state management, specifically for the cart functionality because React Context is simpler to implement and was sufficient for this project’s scale.
- Redux would introduce more boilerplate and complexity, which was unnecessary for the relatively simple state management needs of the cart.

#### UI Design: Custom CSS vs. Tailwind CSS
- Skipped integrating a UI library initially to focus on functional features.

## Recent Enhancements
#### Improved Decision-Making Transparency:
- Documented trade-offs and prioritization in the development process.
- Refactored the project to use TypeScript.

## Future Improvements
- [x] Refactor the project to use TypeScript for improved scalability and maintainability.
- [ ] Integrate Tailwind CSS to enhance styling and responsiveness
- [ ] Enhance test coverage with unit and integration tests.
- [ ] Add advanced functionality such as product filtering and sorting.

## Run Project
1. Clone the project

```bash
  git clone https://saraiovieira/shop-page.git
```

2. Go to the project directory

```bash
  cd shop-page
```

3. Install dependencies

```bash
  npm install
```

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## Contributions
- Contributions, issues, and feature requests are welcome! Feel free to fork the repository and submit a pull request.

