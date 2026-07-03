"use client";
import HeroSlider from "@/components/HeroSlider";
import KeyApplications from "@/components/KeyApplications";

import Navbar from "@/components/Navbar";
import SliderSwiper from "@/components/SliderSwiper";
import { useRouter } from "next/navigation";
import ResearchFeatures from "../components/ResearchFeatures";


  
export default function Home() {
  
  let router = useRouter();
  return (
<>
<div className=""> 
 {/* Header */}
  <Navbar></Navbar>
  <HeroSlider></HeroSlider>
      <div className="text-center max-w-4xl mx-auto px-4 space-y-4 z-10 mt-8 mb-3">
       
        
        <h1 className="text-xl lg:text-4xl font-bold font-serif text-black dark:text-white ">
         
          <span className="italic text-[#d1a34c]">Ummah Scholars Tribune</span>{" "}
          
        
        </h1>
       
      </div>
<div className="flex flex-col-reverse lg:flex-row items-center justify-center max-w-[1300px] mx-auto px-2 py-2 md:py-4">
  <KeyApplications></KeyApplications>
  <SliderSwiper></SliderSwiper>
</div>

<ResearchFeatures></ResearchFeatures>
</div>

{/* 2nd component  */}
<div>

  
</div>
</>
  );
}

