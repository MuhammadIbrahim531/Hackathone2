import React from "react";
import Image from "next/image";
export default function Hero() {
  return (
    <main className=" w-full flex flex-col md:flex-row justify-between items-start bg-[#F2F0F1] h-full md:h-[574px] max-w-screen-2xl mx-auto">
        {/* left */}
        <div className="w-full md:w-[500px] mt :3 md:mt-10 md:mt-20 md:ml-10 pl-3" >
            <h1 className="text-2xl md:text-5xl font-extrabold md:pt-[10px] md:ml-10">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
            <p className="text-sm  md:mt-3 md:ml-10">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
            <button className="bg-black py-2 px-8 rounded-[62px] md:mt-4 text-sm text-white md:ml-10 ">
            Shop Now</button></div>

            <div className="md:hidden flex justify-center items-centre  font-bold text-2xl ">
              <div className=" ml-10">200+ </div>
              <div className="ml-20">2000+</div>
            </div>
            <div className="md:hidden flex justify-center items-centre text-xs">
              <div className="ml-10">International Brands</div>
              <div className="ml-8">High-Quality Products</div>
            </div>
            <div className=" md:hidden ml-[110px] mt-1">
              <div className="font-bold text-2xl">30,000+</div>
              <div className="text-xs"> Happy Customers</div>
            </div>

        {/* right */}
        <div className="relative">
          <Image src={"/pic1.png"} className="w-[500px] mr-8  " width={200} height={200} alt="pic"></Image>
          <Image src={"/pic2.png"} className="md:w-[100px] w-[60px] absolute top-[10px] right-[30px] md:top-[50px] md:right-[30px]" width={200} height={200} alt="big star"></Image>
          <Image src={"/pic3.png"} className="md:w-[100px] w-[50px] absolute top-[100px] left-10 md:top-[300px] md:left-[-100px]" width={200} height={200} alt="small star"></Image>
     
      </div>
    </main>   
    
   
  );
}
