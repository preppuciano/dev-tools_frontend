import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CategoryIdPage from "../pages/categories/CategoryIdPage";
import AddToolPage from "../pages/AddToolPage";
import SearchPage from "../pages/SearchPage";
import HomePage from "../pages/HomePage";
import AppLayout from "../layouts/AppLayout";
import AddCategoryPage from "../pages/AddCategoryPage";

export default function AppRouter() {
  const router = createBrowserRouter([
    {
      path: '',
      element: <AppLayout />,
      children: [
        {
          path: '',
          element: <HomePage />
        },
        {
          path: 'search',
          element: <SearchPage />
        },
        {
          path: 'category/:id',
          element: <CategoryIdPage />
        },
        {
          path: 'add-tool',
          element: <AddToolPage />
        },
        {
          path: 'add-category',
          element: <AddCategoryPage />
        }
      ]
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}