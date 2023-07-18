import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Users from "./pages/Users";
import "./styles/index.css";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";

function App() {
    const Layout = () => {
        return (
            <div className="overflow-x-hidden overflow-y-hidden bg-main font-inter text-main">
                <Navbar />
                <div className="flex h-[var(--content-height)] overflow-hidden">
                    <div className="w-64 border-r border-solid border-soft px-5 py-1">
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
            ],
        },
    ]);

    return <RouterProvider router={router} />;
}

export default App;
