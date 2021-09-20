import styles from "./def.module.css"
import About from "../About/about"
import { PortableText } from "../../lib/client"


export default function def({ Def }) {

    return (
        <div className={styles.container}>

            <div className={styles.back} key={Def[0]} style={{ background: `url(${Def[0].poster.asset.url})`, backgroundSize: "cover" }}>

                <h1 className={styles.h1} key={Def[0].title}>{Def[0].title}</h1>

                <div className={styles.textcontainer} key={Def[0].description}><p className={styles.p1}>{Def[0].description}</p></div>

                <div className={styles.About}>
                    <About />
                </div>

            </div>





        </div>
    )
}










