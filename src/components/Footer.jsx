import React from "react"
import { faTwitter, faFacebookF, faInstagram, faGithub} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


export default function Footer(){
    return (
        <footer className="footer">
            <div className="footer--icon-container">
                <FontAwesomeIcon icon={faTwitter} className="footer--icon" />
            </div>

            <div className="footer--icon-container">
                <FontAwesomeIcon icon={faFacebookF} className="footer--icon" />
             </div>

            <div className="footer--icon-container">
                <FontAwesomeIcon icon={faInstagram} className="footer--icon" />
            </div>

                <div className="footer--icon-container">
                <FontAwesomeIcon icon={faGithub} className="footer--icon" />

                </div>
        </footer>
    )
}