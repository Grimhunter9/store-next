import styles from '../../styles/Top5.module.css'
import { sanityclient } from '../../lib/client'
import { PortableText } from '../../lib/client';

const Try = `*[_type=="top5"]{
    title,
    number,
    description,
    features,
    vid{asset->{url},  
}}`



export default function Top5({ hello }) {



    return (

        <div className={styles.allContainer}>


            <div style={{ marginTop: "10vw", display: "flex", flexDirection: "column" }}>
                <div className={styles.info}>Here are the Top 5 best drones:</div>

                {
                    hello && hello.map((hum) => (

                        <div key={hum.id} className={styles.try} >

                            <video width="100%" height="650px" loop={true} autoPlay={true} controls={false} muted={true}>
                                <source src={hum.vid.asset.url} type="video/mp4" />
                            </video>

                            <div key={hum.title} className={styles.title}><h1 style={{ fontWeight: "bolder" }}>{hum.title}</h1></div>

                            <div key={hum.description} className={styles.textcontainer}><PortableText blocks={hum.description} /></div>

                            <div className={styles.featurecontainer}>
                                <h1 style={{ color: "white", marginLeft: "7.5vw", fontWeight: "bolder" }}>Features:</h1>
                                <ul  style={{ listStyle: "none" }} key={hum.features}>
                                    <li className={styles.list}>
                                        <PortableText blocks={hum.features} />
                                    </li>
                                </ul>
                            </div>


                        </div>
                    ))
                }

            </div>

        </div >
    )

}

export async function getStaticProps() {
    const hello = await sanityclient.fetch(Try)
    return {
        props: {

            hello
        }
    }
}















