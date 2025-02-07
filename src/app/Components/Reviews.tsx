import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { FaStar } from "react-icons/fa6";

import { IoMdStar } from "react-icons/io";

const Review = [
    {
      name: "Samantha D.",
      feedback:
      " I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt”",

      rating: 5,
      verified: true,
      date:"Posted on August 14, 2023",
    },
    {
      name: "Alex M.",
      feedback:
      "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
      rating: 5,
      verified: true,
      date:"Posted on August 15, 2023",
    },
    {
      name: "Ethan R.",
      feedback:
      "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
      rating: 5,
      verified: false,
      date:"Posted on August 16, 2023",
    },
    {
      name: "Olivia P.",
      feedback:
      "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
      rating: 5,
      verified: true,
      date:"Posted on August 17, 2023",
    },
    {
      name: "Liam K.",
      feedback:
      "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.",
      rating: 5,
      verified: true,
      date:"Posted on August 18, 2023",
    },
    {
      name: "Ava H.",
      feedback:
      "I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.",
      rating: 5,
      verified: true,
      date:"Posted on August 19, 2023",
    },
  ];
// Adding key prop in star array
let star = [
  <IoMdStar key={1} />,
  <IoMdStar key={2} />,
  <IoMdStar key={3} />,
  <IoMdStar key={4} />,
  <IoMdStar key={5} />,
];

     export default function AllReview(){
        return(
            <main className="max-w-screen-2xl mx-auto">
                {/* top div */}
                <div className="px-5 flex justify-between ">
                    <h1 className=" font-bold text-xl md:text-2xl sm:mt-1 md:mt-5" >AllReviews</h1>
                    <div className="  md:space-x-3 sm:mt-1 md:mt-5">
                    <Button variant={"outline"} className="bg-gray-400 rounded-[20px] sm:text-xs">Latest</Button>
                    <Button className="bg-black text-white rounded-[20px] sm:text-xs">Write a Review</Button>
                    </div>
                    
                </div>
                {/* container */}
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-5 mt-3 md:mt-0">
                        {
                            Review.map((data,i)=>{
                                return(
                                    <div className=" border p-5 rounded-[20px] mt-2" key={i}>
                                    <div className="flex text-yellow-400">
                                     {/* Map stars correctly */}
                                     {star.map((icon, index) => (
                                     <span key={index}>{icon}</span>
                                       ))}
                                     </div>                                                 
                                        <h2 className="font-bold text-xl mt-1 flex">{data.name} <Check className="bg-green-500  rounded-full text-white"/></h2>
                                        <p className="text-sm text-gray-400">{data.feedback}</p>
                                        <p className="mt-5 text-gray-400 text-xs">{data.date}</p>
                                    </div>
                                )

                            })
                        }
                    </div>
                </div>

            </main>
        )
     }
  

  

