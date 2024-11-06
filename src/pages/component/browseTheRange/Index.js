import Image from "next/image";
import styles from "./browseTheRange.module.css";

export default function BrowseTheRange() {
    return <>
        <div className={styles.box}>
            <div className={styles.heading}>Browse The Range</div>
                <p className={styles.paragraph}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
        </div>
        <div className="row">
            <div className="col-sm-4">
                <div className={styles.imageContainer}>
                <Image src="/images/dining.png" fill  style={{ objectFit: 'cover' }}  alt="Dinning" />
                    </div>
                    <div className={styles.text}>Dinning</div>
            </div>
            <div className="col-sm-4">
                <div className={styles.imageContainer}>
                <Image src="/images/Image-living-room.png" fill  style={{ objectFit: 'cover' }}  alt="Dinning" />
                    </div>
                    <div className={styles.text}>Living Room</div>
            </div>
            <div className="col-sm-4">
                <div className={styles.imageContainer}>
                <Image src="/images/bedrooms.png" fill  style={{ objectFit: 'cover' }}  alt="Dinning" />
                    </div>
                    <div className={styles.text}>Bedrooms</div>
            </div>
        </div>

            </>
}
