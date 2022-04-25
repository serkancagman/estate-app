import "node_modules/bootstrap/dist/css/bootstrap.min.css";
import "style/main.css";
import "antd/dist/antd.css";
import "swiper/css";
import { Provider } from "react-redux";
import axios from "axios";
import { store } from "redux/store";
export default function MyApp({ Component, pageProps, products }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} products={products} />
    </Provider>
  );
}

MyApp.getInitialProps = async () => {
  const res = await axios.get(`${process.env.API_URL}product`);
  return {
    products: res.data,
  };
};
