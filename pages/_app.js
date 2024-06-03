import "../styles/globals.scss";
import Contentlayout from "../shared/layout-components/layout/content-layout";
import Landingpagelayout from "../shared/layout-components/layout/landingpage-layout";
import Switcherlayout from "../shared/layout-components/layout/switcher-layout";
import Authenticationlayout from "../shared/layout-components/layout/authentication-layout";
import SSRProvider from "react-bootstrap/SSRProvider";
import store from "@/shared/redux/store/store";
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";
import { ToastContainer } from "react-toastify";

const layouts = {
  Contentlayout: Contentlayout,
  Landingpagelayout: Landingpagelayout,
  Switcherlayout: Switcherlayout,
  Authenticationlayout: Authenticationlayout,
};
function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const Layout =
    layouts[Component.layout] ||
    ((pageProps) => <Component>{pageProps}</Component>);
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <ToastContainer />
        <Layout>
          <SSRProvider>
            <Component {...pageProps} />
          </SSRProvider>
        </Layout>
      </Provider>
    </SessionProvider>
  );
}

export default MyApp;
