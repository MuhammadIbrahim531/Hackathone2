import React from "react";
import Anounce from "./Components/Anounce";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Fonts from "./Components/Fonts";
import Products from "./Products/page";
import Top_Sell from "./Products/Sell";
import Dress from "./Components/Dress";
import CustomerCarousel from "./Components/carousel";




export default function Home() {
  return (
    <div>
     
     
      <Hero/>
      <Fonts/>
      <Products />
      <Top_Sell/>
      <Dress/>
      <CustomerCarousel/>
     
      
     
      
    </div>
    
  
  );
}
