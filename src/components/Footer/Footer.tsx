import React from 'react'
import Jat from '../utils/images/jatmall.png'
import { BiLogoFacebookCircle, BiLogoTwitter, BiLogoInstagram } from "react-icons/bi";
import { BsYoutube } from "react-icons/bs";


function Footer() {

    const date = new Date()
    const currentYear = date.getFullYear()



  return (
    <div>


        <section className='pb-10'>

            <section className='flex  justify-between gap-5'>
        <p className='border-b-2 w-[60%]'></p>
       <p> <img src={Jat} alt="" className='transform translate-y-6' /></p>
        <p className='border-b-2 w-[60%]'></p>
            </section>

            <section className='px-5  lg:px-24 mt-10'>
                <section className='flex flex-wrap gap-10 lg:gap-0  lg:flex-nowrap justify-between'>
                <div>
                    <p className='pb-4 text-xl'>Follow us</p>
                    <div className='flex justify-between gap-5'>
            <p><BsYoutube className='text-xl' /></p>
            <p><BiLogoTwitter className='text-xl' /></p>
            <p><BiLogoFacebookCircle className='text-xl' /></p>
            <p><BiLogoInstagram className='text-xl' /></p>
          </div>
                </div>

                <div className='flex flex-col'>
                    <p className='pb-4'>NEWSLETTER</p>

                   <div className='flex w-[120%] md:w-[150%]'>
                 <input type="email" name="Email Address" id="" placeholder='Email Address' className='h-[50px] w-full lg:w-[250%] outline-none bg-transparent border pl-3 pr-10' />
                   <button className='w-full lg:w-[200%] border bg-[#000000] text-white uppercase'>Sign Up</button>
                   </div> 
                </div>

                <div className='transform translate-y-12'>
                    <p>26°C  Open 9:00am - 11:00pm</p>
                </div>

                </section>
             



            </section>
           
        </section>


        <section className='border-t-2 mt-10'>
        <div className='bg-[#ffffff] text-[#191C1F] font-readex '>
    <footer className='py-10 px-12 md:px-24 flex justify-between flex-wrap lg:flex-nowrap gap-10 lg:gap-0'>

    <div className='mt-10'>
    <p className='text-xl uppercase'>quick links</p>
    <ul className='flex flex-col gap-3 mt-5 text-[#5F6C72]'>
    <li>Home</li>
    <li>About</li>
    <li>Brands and Products</li>
    <li>Shop</li>
    <li>Services</li>
    <li>Contact Us</li>
    
    </ul>
    </div>

    <div className='mt-10'>
    <p className='text-xl uppercase'>more from jat mall</p>
    <ul className='flex flex-col gap-3 mt-5 text-[#5F6C72]'>
    <li>Stores</li>
    <li>Deals</li>
    <li>Dining</li>
    <li>Promotions</li>
    <li>Entertainment</li>
    <li>Events</li>
    </ul>
    </div>

    <div className='mt-10'>
    <p className='text-xl uppercase'>SUPPORT</p>
    <ul className='flex flex-col gap-3 mt-5 text-[#5F6C72]'>
    <li>Privacy Policy</li>
    <li>Terms and Condition</li>
    <li>FAQs</li>
    <li>Rules and Regulations</li>
    <li>Help</li>
    <li>Leasing</li>
    </ul>
    </div>


    <div className='mt-10'>
    <p className='text-xl uppercase'>CONTACT US</p>
    <ul className='flex flex-col gap-3 mt-5 text-[#5F6C72]'>
    <li>+234 701 234 5678</li>
    <li>+234 910 987 6543</li>
    <li>+234 701 234 5678</li>
    <li>info@companydomain.com</li>
    <li>help@companydomain.com</li>
    <li>4, Company Address, City, <br />  Abuja. Nigeria</li>
    </ul>
    </div>

    </footer>
    
    <div className='px-10 flex justify-center text-center font-space py-5 bg-[#F1F1F1]'>
    <p>
    © {currentYear} <span className='text-[#F15A25]'>JAT Mall.</span> All rights reserved.
    </p>


    </div>
    
      
    </div>
        </section>
      
    </div>
  )
}

export default Footer
