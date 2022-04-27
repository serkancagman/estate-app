import "node_modules/bootstrap/dist/css/bootstrap.min.css";
import "style/main.css";
import "antd/dist/antd.css";
import "swiper/css";
import { Provider } from "react-redux";
import axios from "axios";
import { store } from "redux/store";
import Script from "next/script";
export default function MyApp({ Component, pageProps, products }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} products={products} />
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"/>
    </Provider>
  );
}

MyApp.getInitialProps = async () => {
  const res = await axios.get(`${process.env.API_URL}product`);
  return {
    products: res.data,
  };
};
