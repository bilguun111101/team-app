import { useEffect, useState } from "react";
import axios from "axios";
import { Instance } from "./instance";

const useGetDataFromApi = (link) => {
  const [data, setData] = useState();
  const instance = Instance(link);
  useEffect(() => {
    (async () => {
      await instance.get().then((res) => setData(res.data.data))
    })(); 
  }, []);
  return data;
};

export default useGetDataFromApi;
