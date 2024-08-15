import React from 'react'
import Logo from '../utils/images/jatmall.png';
import { FaBars, FaSearch } from 'react-icons/fa';



function MobileNav() {
  return (
    <div className='lg:hidden'>

        <section className='px-5 py-3'>
            <nav className='flex justify-between'>
                <div>
                    <FaBars className='text-2xl mt-2' />
                </div>

                <div >
                    <img src={Logo} alt='logo' className='w-[60%]' />
                </div>

                <div>
                    <FaSearch  className='text-2xl mt-2' />
                </div>


            </nav>

        </section>
      
    </div>
  )
}

export default MobileNav
