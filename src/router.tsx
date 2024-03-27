import { createBrowserRouter } from "react-router-dom";

export const paths = {
  HOME: "/",
} as const;

export const router = createBrowserRouter([
  {
    path: paths.HOME,
    element: <>Hello, World!</>,
  },
]);
