import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Products from "./pages/Products";
import User from "./pages/User";
import Users from "./pages/Users";
import "./styles/index.css";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";

function App() {
    const Layout = () => {
        return (
            <div className="overflow-x-hidden overflow-y-hidden bg-main font-inter text-main">
                <Navbar />
                <div className="flex lg:h-[var(--content-height)] lg:overflow-hidden">
                    <div className="w-max border-r border-solid border-soft px-2 py-1 lg:w-64 lg:px-5">
                        <Menu />
                    </div>
                    <div className="w-full px-5 py-1">
                        <Outlet />
                    </div>
                </div>
                <Footer />
            </div>
        );
    };

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    path: "/",
                    element: <Home />,
                },
                {
                    path: "/users",
                    element: <Users />,
                },
                {
                    path: "/products",
                    element: <Products />,
                },
                { path: "/users/:id", element: <User /> },
                { path: "/products/:id", element: <Product /> },
            ],
        },
    ]);

    return <RouterProvider router={router} />;
}

export default App;
