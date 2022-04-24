import "node_modules/bootstrap/dist/css/bootstrap.min.css";
import "style/main.css";
import "antd/dist/antd.css";
import "swiper/css";
import { Provider } from "react-redux";

import { store } from "redux/store";
export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />;
    </Provider>
  );
}

