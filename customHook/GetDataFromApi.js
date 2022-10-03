import { useEffect, useState } from "react";
import axios from "axios";

const useGetDataFromApi = (link) => {
  const [data, setData] = useState();
  useEffect(() => {
    (async () => {
      const saveData = await fetch("https://dummyapi.io/data/v1/user", {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          // use your own app-id of dummy api
          "app-id": "63104c3120f6e665ecf628ba",
        },
      });

      const jsonData = await saveData.json();
      setData(jsonData.data);
      return () => saveData;
    })();
  }, []);
  return data;
};

export default useGetDataFromApi;
