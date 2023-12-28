import { FC, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

export const Icon: FC<{icon: ReactNode, route: string}> = (props) => {

  const navigate = useNavigate()

  const handleNavigate = (): void => {
    navigate(props.route)
  }

  return (
  <div className="relative group" onClick={handleNavigate}>
    <div className="absolute size-24 -inset-0.5 bg-gradient-to-r from-red-900 to-orange-50 rounded-2xl my-10
      group-hover:animate-ping
      transition-all duration-400 opacity-100
      blur-xl">
    </div>
    <div className="flex relative items-center justify-center size-24
        my-10 p-4
        bg-red-950 text-orange-400 ring ring-orange-200 rounded-2xl
        group-hover:bg-orange-400 group-hover:text-red-950 group-hover:ring-red-700
        transition-all duration-200">
      {props.icon}
    </div>
  </div>
  )
} 
