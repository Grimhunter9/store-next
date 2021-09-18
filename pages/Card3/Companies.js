
import styles from "../../styles/companies.module.css"

export default function companies() {

    return (

        <div className={styles.background}>


            <div className={styles.container}>

                <div >
                    <h1 className={styles.h1}>*Here are Top 10 best companies for selling drones</h1>
                </div>

                <div className={styles.imgcontainer}>

                    <img className={styles.img} src="/com.jpg" alt="" />

                </div>

                <div className={styles.listcontainer}>

                    <li className={styles.list}>1)<a href="https://www.dji.com">DJI</a></li>
                    <p className={styles.paragraph}>DJI is one of the top consumer drone manufacturers, known mainly for their Mavic series.
                        The Mavi series has become the quintessential drone for new to intermediate pilots and videographers and the simultaneous launch in late 2018 of the Mavic 2 Pro and Mavic 2 Zoom was huge news in the industry.
                        In 2020, they launched the revolutionary Mavic Mini, packing high quality drone features into a tiny drone that weighs only a half pound.</p>




                    <li className={styles.list}>2)<a href="https://www.parrot.com/en/drones">Parrot</a></li>
                    <p className={styles.paragraph}>Although Parrot stepped away from the toy drone market in 2019, they still produce one of the best drones in the market.
                        Their ANAFI camera drone is always a favorite in its list around the web. Parrot also designs, develops and markets consumer products for smartphones and tablets other than consumer UAVs and drones.
                        They are also working with the US Department of Defense to build short – range military reconnaissance aircraft.</p>



                    <li className={styles.list}>3)<a href="https://shop.yuneec.com/eu">Yuneec</a></li>
                    <p className={styles.paragraph}>Yuneec first started innovating in the aircraft industry before creating the first commercially successful, ready-to-fly fixed wing RC airplane. Eventually, they transitioned into their increasingly popular aerial video quadcopter.
                        In early 2017, they announced the launch of the Typhoon H520, designed specifically for commercial applications as well as a  huge customer service initiative to provide high quality service. In 2018, adding to their list of first, they launched the first ever voice-controlled drone, Mantis Q.</p>




                    <li className={styles.list}>4)<a href="https://kespry.com/">Kespry</a></li>
                    <p className={styles.paragraph}>Kespry manufactures drones made specifically for capturing, viewing and analyzing aerial imagery and survey data.
                        Their customers include aggregates, mining, construction and surveying companies.</p>




                    <li className={styles.list}>5)<a href="https://auteldrones.com/">Autel Robotics</a></li>
                    <p className={styles.paragraph}>Autel Robotics have been delivering solutions for new aerial exploration through the market leading quadcopter and camera drone technology.
                        They emphasize transforming complex technology into simple solutions and creating easy-to-use aerial devices for photography /fiming and imaging.</p>



                    <li className={styles.list}>6)<a href="https://www.skydio.com/">Skydio</a></li>
                    <p className={styles.paragraph}>skydio was founded in 2014. In 2018, it launched the R1, which was widely regarded as a breakthrough in autonomous drones for consumers and as a platform for commercial development.
                        In 2019, the company launched Skydio 2, which sold out in a single day. Skydio 2 is built around the Skydio Autonomy Engine – the most advanced flying artificial intelligence system in the world.</p>



                    <li className={styles.list}>7)<a href="https://www.insitu.com/">Insitu</a></li>
                    <p className={styles.paragraph}>Inset runs the gamut uf drone services providing hardware in the form of commercial-focused drones; software for extracting intelligence from raw data gathered by drones; and drone-related services for commercial applications such as surveying and reconnaissance.
                        Their ScanEagle drone was designed for aerial imaging with diverse applications such as agricultural assessment, oil or gas pipeline inspection and force protection.</p>



                    <li className={styles.list}>8)<a href="https://delair.aero/">Delair</a></li>
                    <p className={styles.paragraph}>Delair is a leading provider of drone based solutions for enterprise.
                        The company’s offerings combine high performance, long range fixed-wing UAV hardware with sophisticated analytics technology and operational services. They’re well known for their fixed wig drones such as the UX11. But Delair does not only make drones. They also offer a full suite of industry-specific analytics software for aerial data processing as well as intuitive flight planning tools.
                        Their end0to0end solutions are used globally by customers in industries such as mining, construction, agriculture, utilities, transportation, oil and gas.</p>


                    <li className={styles.list}>9)<a href="https://www.ehang.com/ehangaav">EHang</a></li>
                    <p className={styles.paragraph}>EHang designs and manufactures drones that can be controlled entirely via a smartphone app.
                        Their GhostDrone 2.0 has some great features such as self protection which makes it automatically return in case of low battery or lost communication; dual sensors, so that a back up kicks in if the first sensor fails;and app control designed so that “smart algorithms” kick in to reduce human error during flight. EHang continues to explore the boundaries of the sky with their pilotless air taxi, the EHang 216 which seats two passengers.
                        The EHang 216 made its first US trial in early 2020.</p>



                    <li className={styles.list}>10)<a href="https://www.aerialtronics.com/en">Aerialtronics</a></li>
                    <p className={styles.paragraph}>Aerialtronics designs, produces and services commercial unmanned aircraft systems.
                        Their latest generation, the Altura Zenith combines state of the art technology with a flat, compact and lightweight design. With aside range of payload compatibility, from dual vision cameras to  gas sniffers to radiation detectors, Aerialtronics systems can be applied to a wide variety of segments including: Safety & Security, Inspection, Surveying & Mapping, Agriculture and Research.</p>

                </div>


            </div>

        </div>
    )
}