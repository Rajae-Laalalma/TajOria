import React from 'react';
import Hero1 from '../assets/Hero1.jfif';
import Hero2 from '../assets/Hero2.jfif';

const Hero = () => {

    
  return (
    
    <div className='w-full h-screen relative flex   justify-between  '>
      {/* Background Image (Hero1) */}
      <div className=' bg-customGray w-[760px]'>
      
      </div>
      <div className='-500 w-[860px] '>
        <img src={Hero2} className='w-full h-full opacity-30  ' />
      </div>
      
<div className=''>
<img src={Hero1} className='absolute top-1/2 left-[600px] transform -translate-x-1/2 -translate-y-1/2 w-[350px] h-[500px]' />
</div>
    <div className='absolute top-[455px] left-[350px] flex flex-col gap-4  '>
        <p className=' font-Playfair text-4xl'>Elevet your </p>
        <p className=' font-Playfair text-4xl'>style white</p>
    </div>
    </div>
  );
};

export default Hero;
