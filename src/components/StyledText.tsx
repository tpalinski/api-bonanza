import { FC } from "react"

export type StyledTextProps = {
  text: string
}

export const StyledText: FC<StyledTextProps> = (props) => {

  return (
    <div className="grid gap-8 justify-start my-4">
      <div className="relative group">
        <div className="absolute -inset-1 bg-red-500 blur rounded-xl">
        </div>
        <div className="
          rounded-xl bg-indigo-900 text-orange-500 relative size-[24rem] px-3
          flex items-center justify-center
          ">
          {props.text}
        </div>
      </div>
    </div>
  )
}
