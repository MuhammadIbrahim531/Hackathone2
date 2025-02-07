import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Filter } from "lucide-react"

  
  export function Dressstyle() {
    return (
        <>
     <div className="p-5">
         <div className="flex justify-between items-center">
         <h1 className="font-bold">Dress Style</h1> 
         <Filter/>
         </div>

        <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-gray-400">Casual</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-gray-400">Formal</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-gray-400">Party</AccordionTrigger>
          <AccordionContent>
            Yes. It&apos;s animated by default, but you can disable it if you prefer.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-gray-400">Gym</AccordionTrigger>
          <AccordionContent>
            Yes. It&apos;s animated by default, but you can disable it if you prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
     </div>  
     <div className="flex justify-center items-start">
        <Button className="w-[90%] rounded-[16px] bg-black text-white hover:text-black"> Apply Filter</Button>
     </div>
     </>
    )
  }
  