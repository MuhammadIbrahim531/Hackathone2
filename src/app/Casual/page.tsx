import { AccordionDemo } from "../Components/Accordion";
import { CheckboxDemo } from "../Components/Checkbox";
import { Dressstyle } from "../Components/Dressstyle";
import Casual_Shirts from "../Components/Shirts";
import Size from "../Components/Size";
import { SliderDemo } from "../Components/Slider";

export default function Casual(){
    return(
        <main className="flex flex-col sm:flex-row justify-center items-center space-x-6 ">
        {/* left */}
       <div className="w-full h-full md:w-[295px] md:h-[1200px] border rounded-[16px] ">
            <AccordionDemo/>
            <SliderDemo/>
            <CheckboxDemo/>
            <Size/>
            <Dressstyle/>
            
       </div>
       {/* right */}
       <div className="w-full md:w-[900px] h-full sm:h-[1200px] ">
        <Casual_Shirts/>
       
       </div>
    </main>
    )
}
  

