import React from 'react';
import Image from 'next/image';
import styles from "./Footer.module.css";

export const TopFooter = () => {
  return (
      <div className={styles.topContainer}>
          <div className={styles.item}>
              <div className={styles.itemContainer}>
                          <Image className={styles.itemImage} src="/svg/High-quality.svg" width="23" height="23" alt="Address" />
                          <div className={styles.itemText}>
                              <h3>High Quality</h3>
                              <span>crafted from top materials</span>
                  </div>
                  </div>
          </div>
          <div className={styles.item}>
              <div className={styles.itemContainer}>
                          <Image className={styles.itemImage} src="/svg/guarantee.svg" width="23" height="23" alt="Address" />
                          <div className={styles.itemText}>
                              <h3>Warranty Protection</h3>
                              <span>crafted from top materials</span>
              </div>
              </div>
          </div>
          <div className={styles.item}>
              <div className={styles.itemContainer}>
                          <Image className={styles.itemImage} src="/svg/shipping.svg" width="23" height="23" alt="Address" />
                          <div className={styles.itemText}>
                              <h3>Free Shipping</h3>
                              <span>Order over 150 $</span>
              </div>
              </div>
          </div>
          <div className={styles.item}>
              <div className={styles.itemContainer}>
                          <Image className={styles.itemImage} src="/svg/customer-support.svg" width="23" height="23" alt="Address" />
                          <div className={styles.itemText}>
                              <h3>24 / 7 Support</h3>
                              <span>Dedicated support</span>
                  </div>
                  </div>
            </div>
      </div>
  )
}
