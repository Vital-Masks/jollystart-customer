import Layout from "@/components/Shared/Layout";
import "@/styles/globals.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import  { Toaster } from 'react-hot-toast';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <ToastContainer />
      <Toaster/>

    </Layout>
  );
}
