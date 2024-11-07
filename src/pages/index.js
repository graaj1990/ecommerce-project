import Head from "next/head";
import styles from "@/styles/Home.module.css";
import HomeBanner from "./component/homeBanner/Index";
import BrowseTheRange from "./component/browseTheRange/Index";
import Product from "./component/product/Index";



export default function Home() {
  return (
    <>
      <Head>
        <title>Ecom App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeBanner />
      <div className="container">
        <BrowseTheRange />
        <div className={styles.productlist}>
          <div className={styles.ourProduct}>Our Products</div>
          <div className="row">
            <div className="col-lg-3 col-sm-4">
              <Product isDiscount={true} />
            </div>
            <div className="col-lg-3 col-sm-4">
              <Product isNew={true} />
            </div>
            <div className="col-lg-3 col-sm-4">
              <Product/>
            </div>
            <div className="col-lg-3 col-sm-4">
              <Product/>
            </div>
          </div>
          <div className={styles.showMore}>
            <button className={styles.showMoreBtn}>Show More</button>
          </div>
        </div>
      </div>
    </>
  );
}
