
import styles from "./Rules.module.css"
import { Modal } from 'react-bootstrap/Modal'
import { Button } from "react-bootstrap";
import { useState } from "react";
export default function rules() {



    return (

        <div className={styles.background}>




            <div className={styles.container}>

                <div>
                    <h1 className={styles.h1}>*Here are some rules for flying a drone</h1>
                </div>

                <div className={styles.imgcontainer}>

                    <img className={styles.img} src="/dronerule.jpg" alt="" />

                </div>

                <div className={styles.listcontainer}>


                    <li className={styles.list}>1) Fly at or below 400 feet.</li>

                    <p className={styles.paragraph}>In general, you can only fly your drone in uncontrolled airspace below 400 feet above the ground ( AGL ).
                        Commercial drone operators are required to get permission from the FAA before flying in controlled airspace.
                    </p>

                    <li className={styles.list}>2) Keep your drone within sight.</li>

                    <p className={styles.paragraph}>If you use First Person View or similar technology,
                        you must have a visual observer always keep your drone within unaided sight (for example, no binoculars). You cannot be a pilot or visual observer for more than one drone operation at a time.</p>



                    <li className={styles.list}>3) Don't fly in restricted airspace.</li>

                    <p className={styles.paragraph} >The vast majority of drone flying is done in Class G airspace because it is the least restrictive type of airspace.
                        Although the FAA has no authority or responsibility to control air traffic in Class G airspace, drone pilots must remember that all FAA regulations still apply.</p>




                    <li className={styles.list}>4) Don't fly near other aircraft, especially near airports.</li>


                    <p className={styles.paragraph}>Drone operators should avoid flying near airports because it is difficult for manned aircraft to see and avoid a drone while flying.
                        Remember that drone operators must avoid manned aircraft and are responsible for any safety hazard their drone creates in an airport environment. </p>



                    <li className={styles.list}>5) Don't fly over groups of people.</li>


                    <p className={styles.paragraph}>Never fly over people who are crowded together.
                        A crowd is any group of people who cannot move away quickly because of the number of other people around them.
                        Never do this, no matter what size of drone or model aircraft you have</p>


                    <li className={styles.list}>6) Don't fly over stadiums or sporting events.</li>

                    <p className={styles.paragraph}> You cannot fly a drone over or near a stadium that seats at least 30,000 people from one hour before the event until more than an hour has passed after its completion. The FAA even goes so far as to outline these specific prohibited events:

                        Major League Baseball Game
                        National Football League Game
                        NCAA Division One Football Game
                        NASCAR Sprint Cup, Indy Car, and Champ Series Race</p>


                    <li className={styles.list}>7) Don't fly near emergency response efforts such as fires.</li>

                    <p className={styles.paragraph}>Flying a drone near a wildfire is dangerous and can cost lives. When people fly
                        drones near wildfires, fire response agencies often ground their aircraft to avoid
                        the potential for a midair collision. Delaying airborne response poses a threat to
                        firefighters on the ground, residents and property in nearby communities, and it
                        can allow wildfires to grow larger.</p>



                    <li className={styles.list}>8) Don't fly under the influence.</li>

                    <p className={styles.paragraph}>No person may act or attempt to act as a crewmember of a civil aircraft—

                        (1) Within 8 hours after the consumption of any alcoholic beverage;

                        (2) While under the influence of alcohol;

                        (3) While using any drug that affects the person’s faculties in any way contrary to safety; or

                        (4) While having an alcohol concentration of 0.04 or greater in a blood or breath specimen. Alcohol concentration means grams of alcohol per deciliter of blood or grams of alcohol per 210 liters of breath.</p>

                </div>





            </div>




        </div>
    )

}

