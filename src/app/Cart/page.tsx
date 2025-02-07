import { Button } from "@/components/ui/button"
import { Delete, Minus, Plus } from "lucide-react"
import Image from "next/image"
import { it } from "node:test"
import { BreadcrumbDemo } from "../Components/Breadcrumb"

interface Icart {
    imageurl:string,
    title:string,
    id:number
    size:string,
    color:string,
    price:string,
}
const cartItem:Icart[] = [
    {
     imageurl:"/shirt2.png",
    title:"Gradient Graphic T-shirt",
    id:1,
    size:"large",
    color:"white",
    price:"$145",
    },
    {
     imageurl:"/product3.png",
    title:"CHECKERED SHIRT",
    id:2,
    size:"Medium",
    color:"Red",
    price:"$180",
    },
    {
     imageurl:"/product2.png",
    title:"SKINNY FIT JEANS",
    id:3,
    size:"large",
    color:"/Blue",
    price:"$240",
    }
]

export default function Cart(){
    return(
        <>
           <div className="pl-5">
            <BreadcrumbDemo/>
           <h1 className="text-2xl md:text-4xl font-bold mt-2 max-w-screen-2xl mx-auto">Your Cart</h1>
           </div>
        <div className="flex flex-col md:flex-row justify-center items-start gap-3 mt-6">
            
              {/* left div */}
                 <div className="w-full h-full md:w-[700px] md:h-[600px] border rounded-[20px]">
                       {
                        cartItem.map((item)=>{
                            return(
                                <div className="flex justify-between  mt-4 p-4 border-b" key={item.id}>
                                   <div className="flex gap-3">
                                   <Image src={item.imageurl} alt={item.title} className="rounded-[16px]" width={100} height={100}></Image>
                                      <div>    
                                          <h3 className="font-bold">{item.title}</h3>
                                          <p className="text-sm text-gray-400">Size:{item.size}</p>
                                          <p className="text-sm text-gray-400">Color:{item.color}</p>
                                          <p className="font-bold">{item.price}</p>
                                      </div>
                                   </div>
                                              {/* right side */}
                                             <div className="flex flex-col justify-between items-center space-y-5">
                                             <Delete/>
                                              <div className=" w-[100px] h-[40px]  md:w-[100px] md:h-[40px] flex justify-between p-3 items-center rounded-[62px] bg-[#F0F0F0] text-black">
                                                   <Minus/>
                                                   1
                                                   <Plus/>
                                               </div>
                                             </div>
                                </div>
                            )
                        })
                       }
                 </div>
              {/* right div */}
              <div className="w-full md:w-[400px] h-full md:h-[450px] border rounded-[20px]  flex flex-col justify-start items-center p-4">
                   <div className="w-[90%] space-y-2">
                   <h1 className="text-xl font-bold">Order Summary</h1>
                    <p className="flex justify-between text-gray-400">Subtotal <span className="text-black">$500</span> </p>
                    <p className="flex justify-between text-gray-400">Subtotal <span className="text-red">$100</span> </p>
                    <p className="flex justify-between text-gray-400">Subtotal <span className="text-black">$100</span> </p>
                    <p className="flex justify-between font-bold">Total <span className="text-black font-bold">$700</span> </p>
                   <div className="flex ">
                   <input className="bg-[#F0F0F0] w-[200px] md:w-full py-2 px-5 rounded-[16px] text-gray-600 outline-none" placeholder="Add promo code" />
                   <Button className="ml-1 bg-black text-white rounded-[16px]">Apply</Button>
                   </div>
                    <Button className="w-full bg-black text-white rounded-[16px] ">Go To Checkout</Button>
                    
                   </div>
              </div>
        </div>
        </>
    )
}