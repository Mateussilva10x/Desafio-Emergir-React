import { useState, useEffect } from "react";

//Custom hook
export const useFetch = (url) => {
  const [data, setData] = useState(null);

  //loading
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);

      setLoading(true);

      const json = await res.json();

      setData(json);

      setLoading(false);
    };

    fetchData();
  }, [url]);

  return { data, loading };
};
