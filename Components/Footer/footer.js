import styles from "./footer.module.css"

export default function footer() {
    return (
        <div className={styles.endbody}>

            <div className={styles.imgcontainer}>
                <img className={styles.endlogo }src="/white.jpg" alt="" />
            </div>

            <div className={styles.endtext}> ©All Rights Reserved Terms of Use and Privacy Policy </div>

        </div>
    )
}


