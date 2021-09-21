import styles from "./about.module.css"
import Modal from 'react-bootstrap/Modal'
import { Button } from 'react-bootstrap';
import { useState } from "react";


export default function About({ das, naf, hep }) {


    const [modalShow, setModalShow] = useState(false);

    const [modalShow2, setModalShow2] = useState(false)

    const view = () => setModalShow(!modalShow);

    const view2 = () => setModalShow2(!modalShow2)



    return (


        <div    className={styles.About}>


            <div className={styles.about} >
                <h1 className={styles.ad}>*About drones</h1>
            </div>

            <div className={styles.cardholder}>


                <div className={styles.wrapper}>


                    <div style={{ background: `url(${das[0].poster.asset.url})`, backgroundSize: "cover" }} className={styles.cardcontainer} >

                        <div key={das[0]}>
                            <h1 className={styles.h1}>{das[0].header}</h1>
                        </div>

                        <div key={das[0]} >
                            <p className={styles.paragraph}>{das[1].title}</p>
                        </div>


                        <div key={das[0]} className={styles.divlearn}>
                            <p onClick={view} className={styles.learn}>{das[0].info}</p>
                        </div>


                        <Modal onHide={() => setModalShow(false)} show={modalShow} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>

                            <Modal.Header style={{ background: "#1E1C1F", color: "white" }}>

                                <Modal.Title id="contained-modal-title-vcenter">
                                    *Here are some rules for flying a drone
                                </Modal.Title>

                            </Modal.Header>

                            <Modal.Body className={styles.con}>

                                <div className={styles.imgcontainer}>

                                    <img className={styles.img} src="/dronerule.jpg" alt="" />

                                </div>

                                {
                                    naf && naf.map((hi) => (

                                        <div className={styles.listcontainer}>


                                            <li className={styles.list}>{hi.reason}</li>

                                            <p className={styles.paragraph2}>{hi.description}</p>

                                        </div>


                                    ))
                                }


                            </Modal.Body>

                            <Modal.Footer className={styles.con}>
                                <Button onClick={view}>Close</Button>
                            </Modal.Footer>



                        </Modal>

                    </div>
                </div>



                <div className={styles.wrapper}>

                    <div style={{ background: `url(${das[1].poster.asset.url})`, backgroundSize: "cover", backgroundPosition: "center" }} className={styles.cardcontainer3} >

                        <div key={das[1]}>
                            <h1 className={styles.h1}>{das[0].header}</h1>
                        </div>

                        <div key={das[1]} >
                            <p className={styles.paragraph}>{das[1].title}</p>
                        </div>


                        <div key={das[1]} className={styles.divlearn}>
                            <p onClick={view2} className={styles.learn}>{das[1].info}</p>
                        </div>


                        <Modal onHide={() => setModalShow2(false)} show={modalShow2} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>

                            <Modal.Header style={{ background: "#1E1C1F", color: "white" }}>

                                <Modal.Title id="contained-modal-title-vcenter">
                                    *Here are Top best companies for selling drones
                                </Modal.Title>

                            </Modal.Header>

                            <Modal.Body className={styles.con}>

                                <div className={styles.container}>

                                    <div className={styles.imgcontainer}>

                                        <img className={styles.img} src="/com.jpg" alt="" />

                                    </div>

                                    {
                                        hep && hep.map((bye) => (

                                            <div className={styles.listcontainer}>

                                                <li className={styles.list}><a href={bye.url}>{bye.title}</a></li>

                                                <p className={styles.paragraph3}>{bye.description}</p>


                                            </div>


                                        ))
                                    }



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
