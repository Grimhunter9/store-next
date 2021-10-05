import styles from "./contacts.module.css"
import { sanityclient } from '../../lib/client'


const co = `*[_type=="Contacts"]
{ 
    title,
    header,
    BG{asset->{url}},
    Cards{asset->{url}},
    info,
    Check,
}`

export default function contacts({ contact }) {

    return (
        <div className={styles.allcontainer}>

            <div key={contact[1]} className={styles.background} style={{ background: `url(${contact[1].BG.asset.url})`, backgroundSize: "cover", }}>

                <div className={styles.title} key={contact[1]}>{contact[1].title}</div>

                <div className={styles.header} key={contact[1]}>{contact[1].header}</div>

            </div>




            <div className={styles.cardwrapper}>

                <div key={contact[1]} className={styles.wrap} style={{ background: `url(${contact[1].Cards.asset.url})`, backgroundSize: "cover", backgroundPosition: "center" }} >

                    <h1 className={styles.info} key={contact[1]} >{contact[1].info}</h1>

                    <button className={styles.check} key={contact[1]}>{contact[1].Check}</button>



                </div>


                <div key={contact[0]} className={styles.wrap} style={{ background: `url(${contact[0].Cards.asset.url})`, backgroundSize: "cover", backgroundPosition: "center" }}>

                    <h1 className={styles.info} key={contact[0]}>{contact[0].info}</h1>

                    <button className={styles.check2} key={contact[1]}>{contact[0].Check}</button>

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


