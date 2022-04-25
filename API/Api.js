import axios from "axios";

export const getProducts = async () => {
  const res = await axios.get(`${process.env.API_URL}product`);
  return res.data;
};
