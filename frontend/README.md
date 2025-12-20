**Project README — Kamir (Frontend)**

- **Project**: `frontend` — React single-page application built with Create React App.
- **Purpose**: A simple product-listing site for the Business "Kamir".

**Background**

- **Client / Startup**: Kamir.
- **Status**: Kamir does not currently have an official website; the client was discovered on a Facebook page and this repository is the first web presence created for them. This is not a rehaul of an existing site.
- **Reference / Source**: Found on Facebook (client-provided social listing). No live website URL was provided at the time of creation.

**Why this project exists**

- Kamir lacked a dedicated web page to list products and provide a basic brand presence. The goal of this frontend is to create a minimal, responsive storefront that showcases products and provides product detail pages.

**Routes Included & What Each Page Does**

- **`/` — Home / Product listing**: Implements `HomeScreen.jsx`. Shows a grid/list of products with images, names, and prices. Users can click a product to view details.
- **`/product/:id` — Product detail**: Implements `ProductScreen.jsx`. Displays full details for a single product (image, name, price, description) and any available actions (e.g., view more details).
- **`/about` — About**: Implements `AboutScreen.jsx`. Provides background information about Kamir and contact / social references.

Files/screens that map to routes:

- `src/screens/HomeScreen.jsx` — Home listing view.
- `src/screens/ProductScreen.jsx` — Individual product details view.
- `src/screens/AboutScreen.jsx` — About / info page.

Important components used across routes:

- `src/components/header.jsx` — Header / navigation component used across pages.
- `src/components/Footer.jsx` — Footer component.
- `src/components/Product.jsx` — Product card used in the product listing.

**Project Structure (relevant files)**

- `src/index.js` — App entry, router setup.
- `src/App.js` — Application shell, route definitions.
- `src/products.js` — Product sample data used by the frontend.
- `src/components/Product.jsx` — Product card component.
- `public/` — Static public files and `index.html`.

**Tech Stack & Key Dependencies**

- **Framework**: React (via Create React App).
- **Routing**: `react-router-dom` (project uses route-based screens).
- **UI Components**: `react-bootstrap`, `react-router-bootstrap`.
- **Other**: `font-awesome` for icons, `web-vitals` and React testing libraries for test scaffolding.

Main dependencies (from `package.json`):

- `react` ^19.x
- `react-dom` ^19.x
- `react-router-dom` ^7.x
- `react-bootstrap` ^2.x
- `react-router-bootstrap` ^0.26.x
- `font-awesome` ^4.7.0

**How to Run (Windows PowerShell)**

Before installing dependencies you need to clone the repository to your machine. Replace the example URL and folder name with your repository's values.

1. Clone the repo and change into the `frontend` folder (GitLab example):

```powershell
git clone https://gitlab.com/<your-username>/<your-repo>.git
cd <your-repo>\frontend
```

Tip: on GitLab use the project's **HTTPS** clone URL (click the blue "Clone" button on your project page) and paste it into the `git clone` command above.

2. Install dependencies:

```powershell
npm install
```

3. Run the development server (opens at `http://localhost:3000`):

```powershell
npm start
```

4. Create a production build:

```powershell
npm run build
```

5. Run tests (CRA test runner):

```powershell
npm test
```

**How the UI flows**

- Users land on the Home page (`/`) where `HomeScreen` renders a grid of `Product` components using sample data from `src/products.js`.
- Clicking a product card navigates to `/product/:id` where `ProductScreen` reads the `id` param and displays the corresponding product details.
- The `header.jsx` component provides navigation links to Home and About pages. `Footer.jsx` provides site footer info.

**Notes & Next Steps**

- This project uses local/sample product data in `src/products.js`. For production, integrate a backend API (e.g., REST endpoints) and fetch product data dynamically.
- Add contact details or a direct link to the Kamir Facebook page if the client provides it.
- Consider adding a shopping cart and persistent state if required in future iterations.

**Contact / Reference**

- Client discovery: Kamir was found on Facebook (no official website provided). If you have the Facebook URL or other references, add them here.

---
