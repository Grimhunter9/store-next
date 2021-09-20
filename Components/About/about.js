import styles from "./about.module.css"
import Modal from 'react-bootstrap/Modal'
import { Button } from 'react-bootstrap';
import { useState } from "react";


export default function About() {


    const [modalShow, setModalShow] = useState(false);
    
    const [modalShow2, setModalShow2] = useState(false)

    const view = () => setModalShow(!modalShow);
    const view2 = () => setModalShow2(!modalShow2)

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
                            <p onClick={view} className={styles.learn}>Learn more here ⮞</p>
                        </div>

                        <Modal onClick={view} show={modalShow} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>

                            <Modal.Header style={{ background: "#1E1C1F", color: "white" }}>

                                <Modal.Title id="contained-modal-title-vcenter">
                                    *Here are some rules for flying a drone
                                </Modal.Title>

                            </Modal.Header>

                            <Modal.Body className={styles.con}>

                                <div className={styles.imgcontainer}>

                                    <img className={styles.img} src="/dronerule.jpg" alt="" />

                                </div>

                                <div className={styles.listcontainer}>


                                    <li className={styles.list}>1) Fly at or below 400 feet.</li>

                                    <p className={styles.paragraph2}>In general, you can only fly your drone in uncontrolled airspace below 400 feet above the ground ( AGL ).
                                        Commercial drone operators are required to get permission from the FAA before flying in controlled airspace.
                                    </p>

                                    <li className={styles.list}>2) Keep your drone within sight.</li>

                                    <p className={styles.paragraph2}>If you use First Person View or similar technology,
                                        you must have a visual observer always keep your drone within unaided sight (for example, no binoculars).
                                        You cannot be a pilot or visual observer for more than one drone operation at a time.</p>



                                    <li className={styles.list}>3) Don't fly in restricted airspace.</li>

                                    <p className={styles.paragraph2} >The vast majority of drone flying is done in Class G airspace because it is the least restrictive type of airspace.
                                        Although the FAA has no authority or responsibility to control air traffic in Class G airspace, drone pilots must remember that all FAA regulations still apply.</p>




                                    <li className={styles.list}>4) Don't fly near other aircraft, especially near airports.</li>


                                    <p className={styles.paragraph2}>Drone operators should avoid flying near airports because it is difficult for manned aircraft to see and avoid a drone while flying.
                                        Remember that drone operators must avoid manned aircraft and are responsible for any safety hazard their drone creates in an airport environment. </p>



                                    <li className={styles.list}>5) Don't fly over groups of people.</li>


                                    <p className={styles.paragraph2}>Never fly over people who are crowded together.
                                        A crowd is any group of people who cannot move away quickly because of the number of other people around them.
                                        Never do this, no matter what size of drone or model aircraft you have</p>


                                    <li className={styles.list}>6) Don't fly over stadiums or sporting events.</li>

                                    <p className={styles.paragraph2}> You cannot fly a drone over or near a stadium that seats at least 30,000 people from one hour before the event until more than an hour has passed after its completion.
                                        The FAA even goes so far as to outline these specific prohibited events:

                                        Major League Baseball Game
                                        National Football League Game
                                        NCAA Division One Football Game
                                        NASCAR Sprint Cup, Indy Car, and Champ Series Race</p>


                                    <li className={styles.list}>7) Don't fly near emergency response efforts such as fires.</li>

                                    <p className={styles.paragraph2}>Flying a drone near a wildfire is dangerous and can cost lives. When people fly
                                        drones near wildfires, fire response agencies often ground their aircraft to avoid
                                        the potential for a midair collision. Delaying airborne response poses a threat to
                                        firefighters on the ground, residents and property in nearby communities, and it
                                        can allow wildfires to grow larger.</p>



                                    <li className={styles.list}>8) Don't fly under the influence.</li>

                                    <p className={styles.paragraph2}>No person may act or attempt to act as a crewmember of a civil aircraft—

                                        (1) Within 8 hours after the consumption of any alcoholic beverage,

                                        (2) While under the influence of alcohol,

                                        (3) While using any drug that affects the person’s faculties in any way contrary to safety or

                                        (4) While having an alcohol concentration of 0.04 or greater in a blood or breath specimen. Alcohol concentration means grams of alcohol per deciliter of blood or grams of alcohol per 210 liters of breath.</p>

                                </div>

                            </Modal.Body>

                            <Modal.Footer className={styles.con}>
                                <Button onClick={view}>Close</Button>
                            </Modal.Footer>



                        </Modal>




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
                            <p onClick={view2} className={styles.paragraph}>Learn more here ⮞</p>
                        </div>

                        <Modal onClick={view2} show={modalShow2} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>

                            <Modal.Header style={{ background: "#1E1C1F", color: "white" }}>

                                <Modal.Title id="contained-modal-title-vcenter">
                                    *Here are Top 10 best companies for selling drones
                                </Modal.Title>

                            </Modal.Header>

                            <Modal.Body className={styles.con}>
                                
                                <div className={styles.container}>



                                    <div className={styles.imgcontainer}>

                                        <img className={styles.img} src="/com.jpg" alt="" />

                                    </div>

                                    <div className={styles.listcontainer}>

                                        <li className={styles.list}>1)<a href="https://www.dji.com">DJI</a></li>
                                        <p className={styles.paragraph3}>DJI is one of the top consumer drone manufacturers, known mainly for their Mavic series.
                                            The Mavi series has become the quintessential drone for new to intermediate pilots and videographers and the simultaneous launch in late 2018 of the Mavic 2 Pro and Mavic 2 Zoom was huge news in the industry.
                                            In 2020, they launched the revolutionary Mavic Mini, packing high quality drone features into a tiny drone that weighs only a half pound.</p>




                                        <li className={styles.list}>2)<a href="https://www.parrot.com/en/drones">Parrot</a></li>
                                        <p className={styles.paragraph3}>Although Parrot stepped away from the toy drone market in 2019, they still produce one of the best drones in the market.
                                            Their ANAFI camera drone is always a favorite in its list around the web. Parrot also designs, develops and markets consumer products for smartphones and tablets other than consumer UAVs and drones.
                                            They are also working with the US Department of Defense to build short – range military reconnaissance aircraft.</p>



                                        <li className={styles.list}>3)<a href="https://shop.yuneec.com/eu">Yuneec</a></li>
                                        <p className={styles.paragraph3}>Yuneec first started innovating in the aircraft industry before creating the first commercially successful, ready-to-fly fixed wing RC airplane. Eventually, they transitioned into their increasingly popular aerial video quadcopter.
                                            In early 2017, they announced the launch of the Typhoon H520, designed specifically for commercial applications as well as a  huge customer service initiative to provide high quality service. In 2018, adding to their list of first, they launched the first ever voice-controlled drone, Mantis Q.</p>




                                        <li className={styles.list}>4)<a href="https://kespry.com/">Kespry</a></li>
                                        <p className={styles.paragraph3}>Kespry manufactures drones made specifically for capturing, viewing and analyzing aerial imagery and survey data.
                                            Their customers include aggregates, mining, construction and surveying companies.</p>




                                        <li className={styles.list}>5)<a href="https://auteldrones.com/">Autel Robotics</a></li>
                                        <p className={styles.paragraph3}>Autel Robotics have been delivering solutions for new aerial exploration through the market leading quadcopter and camera drone technology.
                                            They emphasize transforming complex technology into simple solutions and creating easy-to-use aerial devices for photography /fiming and imaging.</p>



                                        <li className={styles.list}>6)<a href="https://www.skydio.com/">Skydio</a></li>
                                        <p className={styles.paragraph3}>skydio was founded in 2014. In 2018, it launched the R1, which was widely regarded as a breakthrough in autonomous drones for consumers and as a platform for commercial development.
                                            In 2019, the company launched Skydio 2, which sold out in a single day. Skydio 2 is built around the Skydio Autonomy Engine – the most advanced flying artificial intelligence system in the world.</p>



                                        <li className={styles.list}>7)<a href="https://www.insitu.com/">Insitu</a></li>
                                        <p className={styles.paragraph3}>Inset runs the gamut uf drone services providing hardware in the form of commercial-focused drones; software for extracting intelligence from raw data gathered by drones; and drone-related services for commercial applications such as surveying and reconnaissance.
                                            Their ScanEagle drone was designed for aerial imaging with diverse applications such as agricultural assessment, oil or gas pipeline inspection and force protection.</p>



                                        <li className={styles.list}>8)<a href="https://delair.aero/">Delair</a></li>
                                        <p className={styles.paragraph3}>Delair is a leading provider of drone based solutions for enterprise.
                                            The company’s offerings combine high performance, long range fixed-wing UAV hardware with sophisticated analytics technology and operational services. They’re well known for their fixed wig drones such as the UX11. But Delair does not only make drones. They also offer a full suite of industry-specific analytics software for aerial data processing as well as intuitive flight planning tools.
                                            Their end0to0end solutions are used globally by customers in industries such as mining, construction, agriculture, utilities, transportation, oil and gas.</p>


                                        <li className={styles.list}>9)<a href="https://www.ehang.com/ehangaav">EHang</a></li>
                                        <p className={styles.paragraph3}>EHang designs and manufactures drones that can be controlled entirely via a smartphone app.
                                            Their GhostDrone 2.0 has some great features such as self protection which makes it automatically return in case of low battery or lost communication; dual sensors, so that a back up kicks in if the first sensor fails;and app control designed so that “smart algorithms” kick in to reduce human error during flight. EHang continues to explore the boundaries of the sky with their pilotless air taxi, the EHang 216 which seats two passengers.
                                            The EHang 216 made its first US trial in early 2020.</p>



                                        <li className={styles.list}>10)<a href="https://www.aerialtronics.com/en">Aerialtronics</a></li>
                                        <p className={styles.paragraph3}>Aerialtronics designs, produces and services commercial unmanned aircraft systems.
                                            Their latest generation, the Altura Zenith combines state of the art technology with a flat, compact and lightweight design. With aside range of payload compatibility, from dual vision cameras to  gas sniffers to radiation detectors, Aerialtronics systems can be applied to a wide variety of segments including: Safety & Security, Inspection, Surveying & Mapping, Agriculture and Research.</p>

                                    </div>


                                </div>

                            </Modal.Body>

                            <Modal.Footer className={styles.con}>
                                <Button onClick={view2}>Close</Button>
                            </Modal.Footer>

                        </Modal>




                    </div>
                </div>
            </div>


        </div>
    )

}
