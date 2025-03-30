// _app.js
import { Provider } from "react-redux";
import store from "./store";  // Ensure this path is correct

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
