import { FaCat, FaHatCowboy } from "react-icons/fa";
import { Icon } from "../components/Icon";

export const Root = () => {

  return (
    <div className="flex align-middle justify-center">
      <h1 className="text-center text-orange-400 font-bold font-sans text-5xl"> Good App </h1>
      <div className="bg-indigo-500 left-0 top-0 absolute h-screen w-40
        flex flex-col items-center"> 
        <Icon icon={<FaCat size="50"/>}/>
        <Icon icon={<FaHatCowboy size="50"/>}/>
      </div>
    </div>
  )
}
