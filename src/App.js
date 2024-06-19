import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";
import  promiseImage  from "./assets/promise.jpg"

function App() {
  return (
    <div id="pageDiv" className=" flex">
      <div id="sidebarDiv" className="pl-2 pt-10 flex flex-col gap-y-6">
        <div
          id="buttonDiv"
          className=" cursor-pointer hover:bg-gray-300  w-[80px] rounded-md flex flex-col items-center"
        >
          <div id="iconDiv">
            <IoMdHome className=" text-3xl" />
          </div>
          <div id="messageDiv" className="text-xs">
            Home
          </div>
        </div>
        <div
          id="buttonDiv"
          className="cursor-pointer hover:bg-gray-300  w-[80px] rounded-md flex flex-col items-center"
        >
          <div id="iconDiv">
            <SiYoutubeshorts className=" text-3xl" />
          </div>
          <div id="messageDiv" className="text-xs">
            Shorts
          </div>
        </div>
        <div
          id="buttonDiv"
          className="cursor-pointer hover:bg-gray-300  w-[80px] rounded-md flex flex-col items-center"
        >
          <div id="iconDiv">
            <MdSubscriptions className=" text-3xl" />
          </div>
          <div id="messageDiv" className="text-xs">
            Subscriptions
          </div>
        </div>
        <div
          id="buttonDiv"
          className="cursor-pointer hover:bg-gray-300  w-[80px] rounded-md flex flex-col items-center"
        >
          <div id="iconDiv">
            <FaYoutube className=" text-3xl" />
          </div>
          <div id="messageDiv" className="text-xs">
            You
          </div>
        </div>
      </div>
      <div id="contentDiv" className=" pt-10 pl-4">
        <div id="categoryButtons" className=" flex gap-x-10  ">
          <div
            id="category"
            className=" cursor-pointer hover:bg-gray-300 px-6 py-0.5 rounded-md "
          >
            All
          </div>
          <div
            id="category"
            className="cursor-pointer hover:bg-gray-300 px-6 py-0.5 rounded-md "
          >
            Music
          </div>
          <div
            id="category"
            className="cursor-pointer hover:bg-gray-300 px-6 py-0.5 rounded-md "
          >
            Apis
          </div>
          <div
            id="category"
            className="cursor-pointer hover:bg-gray-300 px-6 py-0.5 rounded-md "
          >
            News
          </div>
          <div
            id="category"
            className="cursor-pointer hover:bg-gray-300 px-6 py-0.5 rounded-md "
          >
            Worship
          </div>
          <div
            id="category"
            className="cursor-pointer hover:bg-gray-300 px-6 py-0.5 rounded-md "
          >
            Law
          </div>
          <div
            id="category"
            className="cursor-pointer hover:bg-gray-300 px-6 py-0.5 rounded-md "
          >
            Live
          </div>
        </div>

          <div id="videosDiv" className="">
            <div id="cardDiv" className="">
              <div id="picDiv" className="">
                <img src={promiseImage} alt="" className="" />
              </div>
              <div id="titleDiv" className="">
                Promises
              </div>
              <div id="nameDiv" className="">
                Maverick City
              </div>
            </div>
          

        </div>
      </div>
    </div>
  );
}

export default App;