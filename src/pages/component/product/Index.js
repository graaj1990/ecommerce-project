import Image from "next/image";
import styles from "./Product.module.css";

export default function Product({isDiscount, isNew}) {
    return <div className={styles.productContainer}>
            <div className={styles.imageContainer}>
                <Image src="/images/dining.png" fill  style={{ objectFit: 'cover' }}  alt="Dinning" />
            {isDiscount &&
            <div className={styles.imagePopContainer}>
                <Image src="/images/discount.png" width="48" height="48" alt="Dinning" />
                <span className={styles.discount} >30%</span>
                </div>
            }
            {isNew &&
            <div className={styles.imagePopContainer}>
                <Image src="/images/New.png" width="48" height="48" alt="Dinning" />
                <span className={styles.new} >New</span>
                </div>
            }
            </div>
             <div className={styles.productDetails}>
                <div className={styles.productName}>Grifo</div>
                <div className={styles.productInfo}>Grifo</div>
                <div className={styles.productPrice}>Rs. 1.500.000
                    <div className={styles.originalPrice}>Rp 14.000.000</div>
            </div>
            <div className={styles.overlay}>
                <div className="text-center ">
                    <button className={styles.addToCart}>Add to Cart</button>
                </div>
                <div className=" ">
                    <button className={styles.share}>
                        <Image className={styles.space} src="/images/product/share.png" width="14" height="12" alt="Share" />
                        Share</button>
                    <button className={styles.compare}>
                        <Image className={styles.space} src="/images/product/compare.png" width="14" height="12" alt="Compare" />
                        Compare</button>
                    <button className={styles.like}>
                        <Image className={styles.space} src="/images/product/like.png" width="14" height="12" alt="Like" />
                        Like</button>
                    </div>
            </div>
        </div>




            </div>
}
