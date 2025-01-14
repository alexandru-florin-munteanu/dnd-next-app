import "styles/index.scss";
import type { AppProps } from "next/app";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { Provider } from "react-redux";
import store from "redux/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <Provider store={store}>
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Roboto+Slab:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
        <Component {...pageProps} />;
      </Provider>
    </UserProvider>
  );
}

export default MyApp;
