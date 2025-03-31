import { GA4Initializer } from "@components/gtag";
import "../styles/globals.css";
import { Fragment, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    import("react-onesignal").then((OneSignal) => {
      OneSignal.default.init({
        appId: "5af166ef-dcda-406e-adce-63a790a18655",
        serviceWorkerPath: "/OneSignalSDKWorker.js",
      });
    });
  }, []);

  return (
    <Fragment>
      <GA4Initializer />
      <Component {...pageProps} />
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar
        newestOnTop
        closeOnClick={false}
        rtl={false}
        draggable={false}
        pauseOnHover
        theme="light"
      />
    </Fragment>
  );
}
