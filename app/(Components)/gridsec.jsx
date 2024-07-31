import React from 'react'
import Image from 'next/image'
function Gridsec({firheading,leftbtn ,btncol1,btncol2,btncol3,btncol4,imgcolum1,imgcolum2,imgcolum3,imgcolum4,pargraphcol1,pargraphcol2,pargraphcol3,pargraphcol4}) {
  return (
<>
      <div className="container mx-auto py-12 px-4">
        <div className="flex justify-between items-center  lg:flex-row flex-col mb-8">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900  ">{firheading}</h2>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 sm:text-2sm transition duration-300">
           {leftbtn}
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 */}
          <div className="flex flex-col items-center">
            <Image src={imgcolum1} className="w-full h-full object-cover mb-4" alt="Product 1" />
            <p className="text-lg text-gray-700 mb-4">{pargraphcol1} </p>
            <button style={{background:'black'}} className="px-12 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
              {btncol1}
            </button>
          </div>
          {/* Column 2 */}
          <div className="flex flex-col items-center">
            <Image src={imgcolum2} className="w-full h-full object-cover mb-4" alt="Product 2" />
            <p className="text-lg text-gray-700 mb-4">{pargraphcol2}</p>
            <button style={{background:'black'}} className="px-12 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
             { btncol2}
            </button>
          </div>
          {/* Column 3 */}
          <div className="flex flex-col items-center">
            <Image src={imgcolum3} className="w-full h-full object-cover mb-4" alt="Product 3" />
            <p className="text-lg text-gray-700 mb-4">{pargraphcol3}</p>
            <button style={{background:'black'}} className="px-12 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
              {btncol3}
            </button>
          </div>
          {/* Column 4 */}
          <div className="flex flex-col items-center">
            <Image src={imgcolum4} className="w-full h-full object-cover mb-4" alt="Product 4" />
            <p className="text-lg text-gray-700 mb-4">{pargraphcol4}</p>
            <button  style={{background:'black'}} className="px-12 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
              {btncol4}
            </button>
          </div>
        </div>
      </div>
    
</>
  )
}

export default Gridsec