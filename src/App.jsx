import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import AllProjects from "./pages/AllProjects.jsx";
import AllPaintItems from "./pages/AllPaintItems.jsx";
import SearchResults from "./pages/SearchResults.jsx";
import Quotation from "./pages/Quotation.jsx";
import UserProfile from "./pages/UserProfile.jsx";
import Admin from "./pages/Admin.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Cart from "./pages/Cart.jsx";
import Payment from "./pages/Payment.jsx";
import AdminChat from "./pages/AdminChat.jsx";
import AdminOrders from "./pages/AdminOrders.jsx";
import AdminRates from "./pages/AdminRates.jsx";
import AdminUsers from "./pages/AdminUsers.jsx";
function App() {

  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path={"/home"} element={<Home/>}/>
                <Route path={"/allProjects"} element={<AllProjects/>}/>
                <Route path={"/allPaintItems"} element={<AllPaintItems/>}/>
                <Route path={"/searchResults"} element={<SearchResults/>}/>
                <Route path={"/quotationGeneration"} element={<Quotation/>}/>
                <Route path={"/userProfile"} element={<UserProfile/>}/>
                <Route path={"/admin-product"} element={<Admin/>}/>
                <Route path={"/admin-chat"} element={<AdminChat/>}/>
                <Route path={"/admin-orders"} element={<AdminOrders/>}/>
                <Route path={"/admin-rates"} element={<AdminRates/>}/>
                <Route path={"/admin-users"} element={<AdminUsers/>}/>
                <Route path={"/login"} element={<Login/>}/>
                <Route path={"/register"} element={<Register/>}/>
                <Route path={"/cart"} element={<Cart/>}/>
                <Route path={"/payment"} element={<Payment/>}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
