import { FC } from "react";
import { useQuotes } from "../services";
import { StyledButton } from "../components/StyledButton";
import { StyledText } from "../components/StyledText";

export const Quotes: FC = () => {

  let [quote, getQuote] = useQuotes()

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-center text-orange-400 text-3xl"> Chuck Norris texts </h1>
      <StyledText text={quote.value}/>
      <StyledButton text="Get another quote" onClick={getQuote}/>
    </div>
  )
}
