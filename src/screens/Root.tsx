import { FaCat, FaHatCowboy } from "react-icons/fa";
import { Icon } from "../components/Icon";
import { Outlet } from "react-router-dom";

export const Root = () => {

  return (
    <div className="flex flex-row items-start justify-start w-screen">
      <div className="bg-indigo-500 left-0 relative top-0 h-screen w-40
        flex flex-col items-center"> 
        <Icon icon={<FaCat size="50"/>} route="/cats"/>
        <Icon icon={<FaHatCowboy size="50"/>} route="/quotes"/>
      </div>
      <div id="content" className="flex text-center flex-col items-center h-screen w-screen">
        <h1 className="text-center text-orange-400 font-bold font-sans text-5xl my-6"> Good App </h1>
        <div className="bg-indigo-500 rounded-3xl h-screen w-[60rem] p-20">
          <Outlet/>
        </div>
      </div>
    </div>
  )
}
