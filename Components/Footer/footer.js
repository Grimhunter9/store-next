
import Image from "next/image"
export default function footer() {
    return (
        <div className="endbody">

            <div className="imgcontainer">
                <Image className="endlogo" src="/white.jpg" alt="" />
            </div>

            <div className="endtext"> ©All Rights Reserved Terms of Use and Privacy Policy </div>

        </div>
    )
}


