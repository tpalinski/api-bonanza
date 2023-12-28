import axios from "axios"

const API_URL = 'https://api.chucknorris.io/jokes/random'

export type QuoteResponse = {
  categories: string[],
  created_at: Date,
  icon_url: string,
  id: string,
  updated_at: Date,
  url: string,
  value: string,
}

export const getQuote = async (): Promise<QuoteResponse> => {
  const res = await axios.get(API_URL)
  if(res.status!==200) {
    throw new Error("GET quote: Error from Chuck Norris api")
  }
  return res.data as QuoteResponse
}
