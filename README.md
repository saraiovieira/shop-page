## About The Project
This is a simple e-commerce shop page. It allows users to browse products, add them to a cart, and view their cart.

### Components

- Product Card: Displays product image, name, price, and an "Add to Cart" button.
- Shopping Cart: Shows a list of added products, their quantities, and a total price.

### Functionality

- Product Browsing: Users can scroll through the product list.
- Adding to Cart: Clicking "Add to Cart" adds the product to the cart and updates the cart total.
- Viewing Cart: Clicking the cart icon opens the cart.
- Removing from Cart: Clicking the trash button on a item removes it.
  
### Technologies 
Frontend: Used React, Next.js, CSS Modules, Context API

## Run Project

Clone the project

```bash
  git clone https://saraiovieira/shop-page.git
```

Go to the project directory

```bash
  cd shop-page
```

Install dependencies

```bash
  npm install
```

Create a .env file and add a variable with the name API_URL to fetch the data to the page. In my case, I used Kencko API url provided by them.

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

