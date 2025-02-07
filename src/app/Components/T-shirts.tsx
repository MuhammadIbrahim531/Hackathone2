import { IoMdStar } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";



interface Iproducts{
    title:string,
    price:string,
    id:number
    rating?:string,
    old_price?:string
    img_url:string
}




let product:Iproducts[] = [
    {
     title:"Polo with Contrast Trims",
     id:9,
     price:"$212",
     img_url:"/shirt1.png",
     old_price:"$232"
    },
    {
        title:"Gradient Graphic T-shirt",
        id:10,
        price:"$145",
        img_url:"/shirt2.png",
        
       },
       {
        title:"Polo with Tipping Details",
        id:11,
        price:"$180",
        img_url:"/shirt3.png"
       },
       {title:"Black Striped T-shirts",
        id:12,
        price:"$210",
        img_url:"/shirt4.png",
        
   
       }
   ]
// Adding key prop in star array
let star = [
    <IoMdStar key={1} />,
    <IoMdStar key={2} />,
    <IoMdStar key={3} />,
    <IoMdStar key={4} />,
    <IoMdStar key={5} />,
  ];

    export default function Shirts(){

    return(
        <div className="w-full h-full sm:h-[500px] mt-10 md:mt-10 max-w-screen-2xl mx-auto">
            <h1 className="text-2xl md:text-4xl font-bold text-center">YOU MIGHT ALSO LIKE</h1>
            <div className="flex flex-col md:flex-row  justify-center items-center space-x-4  px-8 mt-10">
                {
                    product.map((data)=>{
                        return(
                            <div key={data.id}>
                               <Link href={`/Products/${data.id}`}>
                               <div className="w-[195px] h-[200px] md:w-[295px] md:h-[298px] bg-[#F0EEED] rounded-[20px]">
                                    <Image src={data.img_url} alt={data.title} className="w-full h-full rounded-[20px]" width={100} height={100} ></Image>
                                </div>
                                </Link>
                                
                                <div className="">  
                                <p className=" text-xs md:text-lg mt-2 font-bold">{data.title}</p>
                                <div className="flex text-yellow-400">
                                 {/* Map stars correctly */}
                                 {star.map((icon, index) => (
                                   <span key={index}>{icon}</span>
                                   ))}
                                </div>         
                                <p className="font-bold mt-1">{data.price} <span className="text-gray-400 font-bold line-through">{data.old_price}</span></p>
                                
                                </div>
                              
                            </div>

                        )
                    })
                }
            </div>
        </div>
        


    )
}
function shirts() {
    throw new Error("Function not implemented.");
}

