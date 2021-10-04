import styles from "./contacts.module.css"
import { sanityclient } from '../../lib/client'


const co = `*[_type=="Contacts"]{title,header, BG{asset->{url}},}`

export default function contacts({ contact }) {

    return (
        <div className={styles.allcontainer}>

            <div key={contact[0]} className={styles.background} style={{ background: `url(${contact[0].BG.asset.url})`, backgroundSize: "cover", backgroundPosition: "center" }}>

                <div className={styles.title} key={contact[0]}>{contact[0].title}</div>

                <div className={styles.header} key={contact[0]}>{contact[0].header}</div>

            </div>




            <div className={styles.cardwrapper}>

                <div className={styles.wrap}>

                    <h1>hello there card 1</h1>


                </div>


                <div className={styles.wrap}>

                    <h1>hello there card 2</h1>

                </div>

            </div>



        </div>





    )
}

export async function getStaticProps() {

    const contact = await sanityclient.fetch(co);

    return {

        props: { contact }
    }
}


