import { FC, ReactNode } from "react"

export type StyledButtonProps = {
  onClick?: () => void,
  icon?: ReactNode,
  text: string
}

export const StyledButton: FC<StyledButtonProps> = (props) => {

  return (
    <div className="grid gap-8 items-start justify-center p-4">
      <div className="relative group">
        <div className="absolute -inset-2 bg-gradient-to-r from-violet-700 to-red-500 rounded-xl
          blur-sm px-6 opacity-75 group-hover:opacity-100 transition-all duration-1000
          animate-tilt"> </div>
        <button onClick={props.onClick} 
        className="relative flex justify-evenly items-center bg-indigo-500 rounded-xl
          px-6
           group-active:ring-violet-700 group-active:ring
          ">
          {props.icon ? props.icon : <> </>}
          <span className="text-center text-orange-50 group-hover:text-orange-400 transition-all duration-200
            group-active:text-orange-950">
            {props.text}
          </span>
        </button>
      </div>
    </div>
  )
}
