import React from "react";
import "../../App.scss";
import SectionIntro from "../SectionIntro/SectionIntro";
import Info from "../SectionInfo/Info";
import Footer from "../Footer/Footer"

function Home() {
    return (
        <React.Fragment>
            <SectionIntro />
            <Info />
            <Footer />
        </React.Fragment>
    )

}
export default Home