import useSWR from "swr"
import axios from "axios";

function userProduct (id) {
    const fetcher = (url) => axios.get(url).then((res) => res.data);
    const { data, error } = useSWR(`${process.env.API_URL}product/${id}`, fetcher)
  
    return {
      data,
      isLoading: !error && !data,
      isError: error
    }
  }

  export default userProduct;