import Footer from "./components/Footer"
import Menu from "./components/Menu"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Products from "./pages/Products"
import Users from "./pages/Users"
import "./styles/index.css"
import {RouterProvider, createBrowserRouter, Outlet} from "react-router-dom"

function App() {

  const Layout = () => {
    return (
      <div className="font-inter bg-main text-main">
        <Navbar />
        <div className="flex">
          <div className="w-64 border-r border-solid border-soft py-1 px-5"><Menu /></div>
          <div className="w-full py-1 px-5"><Outlet /></div>
        </div>
        <Footer />
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/users",
          element: <Users />
        },
        {
          path: "/products",
          element: <Products />
        }
      ]
    },
  ])

  return (
    <RouterProvider router={router}/>
  )
}

export default App
