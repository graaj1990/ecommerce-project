import React from 'react'
import Image from 'next/image';
import Banner from '../banner';
import styles from "./contact.module.css";
import { ContactForm } from './ContactForm';

export const ContactPage = () => {
  return (
        < >
          <Banner pageName="contact" />
          <div className={styles.contactContainer}>
            <div className={styles.header}>
                <h1>Get In Touch With Us</h1>
                <p>For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
              </div>
              <div className={styles.midContainer}>
                  <div className={styles.leftSection}>
                      <div className={styles.addressContainer}>
                          <Image className={styles.img} src="/svg/address.svg" width="23" height="23" alt="Address" />
                          <div className={styles.text}>
                              <h3>Address</h3>
                              <span>236 5th SE Avenue, New York NY10000,<br/> United States</span>
                          </div>
                      </div>
                      <div className={styles.addressContainer}>
                          <Image className={styles.img} src="/svg/phone.svg" width="23" height="23" alt="Address" />
                          <div className={styles.text}>
                              <h3>Phone</h3>
                              <span>Mobile: +(84) 546-6789
                                    <br/> Hotline: +(84) 456-6789</span>
                          </div>
                      </div>
                      <div className={styles.addressContainer}>
                          <Image className={styles.img} src="/svg/working-time.svg" width="23" height="23" alt="Address" />
                          <div className={styles.text}>
                              <h3>Working Time</h3>
                              <span>Monday-Friday: 9:00 - 22:00 <br/>
                                Saturday-Sunday: 9:00 - 21:00</span>
                          </div>
                      </div>
                  </div>
                  <div className={styles.rightSection}>
                      <ContactForm/>
                  </div>
              </div>
          </div>
        </>
  )
}
