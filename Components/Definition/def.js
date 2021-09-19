import styles from "./def.module.css"

export default function def() {
 
    return (
        <div className={styles.container}>
            
            <h1 className={styles.h1}>*What is a Drone ?</h1>

            <div className={styles.imgcontainer}>

                <img className={styles.img} src="/what.jpg" alt="definition of a drone" />

            </div>

            <div className={styles.textcontainer}>

                <p className={styles.p1}>The term “drone” usually refers to any unpiloted aircraft.
                    Sometimes referred to as “Unmanned Aerial Vehicles" (UAVs),
                    these crafts can carry out an impressive range of tasks,
                    ranging from military operations to package delivery.
                    Drones can be as large as an aircraft or as small as the palm of your hand.</p>

            </div>




        </div>
    )
}


