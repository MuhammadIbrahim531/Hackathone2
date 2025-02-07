"use client"
import { IoMenu } from "react-icons/io5";
import { Button } from "@/components/ui/button"
import {
  Sheet, 
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link";
import { NavigationMenuDemo } from "./Navigation-Menu";

const SHEET_SIDES = [ "left"] as const

type SheetSide = (typeof SHEET_SIDES)[number]

export function SheetSide() {
  return (
    <div className="grid  gap-2">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <Button className="md:hidden">
                <IoMenu/>
            </Button>
          </SheetTrigger>
          <SheetContent side={side}>
            <SheetHeader>
                <SheetTitle>SHOP.CO</SheetTitle>

            </SheetHeader>
                 {/* navbar */}
                 <ul className="">
                <li className="grid grid-cols-1 gap-y-4 text-sm">
                      <Link href={""}> <NavigationMenuDemo /></Link>
                      <Link className="ml-3" href={""}>On Sale</Link>
                      <Link className="ml-3" href={""}>New Arrivals</Link>
                      <Link className="ml-3" href={""}>Brands</Link>
                </li>
            </ul>       
          </SheetContent>
        </Sheet>
      ))}
    </div>
  )
}
