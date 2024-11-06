import Link from 'next/link';
import styles from './Navbar.module.css';
import Image from 'next/image';

export default function Navbar() {

  return (
    <>
     <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/images/logo.png" // Path to your image
            alt="Description of the image"
            width={185} // Desired width of the image
            height={41} // Desired height of the image
          />
        </Link>
        <ul className={styles.navLinks}>
          <li>
            <Link href="/" className={styles.navLink}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/shop" className={styles.navLink}>
              Shop
            </Link>
          </li>
          <li>
            <Link href="/about" className={styles.navLink}>
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className={styles.navLink}>
              Contact
            </Link>
          </li>
          </ul>
          <ul className={styles.navLinks}>
          <li>
            <Link href="/" className={styles.navLink}>
              <Image
                src="/images/user.png" // Path to your image
                alt="User Dashbaord"
                width={23} // Desired width of the image
                height={18} // Desired height of the image
              />
            </Link>
          </li>
          <li>
            <Link href="/search" className={styles.navLink}>
              <Image
                src="/images/search.png" // Path to your image
                alt="Search"
                width={23} // Desired width of the image
                height={18} // Desired height of the image
              />
            </Link>
          </li>
          <li>
            <Link href="/services" className={styles.navLink}>
              <Image
                src="/images/heart.png" // Path to your image
                alt="Favorite"
                width={23} // Desired width of the image
                height={18} // Desired height of the image
              />
            </Link>
          </li>
          <li>
            <Link href="/contact" className={styles.navLink}>
              <Image
                src="/images/shopping-cart.png" // Path to your image
                alt="Shopping cart"
                width={23} // Desired width of the image
                height={18} // Desired height of the image
              />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
    </>
  );
}
