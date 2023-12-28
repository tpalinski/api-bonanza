import { FC} from "react"
import { StyledButton } from "../components/StyledButton"
import { useCats } from "../services";

export const Cats: FC = () => {

  let [cat, fetchCat] = useCats();

  return (
    <div className="flex flex-col items-center justify-start">
      <h1 className="text-3xl text-orange-400"> Cats </h1>
      <img src={cat.url}
        className="size-[25rem] my-4 rounded-xl"
        alt="cat"
        loading="lazy"
        />
      <StyledButton text="Get another cat" onClick={fetchCat}/>
    </div>
  )
}
