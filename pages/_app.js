import Layout from "@/components/Shared/Layout";
import "@/styles/globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "@material-tailwind/react";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
        <ToastContainer />
        <Toaster />
      </Layout>
    </ThemeProvider>
  );
}
