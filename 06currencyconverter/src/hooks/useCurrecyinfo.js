import { useEffect, useState } from "react";

function useCurrecyinfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024.10.15/v1/currencies/${currency}.json`
    )
      .then((resp) => {
        if (!resp.ok) {
          throw new Error("API is not responding");
        }
        return resp.json();
      })
      .then((respData) => {
        setData(respData[currency]);
      });
  }, [currency]);
  return data;
}

export default useCurrecyinfo;
