import Image from "next/image";
import styles from "./banner.module.css";

export default function Banner ({pageName}) {
    return <div className={styles.banner}>
        <div className={styles.newArrivals}>
                <Image src="/comp-logo.png" width="77" height="77"/>
                 <div>Home <Image src="/svg/arrow-right.svg" width="20" height="20"/> {pageName} </div>

        </div>
        </div>
}