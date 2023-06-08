import React from "react";

class About extends React.Component{
    render(){
        return(
            <div className="home-about">
                <div className="rec-logo"></div>
                <div className="about-us">
                    <h2>О НАС</h2>
                    <p>Музыка оказывает влияние на людей, влияет на культуру и просто делает все лучше! 
                       В The Record мы поставили перед собой цель полностью окунуться в различные жанры музыки и 
                       погрузиться в мир виниловых пластинок.

                    </p>
                </div>
                <div className="socials">
                    <img src="./assets/images/socials/twitter.svg" alt="twitter-logo"/>
                    <img src="./assets/images/socials/facebook.svg" alt="facebook-logo"/>
                    <img src="./assets/images/socials/inst.svg" alt="instagra-logo"/>
                </div>
            </div>
        )
    }
}
export default About