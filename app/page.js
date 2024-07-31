"use client"
import Image from "next/image";
import nikeImage from '../public/header/shoes.png'; // Adjust the path to your image
import twoshoes from '../public/header/2shoes.png'
import Gridsec from "./(Components)/gridsec";
import juta1 from '../public/header/juta1.png'
import juta2 from '../public/header/juta2.png'
import juta3 from '../public/header/juta3.png'
import juta4 from '../public/header/juta4.png'
import catogori1 from '../public/header/Catagarie.png'
import catogori2 from '../public/header/image 31.png'
import person1 from '../public/Reviwvs/person1.png'
import person2 from '../public/Reviwvs/peron2.png'
import person3 from '../public/Reviwvs/person3.png'
import product1 from '../public/Reviwvs/product1.png'
import product2 from '../public/Reviwvs/produc2.png'
import product3 from '../public/Reviwvs/product3.png'
export default function Home() {
  return (
<>
<div className="relative">
      {/* Top Big Heading */}
      <div className="lg:m-12 m-2" > 
      <div className="text-center py-12">
        <h1 className=" md:text-8xl lg:text-9xl text-6xl font-bold text-gray-900">DO IT <span style={{ color: "#4A69E2" }}>RIGHT</span></h1>
      </div>

      {/* Large Picture with Overlay Content */}
      <div  className=" relative w-full  h-[500px] md:h-[700px] lg:h-[700px]">
        <Image src={nikeImage} className="h-full w-full" alt="Nike Air Max" />
        <div className="flex flex-row ">

        <div style={{zIndex:'999999'}} className="addimg absolute inset-0 flex flex-col items-start justify-end pb-12 p-8 bg-opacity-70">
          <h2 className="text-3xl md:text-6xl font-bold text-white mb-4">NIKE AIR MAX</h2>
          <p  className="text-[12px] w-50 md:text-xl text-white mb-4 max-w-md">
           Nike introducing the new air max for <br/> everyone's  comfort.
          </p>
          <button className="px-6 py-3 bg-blue-600 text-white btn-lg rounded-lg hover:bg-blue-700 transition duration-300">
            Shop Now
          </button>
        </div>
        <div className="absolute inset-0 flex flex-row items-end justify-end lg:pb-12 pb-8 p-7 md:p-12 sm:p-12 bg-opacity-70">
          <Image src={twoshoes} height={100} width={100} />
        </div>
        </div>

      </div>
    <Gridsec firheading={"DON'T MISS OUT NEW DROPS"} leftbtn={'SHOP NEW DROPS'} pargraphcol1={'ADIDAS 4DFWD X PARLEY RUNNING SHOES'} pargraphcol2={'ADIDAS 4DFWD X PARLEY RUNNING SHOES'} pargraphcol3={'ADIDAS 4DFWD X PARLEY RUNNING SHOES'} pargraphcol4={'ADIDAS 4DFWD X PARLEY RUNNING SHOES'} btncol1={'View Product - $125'} btncol2={'View Product - $125'} btncol3={'View Product - $125'} btncol4={'View Product - $125'} imgcolum1={juta1} imgcolum2={juta2} imgcolum3={juta3} imgcolum4={juta4}  />
</div>

    </div>
    <div className="relative py-12 px-4 bg-black">
      {/* Heading and Arrow Buttons */}
      <div className=" flex  lg:flex-row flex-col   items-center justify-between mb-8">
        <h2 className="lg:text-6xl text-4xl font-bold text-white">CATEGORIES</h2>
        <div className="flex items-center space-x-4">
          <button style={{background:"white" , fontSize:'small',  color:'black'}} className="w-8 h-8 flex items-center justify-center rounded bg-gray-200 text-black">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button style={{background:"white" , fontSize:'small',  color:'black'}}  className="w-8 h-8 flex items-center justify-center rounded bg-gray-200 text-black">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Columns with Images */}
      <div className="grid grid-cols-1 md:grid-cols-2 " style={{marginLeft:'2rem'}}>
        {/* Column 1 */}
        <div style={{background:'#ECEEF0'}} className="relative flex flex-col items-center bg-white rounded-l-3xl">
          <Image src={catogori1} className="object-cover rounded-l-lg" alt="Lifestyle Shoes" />
          <div className="absolute inset-0 flex flex-row justify-end p-8  justify-between items-end"   >
            <h1 className="text-3xl font-bold text-black " style={{lineHeight:'2.9rem'}}>LIFESTYLE <br/> SHOES</h1>
            <button style={{background:"black" , fontSize:'small',  color:'white'}} className="w-12 h-12 flex items-center justify-center rounded bg-dark text-black">
              <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
              
              </svg>
            </button>
          </div>
        </div>

        {/* Column 2 */}
        <div style={{background:'#F6F6F6'}} className="relative flex flex-col items-center bg-white ">
          <Image src={catogori2} className="object-cover rounded-r-lg" alt="Basketball Shoes" />
          <div className="absolute inset-0 flex  justify-between p-8 items-end ">
            <h1 className="text-3xl font-bold text-black  " style={{lineHeight:'2.9rem'}} >BASKETBALL <br/> SHOES</h1>
            <button style={{background:"black" , fontSize:'small',  color:'white'}} className="w-12 h-12 flex items-center justify-center rounded bg-gray-200 text-black">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

 <div className="max-w-7xl mx-auto py-10">
      <div className=" flex  lg:flex-row flex-col   items-center justify-between mb-8">
        <h2 className="text-6xl font-bold text-black">REVIEWS</h2>
        <div className="flex items-center space-x-4">
           <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 sm:text-2sm transition duration-300">
           SEE ALL
          </button>
         </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Column 1 */}
        <div className="bg-white rounded-lg shadow-md p-5 relative">
          <div className="absolute top-0 right-0 mt-3 mr-3 w-12 h-12 rounded-full overflow-hidden">
            <Image src={person1} alt="Reviewer" className="w-full h-full object-cover"/>
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-bold mb-2">Good Quality</h2>
            <p className="text-gray-700 text-sm">I highly recommend shopping from Kicks. Every purchase has been a great experience.</p>
            <div className="flex items-center mt-2">
              <span className="text-yellow-500 mr-2">★★★★★</span>
              <span className="text-gray-600">5.0</span>
            </div>
          </div>
          <Image src={product1} alt="Product" className="w-full rounded-lg mt-4"/>
        </div>
        {/* Repeat for Column 2 and 3 */}
        <div className="bg-white rounded-lg shadow-md p-5 relative">
          <div className="absolute top-0 right-0 mt-3 mr-3 w-12 h-12 rounded-full overflow-hidden">
            <Image src={person3} alt="Reviewer" className="w-full h-full object-cover"/>
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-bold mb-2">Good Quality</h2>
            <p className="text-gray-700 text-sm">I highly recommend shopping from Kicks. Every purchase has been a great experience.</p>
            <div className="flex items-center mt-2">
              <span className="text-yellow-500 mr-2">★★★★★</span>
              <span className="text-gray-600">5.0</span>
            </div>
          </div>
          <Image src={product2} alt="Product" className="w-full rounded-lg mt-4"/>
        </div>
        <div style={{height:'max-content'}} className="bg-white rounded-lg shadow-md p-5 relative">
          <div className="absolute top-0 right-0 mt-3 mr-3 w-12 h-12 rounded-full overflow-hidden">
            <Image src={person2} alt="Reviewer" className="w-full h-full object-cover"/>
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-bold mb-2">Good Quality</h2>
            <p className="text-gray-700 text-sm">I highly recommend shopping from Kicks. Every purchase has been a great experience.</p>
            <div className="flex items-center mt-2">
              <span className="text-yellow-500 mr-2">★★★★★</span>
              <span className="text-gray-600">5.0</span>
            </div>
          </div>
          <Image src={product3} width={100} height={100} alt="Product" className="w-full rounded-lg mt-4"/>
        </div>
      </div>
    </div>
</>  
);
}
