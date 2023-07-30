import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import RootLayout from "./pages/RootLayout";
import ErrorPage from "./pages/ErrorPage";
import Categories from "./pages/Categories";
import Products from "./pages/Products";
import ShoppingCart from "./pages/ShoppingCart";
import Home from "./pages/Home";
import NewCollections from "./pages/NewCollections";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/lib/integration/react";

const router = createBrowserRouter([
 {
  path: "/",
  element: <RootLayout />,
  errorElement: <ErrorPage />,
  children: [
   {
    index: true,
    element: <Home />,
   },
   { path: "categories", element: <Categories /> },
   { path: "/new-collections", element: <NewCollections /> },
   { path: "/login", element: <Login /> },
   { path: "/register", element: <Register /> },
   { path: "shopping-cart", element: <ShoppingCart /> },
   {
    path: "categories/:prefix/products",
    element: <Products />,
    loader: ({ params }) => {
     if (!isNaN(params.prefix)) {
      throw new Response("bad request", {
       statusText: "please  make sure to insert corect post id!",
       status: 400,
      });
     }
     return null;
    },
   },
  ],
 },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
  <RouterProvider router={router}>
   <App />
      </RouterProvider>
      </PersistGate>
 </Provider>
);

