import React from 'react';
import { Button } from '../Button/Button';
import videoIntro from "../../assests/introVideo.mp4";
import './SectionIntro.css';
import "../../App.scss"

function SectionIntro() {
    return (
        <div className="container">
            <video src={videoIntro} autoPlay loop muted />
            <h1>Welcome There</h1>
            <p>React Power</p>
            <div className="section-btns">
                <Button className="btns" styleBtn="btn--outline" sizeBtn="btn-large">Let's do this! Tech</Button>
                <Button className="btns" styleBtn="btn--primary" sizeBtn="btn-large">Let's do this! React</Button>
            </div>
        </div>
    )
}

export default SectionIntro
