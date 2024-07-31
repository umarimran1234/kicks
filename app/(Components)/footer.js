

import React from 'react';
import Image from 'next/image';
import kicks from '../../public/Reviwvs/kicks2.png'
import logo from '../../public/Reviwvs/Logo.png'
const Footer = () => {
  return (
<>
<footer style={{marginBottom:"1rem"}}>
<div className="bg-blue-700 text-white p-12  mx-6 mt-10  h-[40rem] " style={{borderTopRightRadius:'3rem' , borderTopLeftRadius:'3rem'}} >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:p-8 " >
        {/* Column 1 */}
        <div  className="flex flex-col justify-center">
          <h2 style={{lineHeight:'4rem'}} className="lg:text-5xl text-3xl font-bold mb-4">Join our Kicks Plus Club &amp; get 15% off</h2>
          <p className="mb-2">Sign up for free &amp; join the community.</p>
          <div className="flex ">
             <input 
              type="email" 
              placeholder="Enter your email" 
              className="p-2 rounded-xl w-[13rem] lg:w-72 bg-transparent border border-white placeholder-gray-300 text-white focus:outline-none"
            />
            <button className="bg-black  text-white p-2 mx-2 w-20 rounded-xl">Submit</button>
          </div>
        </div>
        {/* Column 2 */}
        <div className="flex items-center justify-center">
          <Image src={kicks} alt="Promotional" className="w-100 h-100 "/>
        </div>
      </div>
    </div>
<div className=" -mt-32 lg:-mt-56   text-white pt-12 px-12   mx-6   h-full  " style={{marginBottom:'2rem', height:'max-content' , background:'#232321' , borderRadius:'3rem'}} >
     <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
      {/* About Us Section */}
      <div className='lg:col-span-2 md:col-span-2'>
        <h2 className="text-4xl font-bold text-orange-500 mb-4">About us</h2>
        <p className="text-sm">
          We are the biggest hyperstore in the universe. We got you all cover with our exclusive collections and latest drops.
        </p>
      </div>

      {/* Categories Section */}
      <div>
        <h2 className="text-lg font-bold text-orange-500 mb-4">Categories</h2>
        <ul className="space-y-2">
          <li>Runners</li>
          <li>Sneakers</li>
          <li>Basketball</li>
          <li>Outdoor</li>
          <li>Golf</li>
          <li>Hiking</li>
        </ul>
      </div>

      {/* Company Section */}
      <div>
        <h2 className="text-lg font-bold text-orange-500 mb-4">Company</h2>
        <ul className="space-y-2">
          <li>About</li>
          <li>Contact</li>
          <li>Blogs</li>
        </ul>
      </div>

      {/* Follow Us Section */}
      <div>
        <h2 className="text-lg font-bold text-orange-500 mb-4">Follow us</h2>
        <div className="flex space-x-4">
          <a href="#" aria-label="Facebook">
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="currentColor"
>
  <path d="M22.675 0h-21.35c-.733 0-1.325.593-1.325 1.325v21.351c0 .732.592 1.324 1.325 1.324h11.495v-9.284h-3.13v-3.622h3.13v-2.673c0-3.1 1.892-4.788 4.657-4.788 1.325 0 2.463.099 2.797.142v3.244l-1.918.001c-1.504 0-1.794.714-1.794 1.762v2.313h3.588l-.467 3.622h-3.121v9.284h6.116c.733 0 1.325-.592 1.325-1.324v-21.351c0-.732-.592-1.325-1.325-1.325z"/>
</svg>

          </a>
          <a href="#" aria-label="Instagram">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.338 3.608 1.313.975.975 1.251 2.242 1.313 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.338 2.633-1.313 3.608-.975.975-2.242 1.251-3.608 1.313-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.338-3.608-1.313-.975-.975-1.251-2.242-1.313-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.338-2.633 1.313-3.608.975-.975 2.242-1.251 3.608-1.313 1.266-.058 1.646-.07 4.85-.07m0-2.163c-3.259 0-3.667.014-4.947.072-1.56.071-2.918.351-3.997 1.43-1.079 1.08-1.359 2.437-1.43 3.997-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.071 1.56.351 2.918 1.43 3.997 1.08 1.079 2.437 1.359 3.997 1.43 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.56-.071 2.918-.351 3.997-1.43 1.079-1.08 1.359-2.437 1.43-3.997.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.071-1.56-.351-2.918-1.43-3.997-1.08-1.079-2.437-1.359-3.997-1.43-1.28-.058-1.688-.072-4.947-.072z"/>
              <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.324c-2.298 0-4.162-1.864-4.162-4.162s1.864-4.162 4.162-4.162 4.162 1.864 4.162 4.162-1.864 4.162-4.162 4.162zm6.406-11.845c-.796 0-1.441.645-1.441 1.441 0 .796.645 1.441 1.441 1.441.796 0 1.441-.645 1.441-1.441 0-.796-.645-1.441-1.441-1.441z"/>
            </svg>
          </a>
          <a href="#" aria-label="Twitter">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.566-2.005.978-3.127 1.2-.896-.957-2.173-1.555-3.591-1.555-2.717 0-4.92 2.203-4.92 4.917 0 .386.043.763.127 1.124-4.083-.205-7.702-2.16-10.125-5.134-.423.726-.666 1.562-.666 2.457 0 1.694.863 3.188 2.173 4.065-.802-.025-1.557-.246-2.215-.616v.062c0 2.366 1.683 4.342 3.918 4.788-.41.111-.844.171-1.292.171-.316 0-.624-.03-.927-.087.624 1.953 2.438 3.377 4.584 3.415-1.68 1.318-3.809 2.104-6.102 2.104-.396 0-.787-.023-1.175-.068 2.179 1.396 4.768 2.212 7.557 2.212 9.054 0 14.002-7.496 14.002-13.986 0-.213-.005-.426-.014-.637.961-.695 1.797-1.562 2.457-2.549z"/>
            </svg>
          </a>
          <a href="#" aria-label="TikTok">
            <svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="currentColor"

>
  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm2.874 13.708c-.295.059-.597.089-.907.089-.979 0-1.883-.33-2.62-.884v4.003c-.746.273-1.558.424-2.403.424-2.76 0-5-2.24-5-5s2.24-5 5-5c.207 0 .412.011.613.033v2.088c-.202-.022-.408-.033-.613-.033-1.563 0-2.834 1.27-2.834 2.833s1.271 2.833 2.834 2.833c.248 0 .49-.031.723-.09v-2.861c.74.556 1.646.89 2.625.89.301 0 .594-.032.878-.095v2.085z"/>
</svg>

          </a>
        </div>
      </div>
    </div>



  </div>
<Image  className='lg:h-42 h-54  mt-12'  src={logo}/>
    </div>

<div className='text-center'>
<p className=' lg:text-2lg text-sm'>© All rights reserved | Made with ❤️ by <span style={{color:'blue'}} > Visiata Systems International</span> </p>
</div>
</footer>
    </>
  );
}

export default Footer;
