import styles from "./homeBanner.module.css";

export default function HomeBanner() {
    return <div className={styles.banner}>
        <div className={styles.newArrivals}>
            <div >
                <span className={styles.newArrivalsDes}>New Arrival</span>
                <span className={styles.descoverCollection}>Discover Our New Collection</span>
                <p className={styles.detail}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                <button className={styles.buyNow}>Buy now</button>
            </div>
        </div>
        </div>
}
