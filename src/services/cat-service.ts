import axios from "axios"

const CAT_URL = 'https://api.thecatapi.com/v1/images/search'

// An object signifying a single cat returned form the catapi
export type CatResponse = {
  id: string,
  url: string,
  width: number,
  height: number,
}

export const getCat = async (): Promise<CatResponse> => {
  const res = await axios.get(CAT_URL);
  if(res.status !== 200) {
    throw new Error("GET cats: Error from catapi")
  }
  return res.data[0] as CatResponse
}
