import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Signin from "./components/Signin/Signin";
import Signup from "./components/Signup/Signup";
import Home from "./components/Home/Home";
import Jobs from "./components/Jobs/Jobs";
import Browse from "./components/Browser/Browse";
import Profile from "./components/Profile/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Signin />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/jobs",
    element: <Jobs />,
  },
  {
    path: "/browser",
    element: <Browse />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
