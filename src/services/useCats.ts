import { CatResponse, getCat } from "./cat-service"
import { useFetchableResource } from "./utils/useFetchableResource"

export const useCats = (): [CatResponse, () => void] => {
  let [cat, fetchCat] = useFetchableResource(getCat);
  
  return [cat ?? {url: "", id: "", height: 0, width: 0}, fetchCat]
}
