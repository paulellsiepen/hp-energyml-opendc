import React from 'react';
import ContactSection from "../components/home/ContactSection";
import IntroSection from "../components/home/IntroSection";
import JumbotronHeader from "../components/home/JumbotronHeader";
import ModelingSection from "../components/home/ModelingSection";
import SimulationSection from "../components/home/SimulationSection";
import StakeholderSection from "../components/home/StakeholderSection";
import TeamSection from "../components/home/TeamSection";
import TechnologiesSection from "../components/home/TechnologiesSection";
import HomeNavbar from "../components/navigation/HomeNavbar";
import jQuery from "../util/jquery";
import "./Home.css";

class Home extends React.Component {
    componentDidMount() {
        const scrollOffset = 60;
        jQuery("#navbar").find("li a").click(function (e) {
            if (jQuery(e.target).parents(".auth-links").length > 0) {
                return;
            }
            e.preventDefault();
            jQuery(jQuery(this).attr('href'))[0].scrollIntoView();
            window.scrollBy(0, -scrollOffset);
        });
        jQuery("body").scrollspy({
            target: "#navbar",
            offset: scrollOffset
        });
    }

    render() {
        return (
            <div>
                <HomeNavbar/>
                <div className="body-wrapper page-container">
                    <JumbotronHeader/>
                    <IntroSection/>
                    <StakeholderSection/>
                    <ModelingSection/>
                    <SimulationSection/>
                    <TechnologiesSection/>
                    <TeamSection/>
                    <ContactSection/>
                </div>
            </div>
        );
    }
}

export default Home;
