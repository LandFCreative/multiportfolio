import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaEtsy
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import Logo from '../assets/CD.png';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>
        <img src={Logo} alt='Logo' style={{ width: '65px' }} />
      </div>

      {/* menu */}
      <ul className='hidden md:flex'>
        <li>
            <a href='/'>Home</a>
        </li>

        <li>
          <a href='/about'>About</a>
        </li>

        <li>
        <a href='/skills'>Skills</a>
        </li>
        <li>
        <a href='/work'>Work</a>

        </li>
        <li>
        <a href='/contact'>Contact</a>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-3xl'>
        <a href='/'>Home</a>

        </li>
        <li className='py-6 text-3xl'>
          <a href='/about'>About</a>
        </li>

        <li className='py-6 text-3xl'>
          <a href='/skills'>Skills</a>
        </li>

        <li className='py-6 text-3xl'>
            <a href='/work'>Work</a>
        </li>

        <li className='py-6 text-3xl'>
        </li>
      </ul>

{/* SOcial Icons */}
<div className=' fixed flex-col top-[35%] left-0'>
<ul>
  <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px]  duration-300 bg-blue-600'>
    <a className='flex justify-between items-center w-full text-gray-300'
     href='https://www.linkedin.com/in/cdeneschuk/'>
        LinkedIn<FaLinkedinIn size={30} />
        </a>
    </li>
  <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px]  duration-300 bg-gray-700'>
    <a className='flex justify-between items-center w-full text-gray-300'
     href='https://github.com/LandFCreative'>
        Github <FaGithub size={30} />
        </a>
    </li>
  
    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px]  duration-300 bg-pink-600'>
    <a className='flex justify-between items-center w-full text-gray-300'
     href='https://www.instagram.com/lostandfound.creative/'>
        Instagram<FaInstagram size={30} />
        </a>
    </li>
  <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
    <a
      className='flex justify-between items-center w-full text-gray-300'
      href='mailto:deneschukc@gmail.com'>
      Email <HiOutlineMail size={30} />
    </a>
    </li>
    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px]  duration-300 bg-orange-600'>
    <a className='flex justify-between items-center w-full text-gray-300'
     href='https://lostfoundcreative.etsy.com'>
        Etsy<FaEtsy size={30} />
        </a>
    </li>
  {/* <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
    <a
      className='flex justify-between items-center w-full text-gray-300'
      href='/resume.pdf'>
      Resume <BsFillPersonLinesFill size={30} />
    </a>
    </li> */}
</ul>


</div>




</div>
  )
}

export default Navbar