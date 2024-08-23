import React from 'react'
import { FaPlay } from 'react-icons/fa'
import HeroImg from "../../assets/dumbell.png";
import {motion } from "framer-motion";
import { SlideRight } from '../../utility/animation';
const Hero = () => {
  return (
    <div>
   <section>
    <div className='container grid grid-cols-1 md:grid-cols-2 min-h-[650] relative'>
       <div className='flex flex-col justify-center fontsize-playfair py-14 md:py-0 '>
{/*brand info */}
<div className='flex flex-col justify-center py-14 md:py-0'>
    <motion.h1 
    variants={SlideRight(0.6)}
    initial="hidden"
    animate="visible"
   
    className='text-5xl lg:text-6xl font-bold leading-relaxed xl:leading-normal'>Gym gives you the perfect <span className='text-primary'>health</span>
    {""}</motion.h1>
    <motion.p
      variants={SlideRight(1.2)}
      initial="hidden"
      animate="visible">
        It is a long estabished fact that the reader is readable content of the page when are the best products
    </motion.p>
<motion.div   variants={SlideRight(1.2)}
    initial="hidden"
    animate="visible" className='flex justify-center items-center gap-8 md:justify-start !mt-4'>
  <button className='primary-btn flex items-center gap-2'>{" "}order now</button>
  <button className='flex justify-center items-center gap-2'>{" "}
    <FaPlay />watch now</button>
</motion.div>
</div>

    </div>
    <motion.div  variants={SlideRight(1.5)}
    initial="hidden"
    animate="visible"className='flex justify-center items-center'>
      <img src={HeroImg} alt="" className='W-[350px] md:w-[550px] 
      xl:w-[700px] drop-shadow'/>
    </motion.div>
    </div>
   

   </section>
    </div>
  )
}

export default Hero
