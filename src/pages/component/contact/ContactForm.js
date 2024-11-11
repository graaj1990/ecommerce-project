import React from 'react'
import styles from "./contact.module.css";

export const ContactForm = () => {
    return (
      <div className={styles.formContainer}>
            <form>
               <div>
                            <lable className={styles.formLable} >First Name</lable>
                            <input className={styles.formInput} placeholder="First Name" />
                </div>
                <div>
                            <lable className={styles.formLable}> Email Address</lable>
                            <input className={styles.formInput} placeholder="Email Address" />
                </div>
                <div>
                            <lable className={styles.formLable} >Subject</lable>
                            <input className={styles.formInput} placeholder="Subject" />
                </div>
                <div>
                            <lable className={styles.formLable} >Message</lable>
                    <textarea className={styles.formtextArea}>
                    </textarea>
                </div>
                <button  className={styles.formButton}>Submit</button>
            </form>
            </div>
  )
}
