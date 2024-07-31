"use client"
import { useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import kicks from '../../public/header/clicks.png';

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="lg:m-12 m-2 relative p-1 rounded-xl bg-white shadow-md">
      <div className=" container  flex  md:flex-row justify-between items-center py-4 px-6">
        <div className="flex items-center space-x-4">
          <Link href="#" className="hidden md:flex items-center text-gray-700 hover:text-black">
            New Drops <span className="ml-1">🔥</span>
          </Link>
          <div className="hidden md:flex space-x-4">
            <div className="relative group">
              <button className="text-gray-700 hover:text-black flex items-center">
                Men <svg className="ml-1 h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z" /></svg>
              </button>
              <div className="absolute hidden group-hover:block bg-white shadow-lg mt-1 rounded-md">
                <Link href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Shoes</Link>
                <Link href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Clothing</Link>
              </div>
            </div>
            <div className="relative group">
              <button className="text-gray-700 hover:text-black flex items-center">
                Women <svg className="ml-1 h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z" /></svg>
              </button>
              <div className="absolute hidden group-hover:block bg-white shadow-lg mt-1 rounded-md">
                <Link href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Shoes</Link>
                <Link href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Clothing</Link>
              </div>
            </div>
          </div>
          <button className="md:hidden text-gray-700 hover:text-black" onClick={toggleSidebar}>
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        <div className="flex-shrink-0 mt-4 md:mt-0">
          <Link href="#">
            <Image src={kicks} width={120} height={40} />
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-gray-700 hover:text-black">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </button>
          <button className="text-gray-700 hover:text-black">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6">
              <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
            </svg>
          </button>
          <button className="relative text-gray-700 hover:text-black">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h18v2H3V3zM3 7h18v2H3V7zM3 11h18v2H3v-2zM3 15h18v2H3v-2zM3 19h18v2H3v-2z"></path>
            </svg>
            <span className="absolute top-0 right-0 bg-orange-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">0</span>
          </button>
        </div>
      </div>

      {/* Sidebar for mobile screens */}
      <div className={`fixed inset-0 bg-white shadow-lg transform ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 md:hidden`}>
        <div className="p-4">
          <button className="text-gray-700 hover:text-black float-right" onClick={toggleSidebar}>
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          <div className="mt-6 bg-white " style={{zIndex:'999999'}}>
            <Link href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Men Shoes</Link>
            <Link href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Men Clothing</Link>
            <Link href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Women Shoes</Link>
            <Link href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Women Clothing</Link>
          </div>
        </div>
      </div>
    </header>
  );
}
