import { useEffect, useState } from "react"
import { makeRequest } from "../../makeRequest";
const useFetch = (url) => {
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(false);
    const [err,setErr] = useState(false);


    useEffect(()=>{
        const fetchData = async () => {
          try {
            setLoading(true);
            const data = await makeRequest.get(url);
            setData(data.data.data);
          }
          catch(err) {
            console.log(err);
          }
          setLoading(false);
        }
        fetchData();
      },[url])

      return {data,loading,err};
};

export default useFetch;