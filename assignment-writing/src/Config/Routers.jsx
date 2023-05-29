import { BrowserRouter, Route, Routes } from "react-router-dom";
import Orders from "../Views/Orders/Orders";
import ProductList from "../Views/Product/Product";
import Customer from "../Views/Customers/Customers";
import Login from "../Views/Login/Login";
import Dashboard from "../Views/Dashboard/Dashboard";
import MainMenu from "../Layout/MainMenu/MainMenu";

function Routers() {
    // console.log("isAdmin", isAdmin);

    return (
        <>
            <BrowserRouter>
                <Routes>
                    {/* <Route  path="/" element={<MainMenu/>} /> */}
                    <Route index path="dashboard" element={<Dashboard/>} />
                    <Route  path="login" element={<Login/>} />
                    <Route  path="orders" element={<Orders/>} />
                    <Route  path="products" element={<ProductList/>} />
                    <Route  path="customers" element={<Customer/>} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default Routers;
