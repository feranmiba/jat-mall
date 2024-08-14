import React from 'react';
import { BsYoutube } from "react-icons/bs";
import { BiLogoFacebookCircle, BiLogoTwitter, BiLogoInstagram } from "react-icons/bi";
import { NavLink } from 'react-router-dom';
import Logo from '../utils/images/jatmall.png';
import { mainNavbarItems } from '../utils/Data';

interface NavItem {
  id: number;
  name: string;
  link: string;
}

const navbarItems: NavItem[] = [
  { id: 1, name: 'STORES', link: '/store' },
  { id: 2, name: 'DEALS', link: '/deals' },
  { id: 3, name: 'DINING', link: '/dine' },
  { id: 4, name: 'PROMOTIONS', link: '/promo' }
];

const navbarLeftItems: NavItem[] = [
  { id: 1, name: 'ENTERTAINMENT', link: '/entertain' },
  { id: 2, name: 'MAP', link: '/map' },
  { id: 3, name: 'HOURS', link: '/hour' },
  { id: 4, name: 'EVENTS', link: '/event' }
];

function Nav() {
  return (
    <div className='bg-[#F7F7F7]'>
      <nav className='flex justify-between text-base px-24 py-3'>
        <p>Welcome to JAT MALL. | 26°C  Open 9:00am - 11:00pm</p>
        <div className='flex justify-between gap-5'>
          <p>Follow us</p>
          <div className='flex justify-between gap-5'>
            <p><BsYoutube className='text-xl' /></p>
            <p><BiLogoTwitter className='text-xl' /></p>
            <p><BiLogoFacebookCircle className='text-xl' /></p>
            <p><BiLogoInstagram className='text-xl' /></p>
          </div>
          <p>ENG</p>
          <p>USD</p>
        </div>
      </nav>

      {/* Main Navbar */}
      <nav className='flex justify-between  items-center py-2 px-24 bg-white text-sm'>
        <ul className='flex space-x-10'>
          {navbarLeftItems.map(item => (
            <li key={item.id}>
              <NavLink
                to={item.link}
                className={({ isActive }) =>
                  isActive ? "text-bold text-gray-800" : "text-gray-800 hover:text-gray-600"
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Center logo */}
        <div className="logo mx-4">
          <img src={Logo} alt="Logo" className="h-14 w-auto" />
        </div>

        <ul className='flex space-x-10'>
          {navbarItems.map(item => (
            <li key={item.id}>
              <NavLink
                to={item.link}
                className={({ isActive }) =>
                  isActive ? "text-bold text-gray-800" : "text-gray-800 hover:text-gray-600"
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>



      <nav className='bg-[#000000] '>

      <ul className='flex justify-between text-white px-24 py-5'>
          {mainNavbarItems.map(item => (
            <li key={item.id}>
              <NavLink
                to={item.link}
                className={({ isActive }) =>
                  isActive ? "text-white uppercase  font-thin" : "text-white uppercase font-thin"
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>


      </nav>



    </div>
  );
}

export default Nav;


