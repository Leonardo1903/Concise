import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@/context/themeContext";
import { Home, Login, Register } from "@/pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  // {
  //   element: <PrivateRoutes />,
  //   children: [
  //     {
  //       path: "/dashboard",
  //       element: <DashBoard />,
  //     },
  //   ],
  // },
]);

export default function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
