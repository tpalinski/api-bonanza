import { QuoteResponse, getQuote } from "./quote-service";
import { useFetchableResource } from "./utils/useFetchableResource"

export const useQuotes = (): [QuoteResponse, () => void] => {
  let [quote, fetchQuote] = useFetchableResource(getQuote);

  return [quote ?? {id: "", url: "", icon_url: "", created_at: new Date(Date.now()), updated_at: new Date(Date.now()), value: "loading ...", categories: []}, fetchQuote] 
}
