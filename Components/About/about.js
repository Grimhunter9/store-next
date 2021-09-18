import styles from "./about.module.css"


export default function About() {
    return (

        <div className={styles.About}>


            <div style={{ color: "white" }}><h1>About drones</h1></div>

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
                            <a href="/Card1/Rules" className={styles.learn}>Learn more here ⮞</a>
                        </div>


                    </div>
                </div>



                <div className={styles.wrapper}>

                    <div className={styles.cardcontainer2}  >
                        <div>
                            <h1 className={styles.h1}>Reasons for buying a drone</h1>
                        </div>

                        <div>
                            <p className={styles.paragraph}>Why is having a drone helpful in our daily life here are reasons why  </p>
                        </div>

                        <div className={styles.divlearn}>
                            <a href="/Card2/Reasons" className={styles.learn}>Learn more here ⮞</a>
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
                            <a href="/Card3/Companies" className={styles.learn}>Learn more here ⮞ </a>
                        </div>

                    </div>
                </div>
            </div>


        </div>
    )

}
