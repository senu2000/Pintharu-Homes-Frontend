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
                <Route path={"/admin"} element={<Admin/>}/>
                <Route path={"/login"} element={<Login/>}/>
                <Route path={"/register"} element={<Register/>}/>
                <Route path={"/cart"} element={<Cart/>}/>
                <Route path={"/paymen"} element={<Payment/>}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
