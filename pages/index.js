import styles from '../styles/Home.module.css'
import { sanityclient } from '../lib/client'
import Screen from '../Components/Veiwer/screen';
import About from '../Components/About/about';


const hello = `*[_type=='video']{
    title,
    vid{asset->{url},    
}}`

export default function Home({ Test }) {

    return (
        <div className={styles.container}>


            <Screen Test={Test} />

            <div className={styles.Grouper}>

                <About />

            </div>


        </div>
    )
}

export async function getStaticProps() {
    const Test = await sanityclient.fetch(hello)
    return {
        props: {

            Test
        }
    }
}





