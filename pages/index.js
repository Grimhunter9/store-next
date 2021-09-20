import styles from '../styles/Home.module.css'
import { sanityclient } from '../lib/client'
import Screen from "../Components/Veiwer/Screen"
import Definition from '../Components/Definition/def';
import About from '../Components/About/about';

/****************************************************************************************************/

//this query is for the video screen in the home page 
const hello = `*[_type=='video']{
    title,
    vid{asset->{url},    
}}`


//this query is for the page in the defenition file 
const grape = `*[_type=='definition']{

    title,
    description,
    poster{asset->{url},    
}}`



/******************************************************************************************************/


export default function Home({ Test, Def, rul }) {

    return (
        <div className={styles.container}>

            <Screen Test={Test} />

            <div className={styles.Grouper}>

                <Definition Def={Def} />

               

            </div>


        </div>
    )
}





export async function getStaticProps() {
    const Test = await sanityclient.fetch(hello);
    const Def = await sanityclient.fetch(grape);
    return {
        props: { Test, Def }

    }

}










