import styles from "./Info.module.css"
import image from "next/image"
import Carousel from 'react-bootstrap/Carousel'

export default function Info() {


  return (

    <div className={styles.Container} >



      <Carousel controls={false} fade className={styles.carcontainer}>

        <Carousel.Item interval={4000} className={styles.change}>
          <img
            className="d-block w-100"
            /*className={styles.img}*/
            src="/drone.jpg"
            alt="First slide"
          />

          <Carousel.Caption style={{ background: "red" }}>
            <h3>First slide label</h3>
            <p>This is the drone (1) .</p>
          </Carousel.Caption>

        </Carousel.Item>

        <Carousel.Item interval={4000} className={styles.change}>
          <img
            className="d-block w-100"
            /*className={styles.img}*/
            src="/drone2.jpg"
            alt="Second slide"
          />

          <Carousel.Caption style={{ background: "red" }}>
            <h3>Second slide label</h3>
            <p>This is the drone (2) .</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={4000} className={styles.change}>
          <img
            className="d-block w-100"
            /*className={styles.img}*/
            src="/drone-screen.jpg"
            alt="Third slide"
          />

          <Carousel.Caption style={{ background: "red" }}>
            <h3>Third slide label</h3>
            <p>This is the drone (3) .</p>
          </Carousel.Caption>
        </Carousel.Item>




      </Carousel>








    </div>
  )

}

