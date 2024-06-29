import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home.jsx';
import AllProjects from './pages/AllProjects.jsx';
import AllPaintItems from './pages/AllPaintItems.jsx';
import AllPaintItemsDuluxe from "./pages/AllPaintItemsDuluxe.jsx";
import AllPaintItemsMultilac from "./pages/AllPaintItemsMultilac.jsx";
import AllPaintItemsRobbialac from "./pages/AllPaintItemsRobbialac.jsx";
import AllPaintItemsJat from "./pages/AllPaintItemsJat.jsx";
import AllPaintItemsWall from "./pages/AllPaintItemsWall.jsx";
import AllPaintItemsWood from "./pages/AllPaintItemsWood.jsx";
import AllPaintItemsFloor from "./pages/AllPaintItemsFloor.jsx";
import SearchResults from './pages/SearchResults.jsx';
import Quotation from './pages/Quotation.jsx';
import UserProfile from './pages/UserProfile.jsx';
import Admin from './pages/Admin.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Cart from './pages/Cart.jsx';
import Payment from './pages/Payment.jsx';
import AdminChat from './pages/AdminChat.jsx';
import AdminOrders from './pages/AdminOrders.jsx';
import AdminRates from './pages/AdminRates.jsx';
import AdminUsers from './pages/AdminUsers.jsx';
import { Toaster } from 'sonner';
import AdminProjects from './pages/AdminProjects.jsx';
import Testing from "./components/Testing.jsx";
import ContactUs from "./components/ContactUs.jsx";
import HomeVisualizer from "./pages/HomeVisualizer.jsx";
import Checkout from "./pages/Checkout.jsx";
import Orders from "./pages/Orders.jsx";
import Test2 from "./components/Test2.jsx";

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(!!sessionStorage.getItem('token'));

    const updateAuthentication = () => {
        const token = sessionStorage.getItem('token');
        setIsAuthenticated(!!token);
    };

    useEffect(() => {
        updateAuthentication();
    }, []);

    return (
        <>
            <Router>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/allProjects" element={<AllProjects />} />
                    <Route path="/allPaintItems" element={<AllPaintItems />} />
                    <Route path="/allPaintItemsDuluxe" element={<AllPaintItemsDuluxe />} />
                    <Route path="/allPaintItemsJat" element={<AllPaintItemsJat />} />
                    <Route path="/allPaintItemsMultilac" element={<AllPaintItemsMultilac />} />
                    <Route path="/allPaintItemsRobbialac" element={<AllPaintItemsRobbialac />} />
                    <Route path="/allPaintItemsWall" element={<AllPaintItemsWall />} />
                    <Route path="/allPaintItemsFloor" element={<AllPaintItemsFloor />} />
                    <Route path="/allPaintItemsWood" element={<AllPaintItemsWood />} />
                    <Route path="/searchResults" element={<SearchResults />} />
                    <Route path="/quotationGeneration" element={<Quotation />} />
                    <Route path="/contactus" element={<ContactUs />} />
                    <Route
                        path="/userProfile"
                        element={isAuthenticated ? <UserProfile /> : <Navigate to="/login" />}
                    />
                    <Route
                        path="/admin-product"
                        element={isAuthenticated ? <Admin /> : <Navigate to="/login" />}
                    />
                    <Route
                        path="/admin-chat"
                        element={isAuthenticated ? <AdminChat /> : <Navigate to="/login" />}
                    />
                    <Route
                        path="/admin-orders"
                        element={isAuthenticated ? <AdminOrders /> : <Navigate to="/login" />}
                    />
                    <Route
                        path="/admin-rates"
                        element={isAuthenticated ? <AdminRates /> : <Navigate to="/login" />}
                    />
                    <Route
                        path="/admin-users"
                        element={isAuthenticated ? <AdminUsers /> : <Navigate to="/login" />}
                    />
                    <Route
                        path="/admin-projects"
                        element={isAuthenticated ? <AdminProjects /> : <Navigate to="/login" />}
                    />
                    <Route
                        path="/cart"
                        element={isAuthenticated ? <Cart /> : <Navigate to="/login" />}
                    />
                    <Route
                        path="/payment"
                        element={isAuthenticated ? <Payment /> : <Navigate to="/login" />}
                    />
                    <Route
                        path="/homeVisualizer"
                        element={isAuthenticated ? <HomeVisualizer /> : <Navigate to="/login" />}
                    />
                    <Route
                        path="/checkout"
                        element={isAuthenticated ? <Checkout /> : <Navigate to="/login" />}
                    />
                    <Route
                        path="/myOrders"
                        element={isAuthenticated ? <Orders /> : <Navigate to="/login" />}
                    />
                    <Route path="/login" element={<Login onLoginSuccess={updateAuthentication} />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/test" element={<Test2 />} />
                    {/*<Route path="/homeVisualizer" element={<HomeVisualizer />} />*/}
                </Routes>
            </Router>
            <Toaster richColors />
        </>
    );
}

export default App;




