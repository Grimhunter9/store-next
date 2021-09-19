import styles from "./about.module.css"
import Link from "next/link"


export default function About() {
    return (

        <div className={styles.About}>


            <div className={styles.about} >
                <h1 className={styles.ad}>*About drones</h1>
            </div>

            <div className={styles.cardholder}>


                <div className={styles.wrapper}>

                    <div className={styles.cardcontainer} >
                        <div>
                            <h1 className={styles.h1}>Rules about flying a drone</h1>
                        </div>

                        <div >
                            <p className={styles.paragraph}>Here are some rules you need to know to fly a drone</p>
                        </div>


                        <div className={styles.divlearn}>
                            <Link href="/Card1/Rules" className={styles.learn}>Learn more here ⮞</Link>
                        </div>


                    </div>
                </div>



                <div className={styles.wrapper}>

                    <div className={styles.cardcontainer3} >
                        <div>
                            <h1 className={styles.h1}>The best companies for selling drones </h1>
                        </div>

                        <div>
                            <p className={styles.paragraph}>Not many companies produce high quality drones </p>
                        </div>

                        <div className={styles.divlearn}>
                            <Link href="/Card2/Companies" className={styles.learn}>Learn more here ⮞</Link>
                        </div>

                    </div>
                </div>
            </div>


        </div>
    )

}
