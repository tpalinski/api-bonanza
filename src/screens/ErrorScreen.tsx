import { FC } from "react";
import { useRouteError } from "react-router-dom";

export const ErrorScreen: FC = () => {
  const error = useRouteError()

  console.error(error)

  return (
    <div className="text-orange-400 text-center">
      <h1 className="text-5xl"> Error! </h1>
    </div>
  )
}
