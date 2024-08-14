import React from 'react'
import Hero from '../utils/images/home.png'
import Featured from './Featured'
import More from './More'

function Home() {
  return (

    <section>
    <div className='relative'>
      <div className='relative'>
        <img src={Hero} alt='hero' className='w-full h-auto' />
        <div className='absolute top-1/2 left-[38%] transform -translate-x-1/2 -translate-y-1/2 text-left text-white'>
          <p className='font-montage text-6xl mb-4 w-[70%] leading-[70px]'>Discover Endless Shopping Delights!</p>
          <p className='pb-5'>Step into a world of endless shopping delights where every visit is an adventure. From the latest fashion trends to delectable dining options and exciting entertainment, our mall offers something for everyone.</p>
          <div className='border-t-[1px] pt-5'>
            <button className='border px-5 py-3'>Learn More</button>
          </div>
        </div>

      </div>
    </div>



    <Featured />
    <More />
    </section>
  )
}

export default Home

