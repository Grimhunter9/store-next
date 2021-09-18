import React, { useEffect, useState } from 'react'

function scroll() {

    const [scrollTop, setscrollTop]=useState(0);

    const onscroll=()=>{

        const winscroll= document.documentElement.scrollTop;
        const height= document.documentElement.scrollHeight - document.documentElement.clientHeight

        const scrolled =(winscroll/height)*100

        setscrollTop(scrolled)

    }

    useEffect(()=>{

        window.addEventListener("scroll", onscroll)

        return ()=>window.removeEventListener("scroll",onscroll)

    }, [])


 
    return (

        <div className="scroll-contanier">
            <div >
                <div className="progress-bar" style={{width:`${scrollTop}%`}}></div>
            </div>

        </div>
    )
}

export default scroll
