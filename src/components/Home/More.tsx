import React from 'react'
import Gift from '../utils/images/gift.png'
import Pharmacy from '../utils/images/pharmacy.png'
import Furniture from '../utils/images/furniture.png'
import Airpod from '../utils/images/furni.png'
import Phone from '../utils/images/present.png'
import Last from '../utils/images/last.png'
import { FaArrowRight } from 'react-icons/fa'

function More() {
  return (
    <section>
    <div className='bg-[#F1F1F1]'>

        <section className='px-5 lg:px-24 py-10'>

            <div className='flex justify-center text-center'>
                <div className='w-[80%]'>
                <p className='font-montage'>See More</p>
                    <p className='mt-4'>From trendy fashion boutiques and home décor outlets to gourmet food markets and wellness centers, our store categories cover everything you could desire.</p>
                </div>
            </div>

            <section className='flex-wrap lg:flex-nowrap flex gap-5 mt-10'>
            <section className='relative'>
            <div>
                <img src={Gift} alt='hh' />
            </div>

            <section className='px-5 text-white absolute top-5'>
                <div>
                    <p>JAT GIFT SHOP</p> 
                    <p className='mt-3'>Whether it's a special occasion or just because, our Gift Shop has something for everyone.</p>
                 <p className='mt-3'><a href='learn'  className='mt-10 underline' >LEARN MORE</a></p>  
                </div>
            </section>
            </section>



            <section className='relative'>
            <div>
                <img src={Pharmacy} alt='hh' />
            </div>

            <section className='px-5 text-white absolute top-5'>
                <div>
                    <p>JAT PHARMACY</p> 
                    <p className='mt-3'>At JAT Mall's Pharmacy, your health and well-being come first.</p>
                 <p className='mt-3'><a href='learn'  className='mt-10 underline' >LEARN MORE</a></p>  
                </div>
            </section>
            </section>



            <section className='relative'>
            <div>
                <img src={Furniture} alt='hh' />
            </div>

            <section className='px-5 text-white absolute top-5'>
                <div>
                    <p>JAT FURNITURE & INTERIOR</p> 
                    <p className='mt-3'>Transform your space with JAT Mall's premium Furniture & Interior services.</p>
                 <p className='mt-3'><a href='learn'  className='mt-10 underline' >LEARN MORE</a></p>  
                </div>
            </section>
            </section>


            </section>
            <div className='flex justify-center text-white mt-10'>
              <button className='px-16 py-5 bg-[#000000] uppercase text-base'>CONTACT US NOW</button>
            </div>
        </section>
      
    </div>



    <div>

        <section className='px-5 lg:px-24 py-10'>
        <div className='text-center lg:text-start '>
                <p className='font-montage'>Premium Deals</p>                 
            </div>

            <section className='flex flex-wrap lg:flex-nowrap justify-between gap-5 mt-10'>

                <div className='bg-[#F2F4F5] py-5 px-3 lg:px-10 flex justify-between items-center rounded-md' >

                    <div className='w-[100%]'>
                        <p className='px-3 py-2 bg-[#2DA5F3] text-white w-[50%] text-sm'>INTRODUCING</p>
                        <p className='text-3xl font-semibold mt-2'>Transform 
                        Your Space!</p>
                        <p className='text-sm mt-2 text-[#475156]'>Discover Stylish Interiors and Unbeatable Designs at JAT Mall!</p>
                        <button className='uppercase bg-[#F15A25] border py-2 px-5 text-white mt-5 flex gap-2 text-sm'>Shop Now <FaArrowRight  className='text-lg mt-[1px]' /> </button>
                    </div>

                    <div>
                        <img src={Airpod} alt="" />
                    </div>
                </div>


                
                <div className='bg-[#191C1F] text-white py-5 lg:py-0 pt-5 px-3 lg:px-10 flex justify-between items-center rounded-md' >

                    <div className='w-[100%]'>
                        <p className='px-3 py-2 bg-[#EFD33D] text-[#191C1F] w-[85%] lg:w-[60%] text-sm'>INTRODUCING NEW</p>
                        <p className='text-3xl font-semibold mt-2'>Find the Perfect Gifts, Spread the Joy!</p>
                        <p className='text-sm mt-2 text-[#ADB7BC]'>Discover Unique Treasures at JAT Mall Gift Shop!</p>
                        <button className='uppercase bg-[#F15A25] py-2 px-5 text-white mt-5 flex gap-2 text-sm'>Shop Now <FaArrowRight  className='text-lg mt-[1px]' /> </button>
                    </div>

                    <div className='flex flex-col items-end justify-end'>
                        <img src={Phone} alt="" />
                    </div>
                </div>






            </section>


        </section>


    </div>

    <section className='relative'>
        <div className='py-10'>
            <img src={Last} alt="" className='w-full h-[60vh] lg:h-full object-cover'/>
        </div>

        <div className='px-5 lg:px-24 absolute lg:left-[15%] lg:right-[15%] top-1/4 lg:top-[20%] text-white flex justify-center text-center'>

            <div>
                <p className='text-5xl font-montage pb-2'>Shop, Dine, Relax!</p>
                <p>**Your Ultimate Shopping Experience Awaits—Discover Endless Possibilities and Unmatched Variety at JAT Mall!**</p>
                <button className='px-5 py-3 mt-2 border'>GET STARTED</button>
            </div>

        </div>
    </section>


   
    </section>
  )
}

export default More
