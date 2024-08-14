import React from 'react'
import Hotel from '../utils/images/hotel.png'
import Cinema from '../utils/images/cinema.png'
import xbox from '../utils/images/baby.png'
import Groccery from '../utils/images/grocerry.png'
import Gamer from '../utils/images/gamer.png'
import Vector from '../utils/images/Vector.png'
import { FaArrowRight } from 'react-icons/fa'

function Shop() {
  return (
    <div className='px-5 md:px-24 py-10'>

        <section className='flex flex-wrap md:flex-nowrap justify-between gap-10'>
            <section className='relative'>
            <div>
                <img src={Hotel} alt='hh' />
            </div>

            <section className='px-10 text-white absolute top-5'>
                <div className='w-9/12'>
                    <p>JAT HOTEL</p> 
                    <p className='mt-3'>Welcome to the Hotel at JAT Mall, where luxury meets convenience.</p>
                 <p className='mt-3'><a href='learn'  className='mt-10 underline' >LEARN MORE</a></p>  
                </div>
            </section>
            </section>

            <section className='relative'>
            <div>
                <img src={Cinema} alt='hh' />
            </div>

            <section className='px-10 text-white absolute top-5'>
                <div className='w-9/12'>
                    <p>JAT CINEMA</p> 
                    <p className='mt-3'>Experience the magic of movies like never before at JAT Mall Cinema!</p>
                 <p className='mt-3'><a href='learn'  className='mt-10 underline' >LEARN MORE</a></p>  
                </div>
            </section>
            </section>
        </section>



        <section className='flex flex-wrap md:flex-nowrap justify-between py-5 gap-10'>


            <section className='bg-[#EDEAE4] flex flex-wrap md:flex-nowrap justify-between py-10 md:py-0 px-10 rounded-lg'>
                <div className='md:w-[70%] flex flex-col justify-center items-start text-left '>
                    <p className='text-sm text-[#2484C2] '>THE BEST PLACE TO PLAY</p>
                    <p className='text-xl lg:text-3xl uppercase font-bold'>Experience the Best of Shopping at JAT Mall!</p>
                    <p className='text-[#475156] mt-5'>Discover Unbeatable Deals, Top Brands, and Exclusive Offers. Shop Now and Elevate Your Lifestyle!</p>
                    <button className='uppercase bg-[#F15A25] border py-3 px-5 text-white mt-5 flex gap-2'>Shop Now <FaArrowRight  className='text-xl mt-[2px]' /> </button>
                </div>

                <section className='flex flex-col-reverse  justify-end items-end mt-[70px]'>
                <div>
                    <img src={xbox} alt='product' />
                </div>
                <div className='absolute mt-3'>
                    <p  className=' w-[80px] h-[80px] bg-[#2DA5F3] text-white rounded-full text-center border-white border-4 flex items-center justify-center'>15% Off</p>
                </div>
                </section>
            </section>


<section className='flex flex-col justify-start gap-5 items-center'>

            <section className='bg-[#191C1F] text-white flex justify-between items-end pl-5 pt-4 rounded-lg relative'>
                <div className='pb-5 w-[100%]'>
                    <p className='text-[#EBC80C] font-thin text-sm'>Summer Sales</p>
                    <p className='text-lg mt-2'>Fresh Groceries, Great Prices!</p>
                    <button className='uppercase bg-[#F15A25] py-3 px-2 rounded-sm text-white mt-5 flex gap-2 text-sm'>Shop Now <FaArrowRight  className=' mt-[2px]' /> </button>
                </div>

                <div className='flex flex-col relative items-end justify-between gap-3 text-[#141414]'>
                    <div className='bg-[#EFD33D] text-xs font-bold px-4 py-2 mr-2'>100% FRESH</div>
                    <div>
                    <img src={Groccery} alt='jyg' className='rounded-br-md w-[400px]' />
                    </div>
                </div>

            </section>



            <section className='bg-[#F2F4F5] text-[#191C1F] flex justify-between pr-5  -z-10 rounded-md'>
            <div className='relative'>
                    <div></div>
                    <div>
                        <img src={Vector} alt="fag" className='absolute -z-10 w-[165px] rounded-bl-md' />
                    <img src={Gamer} alt='jyg' className='z-50 w-[500px]'/>
                    </div>
                </div>

                <div className='mt-5 w-[100%]'>
                    <p className='text-lg font-bold'>Fun & Games Await!</p>
                    <p className='text-[#2DA5F3]'>₦299 USD</p>
                    <button className='uppercase bg-[#F15A25] border py-3 px-2 text-white mt-5 flex gap-2 text-xs'>Shop Now <FaArrowRight  className=' mt-[2px]' /> </button>
                </div>  

            </section>


            </section>


        </section>
      
    </div>
  )
}

export default Shop
