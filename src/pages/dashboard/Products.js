import React from 'react'
import Dashboard from '../../components/dashboard/Dashboard'
import { IoIosSettings } from "react-icons/io";
import { AiFillLike } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";

export default function Products() {
  return (
    <Dashboard>
      <div className="bg-gray-100 h-screen w-full">
        <div className='mx-2 py-5 text-lg font-bold'> 
            Dashboard V2
        </div>

        <div className='flex space-x-10 mx-2 '>
              <div className='border flex bg-white items-center gap-x-4 flex-grow rounded-md shadow-md'>

               <div className="p-2 bg-[#15A1BC] text-white rounded-tl-md rounded-bl-md">
                    < IoIosSettings className='text-2xl'/>
                </div>
                <div className="text-center">
                    Settings
                </div>

              </div>
              <div className='border flex bg-white items-center gap-x-4 flex-grow rounded-md shadow-md'>

               <div className="p-2 bg-[#15A1BC] text-white rounded-tl-md rounded-bl-md">
                    < AiFillLike className='text-2xl'/>
                </div>
                <div className="text-center">
                    Like Us
                </div>

              </div>
              <div className='border flex bg-white items-center gap-x-4 flex-grow rounded-md shadow-md'>

               <div className="p-2 bg-[#15A1BC] text-white rounded-tl-md rounded-bl-md">
                    < FaShoppingCart className='text-2xl'/>
                </div>
                <div className="text-center">
                    Shop With Us
                </div>

              </div>

        </div>
         
      </div>
    </Dashboard>
  )
}