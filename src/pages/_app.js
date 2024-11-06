import Script from "next/script";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS globally
import "@/styles/globals.css";
import Navbar from "./component/layout/NavBar/Index";
import Footer from "./component/layout/footer/Index";

export default function App({ Component, pageProps }) {
  return <>
    <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        strategy="afterInteractive" // Load after the page has rendered
    />
    <Navbar/>
    <Component {...pageProps} />
    <Footer/>
    </>;
}
