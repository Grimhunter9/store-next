import styles from '../styles/Home.module.css'
import { sanityclient } from '../lib/client'
import Screen from "../Components/Veiwer/Screen"
import Definition from '../Components/Definition/def';
import About from '../Components/About/about';


const hello = `*[_type=='video']{
    title,
    vid{asset->{url},    
}}`


const grape = `*[_type=='definition']{

    title,
    description,
    poster{asset->{url},    
}}`



export default function Home({ Test , Def }) {
 

    return (
        <div className={styles.container}>


            <Screen Test={Test} />

            <div className={styles.Grouper}>

                <Definition  Def={Def} />

                <hr style={{ borderBottom: "2px solid white", marginLeft: "10vw", marginRight: "7vw" }} />


                <About />

                <div style={{ marginTop: "3vw" }}></div>

            </div>


        </div>
    )
}



export async function getStaticProps() {
    const Test = await sanityclient.fetch(hello);
    const Def = await sanityclient.fetch(grape)
    return {
        props: {

            Test,

            Def
        }

        
    }
    
    
}










