"use client"


import { IoMdStar } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Check, Images, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import Products from "../page";
import AllReview from "@/app/Components/Reviews";
import  Shirts from "@/app/Components/T-shirts";
import { BreadcrumbDemo } from "@/app/Components/Breadcrumb";

// Adding key prop in star array
let star = [
  <IoMdStar key={1} />,
  <IoMdStar key={2} />,
  <IoMdStar key={3} />,
  <IoMdStar key={4} />,
  <IoMdStar key={5} />,
];



interface Iproducts{
    title:string,
    price:string,
    id:number
    rating?:string,
    old_price?:string
    img_url:string
    img1:string,
    img2:string,
    img3:string,
    img4:String,
    
}




let product:Iproducts[] = [
       {
        title:"T-SHIRT WITH TAPE DETAILS",
        id:1,
        price:"$120",
        img_url:"/product1.png",
        img1:"/detail1.png",
        img2:"/detail2.png",
        img3:"/detail4.png",
        img4:"/detail3.png",
       },
       {

        title:"SKINNY FIT JEANS",
        id:2,
        price:"$240",
        img_url:"/product2.png",
        old_price:"$260",
        img1:"/detail1.png",
        img2:"/detail2.png",
        img3:"/detail4.png",
        img4:"/detail3.png",

       },
       {
        title:"CHECKERED SHIRT",
        id:3,
        price:"$180",
        img_url:"/product3.png",
        img1:"/detail1.png",
        img2:"/detail2.png",
        img3:"/detail4.png",
        img4:"/detail3.png",
       },
       {
           title: "SLEEVE STRIPED T-SHIRT",
           id: 4,
           price: "$130",
           img_url: "/product4.png",
           old_price: "$160",
           img1: "/detail1.png",
           img2: "/detail2.png",
           img3: "/detail4.png",
           img4: "/detail3.png",
       },
       {
        title:"VERTICAL STRIPED SHIRT",
        id:5,
        price:"$212",
        img_url:"/product5.png",
        old_price: "$160",
        img1: "/detail1.png",
        img2: "/detail2.png",
        img3: "/detail4.png",
        img4: "/detail3.png",
    },
    {
      title:"COURAGE GRAPHIC T-SHIRT",
      id:6,
      price:"$145",
      img_url:"/product6.png",
      old_price: "$160",
      img1: "/detail1.png",
      img2: "/detail2.png",
      img3: "/detail4.png",
      img4: "/detail3.png",
  },
  {
    title:"LOOSE FIT BERMUDA SHORTS",
    id:7,
    price:"$180",
    img_url:"/product7.png",
    old_price: "$160",
    img1: "/detail1.png",
    img2: "/detail2.png",
    img3: "/detail4.png",
    img4: "/detail3.png",
},
{
  title:"FADED SKINNY JEANS",
  id:8,
  price:"$210",
  img_url:"/product8.png",
  old_price: "$160",
  img1: "/detail1.png",
  img2: "/detail2.png",
  img3: "/detail4.png",
  img4: "/detail3.png",
}

   ]



   export default function Pro_Detail(){
    const params = useParams();
    const id = params.id //dynamic id ye se milengii
    const item = product.find((item)=> item.id === Number(id))
    if(!item){
        return <h1>Product not found</h1>
    }
   
    return(
        <>
        <BreadcrumbDemo/>
        <div className="flex flex-col md:flex-row justify-center sm:justify-evenly sm:mt-10 p-5 sm:p-0  max-w-screen-2xl mx-auto">
        {/* left */}
          <div className=" flex sm:flex-col  justify-between items-center w-full sm:w-[152px] order-2 sm:order-1">
            {/* images */}
            <Image src={item.img1} className=" w-[100px] sm:w-full h-[100px] sm:h-[150px] rounded-[15px]" alt="productdetaile" width={100} height={100}></Image>
            <Image src={item.img2} className=" w-[100px] sm:w-full h-[100px] sm:h-[150px] sm:mt-3 rounded-[15px]" alt="productdetaile" width={100} height={100}></Image>
            <Image src={item.img3} className=" w-[100px] sm:w-full h-[100px] sm:h-[150px] sm:mt-3 rounded-[15px]" alt="productdetaile" width={100} height={100}></Image>
          </div>
           {/* mid div */}
           <div className="w-full sm:w-[444px] h-[260px] sm:h-[500px] mt-5 sm:mt-0 order-1 sm:order-2">
           <Image src={item.img_url} alt="productdetaile" className="w-full h-[95%] rounded-[15px]" width={100} height={100}></Image>
           </div>
           {/* right div */}
           <div className=" w-full sm:w-[600px] h-[500px] mt-3 order-3">
               <h1 className="text-2xl md:text-3xl font-bold">One Life Graphic T-shirt</h1>
               <div className="flex text-yellow-400">
                                 {/* Map stars correctly */}
                                 {star.map((icon, index) => (
                                   <span key={index}>{icon}</span>
                                   ))}
                                </div>
               <p className="font-bold mt-1">{item.price} <span className="text-gray-400 line-through">{item.old_price}</span> </p>
               <p className="text-gray-400 text-sm">This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.</p>
               {/* select color */}
               <div className=" mt-5">
                <p className="text-gray-500">Select Colors</p>
                <div className="flex space-x-3 mt-2">
                <div className="w-[37px] h-[37px] bg-[#4F4631] rounded-full  flex justify-center items-center"><Check className="text-white opacity-0  hover:opacity-100 cursor-pointer"/></div>
                  <div className="w-[37px] h-[37px] bg-[#314F4A] rounded-full flex justify-center items-center"><Check className="text-white opacity-0  hover:opacity-100 cursor-pointer"/></div>
                  <div className="w-[37px] h-[37px] bg-[#31344F] rounded-full flex justify-center items-center"><Check className="text-white opacity-0  hover:opacity-100 cursor-pointer"/></div>
                </div>
               </div>
               {/* Choose Size */}
               <div className="mt-4">
                <p className="text-gray-500">Choose Size</p>
                <div className="flex space-x-3 mt-2">  
                <div className="w-[80px]   h-[40px] flex justify-center items-center rounded-[62px] bg-[#F0F0F0] text-gray-400 ">Small</div>
                  <div className="w-[90px] h-[40px] flex justify-center items-center rounded-[62px] bg-[#F0F0F0] text-gray-400 ">Medium</div>
                  <div className="w-[80px] h-[40px] flex justify-center items-center rounded-[62px] bg-[#F0F0F0] text-gray-400 ">Large</div>
                  <div className="w-[90px] h-[40px] flex justify-center items-center rounded-[62px] bg-[#F0F0F0] text-gray-400 ">X-Large</div>
                </div>
               </div>
                {/* BTNS */}
               <div className="flex justify-start items-center mt-7 space-x-4">
               <div className="w-[100px] h-[40px] flex justify-between p-3 items-center rounded-[62px] bg-[#F0F0F0] text-gray-400 ">
                <Minus/>
                1
                <Plus/>
               </div>
               <Button className="bg-black text-white w-[300px] rounded-[62px]">Add to Cart</Button>
           </div>
           </div>
           
    </div>
    <AllReview/>
    <Shirts/>
    </>
     
)
}