import React from "react"
import ProfilePic from "../profile.png"
import Buttons from "./Buttons"


export default function Head(){
    return (
        <header className="header">
            <img src={ProfilePic} alt="" className="header--image"/>
            <h1 className="header--name">Laura Smith</h1>
            <p className="header--jobtitle">Frontend Developer</p>
            <p className="header--weblink">laurasmith.website</p>
            <Buttons />
        </header>
    )
}