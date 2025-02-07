import Link from "next/link";
import React from "react";
import { FiSearch } from "react-icons/fi";
import { LuShoppingCart } from "react-icons/lu";
import { VscAccount } from "react-icons/vsc";
import { IoMenu } from "react-icons/io5";
import { SheetSide } from "./sheet";
import { NavigationMenuDemo } from "./Navigation-Menu";

export default function Header() {
  return (
    <header className="flex justify-between items-center  h-[60px]  w-full max-w-screen-2xl mx-auto">
   
        {/* left */}
        <div className="flex justify-center items-center">
            <SheetSide /> 
            <h1 className="text-xl sm:text-3xl font-bold pl-2">SHOP.CO</h1>
            </div>
            {/* navbar */}
            <ul className="hidden md:block">
                <li className="space-x-5 flex justify-center items-center text-sm">
                      <Link href={""}><NavigationMenuDemo /></Link>
                      <Link href={""}>On Sale</Link>
                      <Link href={"/Products"}>New Arrivals</Link>
                      <Link href={""}>Brands</Link>
                </li>
            </ul>
            {/* search input */}
            <div className="hidden md:block">
            <div className="flex justify-start items-center w-[330px] h-[40px] rounded-[62px] bg-[#F0F0F0] ">
                  <FiSearch className="text-xl ml-2 text-gray-400 "/>
                  <input placeholder="Search for products..." className="w-full h-full ml-2 outline-none rounded-[62px] bg-[#F0F0F0] hidden md:block"></input>
                </div>
               
                </div>    
            
            
           
              
            {/* cart */}
            <div className="flex justify-center items-center mr-7 space-x-4">
              <FiSearch className="text-xl ml-2 "/>

              <Link href={"/Cart"}>
              <LuShoppingCart className="text-2xl"/>
              </Link>
              <VscAccount className="text-2xl" />
            </div>
    </header>
    
  
  );
}
