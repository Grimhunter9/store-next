import styles from "./def.module.css"
import { PortableText } from "../../lib/client"


export default function def({ Def }) {

    return (
        <div className={styles.container}>

            <div className={styles.back} key={Def[0]} style={{ background: `url(${Def[0].poster.asset.url})`, backgroundSize: "cover" }}>

                <h1 className={styles.h1} key={Def[0].title}>{Def[0].title}</h1>

                <div className={styles.textcontainer} key={Def[0].description}><p className={styles.p1}><PortableText blocks={Def[0].description} className={styles.p1} /></p></div>

            </div>

        </div>
    )
}










