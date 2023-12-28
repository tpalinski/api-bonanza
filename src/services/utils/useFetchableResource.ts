import { useEffect, useState } from "react"

export const useFetchableResource = <T>(fetchFunction: () => Promise<T>): [T | undefined, () => void] => {
  let [value, setValue] = useState<T>(); 

  const getValue = (): void => {
    fetchFunction()
      .then((res) => {
        setValue(res)
      })
  }

  useEffect(() => {
    getValue();
  }, [])

  return [value, getValue]
}
