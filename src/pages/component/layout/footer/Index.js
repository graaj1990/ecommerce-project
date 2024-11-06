import Link from 'next/link';
import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
    return <footer className={styles.footer}>
            <div className='row'>
                <div className='col-sm-3'>
                    <Link href="/" className={styles.logo}>
                    <Image
                        src="/images/footer-logo.png" // Path to your image
                        alt="Description of the image"
                        width={85} // Desired width of the image
                        height={36} // Desired height of the image
                    />
                    </Link>
                    <p className={styles.address}>
                        400 University Drive Suite 200 Coral Gables, <br />
                        FL 33134 USA
                    </p>
                </div>


                <div  className='col-sm-3'>
                <label className={styles.footerLink}>Links</label>
                <ul className={styles.footernavLinks}>
                    <li className={styles.item}>
                        <Link href="">Home</Link>
                    </li>
                    <li className={styles.item}>
                        <Link href="">Shop</Link>
                    </li>
                    <li className={styles.item}>
                        <Link href="">About</Link>
                    </li>
                    <li className={styles.item}>
                        <Link href="">Contact</Link>
                    </li>
                </ul>
                </div>
                <div  className='col-sm-3'>
                    <label className={styles.footerLink}>Help</label>
                    <ul className={styles.footernavLinks}>
                        <li className={styles.item}>
                            <Link href="">Payment Option</Link>
                        </li>
                        <li className={styles.item}>
                            <Link href="">Returns</Link>
                        </li>
                        <li className={styles.item}>
                            <Link href="">Privacy Policy</Link>
                        </li>
                    </ul>
                </div>
                 <div  className='col-sm-3'>
                    <label className={styles.footerLink}>Newsletter</label>
                    <div className={styles.newsletter}>
                        <input className={styles.input} name="query" placeholder='Enter Your Email Address' />
                        <button className={styles.subscibeBtn}>Subscibe</button>
                    </div>
                </div>
        </div>
        <p className={styles.reserve}>
            2023 furino. All rights reverved
        </p>
            </footer>
}