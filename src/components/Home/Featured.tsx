import React, { useState, useCallback, useEffect } from 'react'
import jatFashoin from '../utils/images/fashion.png'
import jatFood from '../utils/images/foods.png'
import fast from '../utils/images/Package.png'
import { FaWallet } from "react-icons/fa";
import { FaHeadphones } from "react-icons/fa6";
import { BiTrophy } from 'react-icons/bi';
import shop from '../utils/images/shop.png'
import Super from '../utils/images/supermart.png'
import Shop from './Shop';
import Spa from '../utils/images/spa.png'
import { motion } from 'framer-motion';

interface FeaturedItem {
    img: string,
    title: string,
    description: string
}

const featuredItems: FeaturedItem[] = [
    {
      img: jatFashoin,
      title: 'JAT FASHION',
      description: "At JAT Mall, fashion is more than just clothing—it's a statement."
    },
    {
      img: jatFood,
      title: 'JAT FOOD & DINING',
      description: "Indulge in a culinary journey like no other at JAT Mall's Food & Dining."
    },
    {
      img: Spa,
      title: 'JAT SALOON & SPA',
      description: "Experience ultimate relaxation at JAT Mall's Saloon & SPA."
    },

    {
      img: Super,
      title: 'JAT GROCERY SUPERMART',
      description: "Your one-stop shop for all things grocery at JAT Mall."
    },
]

function Featured() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const handleResize = useCallback(() => {
    setIsMobile(window.innerWidth < 768); // Adjust the breakpoint as needed
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);
  return (
    <div>

      <section  className='bg-[#F1F1F1]'>

        <section className='px-5 lg:px-24 py-10'>
            <div className='flex justify-center text-center flex-col'>
            <h1 className='font-montage text-3xl'>Our Featured Stores & Categories</h1>
            <p className='mt-5 text-[#5E5E5E]'>JAT Mall brings you a curated selection of stores, each catering to your unique needs and lifestyle.</p>
            </div>


            <section className="flex justify-center mt-10">
      <div className="flex flex-wrap md:flex-nowrap justify-between gap-3">
        {featuredItems.map((feat, index) => {
          const shouldAnimate = !isMobile; // Disable animation on mobile
          
          return (
            <motion.div
              key={index}
              className={`relative overflow-hidden ${isMobile ? 'w-full' : 'w-full md:w-1/3 lg:w-1/4'}`}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              animate={shouldAnimate ? {
                width: hoveredIndex === index ? 400 : 250,
              } : undefined}
              transition={shouldAnimate ? {
                duration: 0.3,
              } : undefined}
            >
              <div>
                <motion.img
                  src={feat.img}
                  alt="img"
                  className="h-[100vh] rounded-lg w-full object-cover"
                />
              </div>

              <motion.div
                className="absolute bottom-5 text-white px-5"
                initial={{ opacity: 1 }}
                animate={shouldAnimate ? {
                  opacity: hoveredIndex === index ? [0, 0.3, 1] : [0, 1, 1],
                } : undefined}
                transition={shouldAnimate ? {
                  duration: 1,
                  ease: "easeInOut",
                } : undefined}
              >
                <p className="text-2xl pb-4">{feat.title}</p>
                <p>{feat.description}</p>
                <p className="mt-2">
                  <a href="learn" className='underline'>LEARN MORE</a>
                </p>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>

            <div className='flex justify-center text-white mt-10'>
              <button className='px-16 py-5 bg-[#000000] uppercase'>See more Options</button>
            </div>
        </section>
        </section>




        <section className='py-10 flex justify-center px-5 md:px-24'>

          <section className='flex flex-wrap md:flex-nowrap justify-between border py-3 rounded-md w-[100%] px-3'>

          <div className='flex justify-between gap-1 md:gap-3 pr-2 py-4'>
          <img src={fast} alt='jhsdiu' className='w-[10%] lg:w-[20%] '  />
            

            <div>
            <p className='text-sm lg:text-lg'>Fasted Delivery</p>
            <p className='font-thin text-[#5F6C72]'>Delivery in 24/H</p>
            </div>

          </div>

          <div className='flex justify-between border-l-[1px] gap-3 pl-2 md:pl-0 md:px-5 py-4'>
          <div>
              <BiTrophy className='lg:text-4xl mt-2' />
            </div>
          
            

            <div>
            <p className='text-sm lg:text-lg'>24 Hours Return</p>
            <p className='font-thin text-[#5F6C72] text-sm'>100% money-back guarantee</p>
            </div>

          </div>

          <div className='flex justify-between lg:border-l-[1px] gap-3 px-5 py-4'>
          <div>
              <FaWallet className='lg:text-4xl mt-2' />
            </div>
            

            <div>
            <p>Secure Payment</p>
            <p className='font-thin text-[#5F6C72]'>Your money is safe</p>
            </div>

          </div>

          <div className='flex justify-between border-l-[1px]  gap-3 px-5 py-4'>
          <div>
              <FaHeadphones className='lg:text-4xl mt-2' />
            </div>
            

            <div>
            <p>Support 24/7</p>
            <p className='font-thin text-[#5F6C72] text-sm'>Live contact/message</p>
            </div>

          </div>
          </section>


        </section>


        <section className='py-10 text-[#FFFFFF]'>
          <section className='relative'>
          <div>
            <img src={shop} alt='shop' />
          </div>


          <section className='px-24 absolute top-1/3'>
            <section className='flex justify-center'>

          <div>
            <p className='font-montage text-4xl'>You Shop, We Deliver</p>
            <p className='text-sm w-3/4 mt-3 leading-6'>Whether you’re looking for the latest in fashion, top-notch interior designs, daily groceries, or a relaxing spa day, JAT Mall has it all under one roof. Explore, shop, and indulge in the variety we offer.</p>
          </div>


          <div className='w-[20%]'>
            <button className='border w-full py-3 px-5'>Discover me</button>
          </div>
            </section>


          </section>
          </section>

        </section>


        <Shop />
    </div>
  )
}

export default Featured
