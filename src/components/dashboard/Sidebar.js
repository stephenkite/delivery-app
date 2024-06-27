import { FaBabyCarriage } from "react-icons/fa";
import { AiFillDashboard } from "react-icons/ai";
import { FaCartPlus } from "react-icons/fa";
import { FaUpload } from "react-icons/fa";
import { Link } from "react-router-dom";



function Sidebar(){

    return (
        <div className="w-[250px] h-screen bg-black text-white pt-5">
            <div className="flex gap-x-5 items-center border-b px-4 py-2 mx-1">
                <div className="p-2 bg-white text-black rounded-full">
                    <FaBabyCarriage />
                </div>
                <div className="">
                    Delivery App
                </div>
            </div>
            
            <Link to="/dashboard/products" >
                <div className="flex gap-x-5 items-center px-4 py-2 mt-2 cursor-pointer hover:bg-blue-500 mx-1 rounded-full">
                    <div className="p-2 ">
                        <AiFillDashboard className="text-xl" />
                    </div>
                    <div className="">
                        Products
                    </div>
                </div>
            </Link>

            <Link to="/dashboard/sales">
                <div className="flex gap-x-5 items-center px-4 py-2 mt-2 cursor-pointer hover:bg-blue-500 mx-1 rounded-full">
                    <div className="p-2 ">
                    <FaCartPlus className=""/>
                    </div>
                    <div className="">
                        Sales
                    </div>
                </div>
            </Link>
            <div className="flex gap-x-5 items-center px-4 py-2 mt-2 cursor-pointer hover:bg-blue-500 mx-1 rounded-full">
                <div className="p-2 ">
                   <FaUpload className=""/>
                </div>
                <div className="">
                    Upload
                </div>
            </div>

        </div>
    );
}

export default Sidebar;