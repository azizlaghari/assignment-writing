import { BrowserRouter, Route, Routes } from "react-router-dom";
import Orders from "../Views/Orders/Orders";
import ProductList from "../Views/Product/Product";
import Login from "../Views/Login/Login";
import Dashboard from "../Views/Dashboard/Dashboard";
import MainMenu from "../Layout/MainMenu/MainMenu";
import Customers from "../Views/Customers/Customers";

function Routers() {
    // console.log("isAdmin", isAdmin);

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Dashboard/>} />
                    <Route  path="login" element={<Login/>} />
                    <Route  path="orders" element={<Orders/>} />
                    <Route  path="products" element={<ProductList/>} />
                    <Route  path="customers" element={<Customers/>} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default Routers;
