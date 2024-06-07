import React from "react";
import QuotationCardWall from "../components/QuotationCardWall";
import MyNavBar from "../components/NavBar";
import MyFooter from "../components/Footer";
import "../css/QuotationPage.css";

function Quotation(props) {
  return (
    <div className="quotationBackground">
      <MyNavBar />
      <QuotationCardWall />
      <MyFooter />
    </div>
  );
}

export default Quotation;
