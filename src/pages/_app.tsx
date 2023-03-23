import "styles/index.scss";
import type { AppProps } from "next/app";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { Provider } from "react-redux";
import store from "redux/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <Provider store={store}>
        <Component {...pageProps} />;
      </Provider>
    </UserProvider>
  );
}

export default MyApp;
