'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import React from 'react'
import HeroSlider from '../components/HeroSlider'
import FindPestControl from '../components/FindPestControl'
import SliderSwipper from '../components/SliderSwipper'


const Home = () => {
    const router = useRouter();
    const handleRouter = (routerName)=>{
        router.push(routerName)
    }
  return (
    <>
    
    <HeroSlider></HeroSlider>
    <FindPestControl></FindPestControl>
    {/* <Link href={'/about'}>About</Link> */}
    <br />
    <SliderSwipper></SliderSwipper>
    </>
  )
}

export default Home