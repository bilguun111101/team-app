import { useEffect, useState } from "react";
import axios from "axios";

const useGetDataFromApi = (link) => {
  const [data, setData] = useState();
  useEffect(() => {
    (async () => {
      await axios.get(link).then((res) => setData(res.data.data));
    })();
  }, []);
  return data;
};

export default useGetDataFromApi;
