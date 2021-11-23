import styles from "./contacts.module.css"
import { sanityclient } from '../../lib/client'
import { useState } from "react";


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

  
    const [addphone, setshow] = useState(false)

    const [addemail, setshow2] = useState(false)
  
    const closephone = () => setshow(!addphone)
  
    const view = () => setshow(true)
  
  
    const closemail = () => setshow2(!addemail)
  
    const view2 = () => setshow2(true)



    return (
        <div className={styles.allcontainer}>



            <div key={contact[1]} className={styles.background} style={{ background: `url(${contact[1].BG.asset.url})`, backgroundSize: "cover", }}>

                <div className={styles.title} key={contact[1]}>{contact[1].title}</div>

                <div className={styles.header} key={contact[1]}>{contact[1].header}</div>

            </div>






            {/*The wrapper that contains the cards that have both phone and email info inside the modal*/}

            <div className={styles.cardwrapper}>


                <div key={contact[1]} className={styles.wrap} style={{ background: `url(${contact[1].Cards.asset.url})`, backgroundSize: "cover", backgroundPosition: "center" }} >

                    <h1 className={styles.info} key={contact[1]} >{contact[1].info}</h1>

                    <button onClick={view} className={styles.check} key={contact[1]}>{contact[1].Check}</button>

                </div>


                <div key={contact[0]} className={styles.wrap} style={{ background: `url(${contact[0].Cards.asset.url})`, backgroundSize: "cover", backgroundPosition: "center" }}>

                    <h1 className={styles.info} key={contact[0]}>{contact[0].info}</h1>

                    <button onClick={view2} className={styles.check2} key={contact[1]}>{contact[0].Check}</button>

                </div>

            </div>

            {/*What the modals have inside them for both phone and email */}

            <div onClick={closephone} style={{ display: addphone ? "" : "none" }} className={styles.outerdiv}>
                <p className={styles.phonemod}>Here is the phone modal to add here</p>
            </div>

            <div onClick={closemail} style={{ display: addemail ? "" : "none" }} className={styles.outerdiv}>
                <p className={styles.emailmod}>Here is the email modal to add here</p>
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


