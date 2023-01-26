import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faLinkedinIn} from "@fortawesome/free-brands-svg-icons"
 

export default function Buttons(){
    return (
        <div className="buttons">
            <button type="button" className="btn btn--email">
                <FontAwesomeIcon icon={faEnvelope} />
                Email
            </button>

            <button type="button" className="btn btn--linkedin">
                <FontAwesomeIcon icon={faLinkedinIn} />
                LinkedIn
            </button>
        </div>
    )
}