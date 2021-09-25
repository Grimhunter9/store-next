import styles from './Benefits.module.css'
import { sanityclient } from '../../lib/client'
import axios from 'axios'


const ben = `*[_type=="benefits"]{
  title,
  description,
  poster{asset->{url},  

}}`

export default function Benefits({ Fits }) {
  return (
    <div className={styles.background}>

      <div className={styles.container}>

        <div>
          <h1 className={styles.h1}>*Here are 10 the reasons to buy a drone</h1>
        </div>

        {
          Fits && Fits.map((hum) => (
            <div key={hum} className={styles.listcontainer}>

              <div key={hum} className={styles.imgcontainer2}>

                <img key={hum.poster} src={hum.poster.asset.url} className={styles.img} alt="images of the benefits" />

              </div>

              <li key={hum.title} className={styles.list}>{hum.title}</li>

              <p key={hum.description} className={styles.paragraph}>{hum.description}</p>

            </div>


          ))
        }

      </div>

    </div>
  )

}


export async function getStaticProps() {
  const Fits = await  sanityclient.fetch(ben)
  return {
    props: { Fits }
  }
}




