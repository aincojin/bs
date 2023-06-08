import React from "react";
import { useNavigate } from "react-router-dom";
import HomeCatArtistCard from "./HomeCatArtistCard";
import home_cat_data from "./home_cat_data"

export default function HomeCatalogue() {
        const navigate = useNavigate()
        
        return(
            <>
            <div className="left-column-description">
                                <div className="intro">
                                    <h1 className="catname">Sade</h1>                   
                                    <img className="autograph" src="./assets/images/image.png" alt="Sade autograph"/>
                                </div>
                                <div className="box-description">
                                    <h2>Genre: soul</h2>
                                    <img className="divider" src="./assets/images/divider.png" alt="" />     
                                    <p className="description">
                                        The New Yorker described Sade's voice as a "grainy contralto full of air that betrays a slight ache but no agony,
                                        and values even imperfect dignity over a show of pain".
                                    </p>
                                    <p className="description">
                                        BBC called her songwriting "sufficiently soulful and jazzy yet poppy,
                                        funky yet easy listening, to appeal to fans of all those genres." 
                                        The New Yorker wrote, the band's "easy" sound backing songs "exploring the heavier lifting inside love:
                                        commitment, consistency, friendship."
                                    </p>
                                    <p className="description">
                                        Her success has been attributed to a combination
                                        of her unique beauty and mysterious persona.
                                    </p>
                                    <button className="btn browse-music" onClick={()=> navigate('/artist-page')}>Browse Music</button>
                                </div>
                                <button className="btn btn-browse" onClick={()=>navigate('/catalogue')}>Browse by genre</button>
                            </div>

            <div className="right-column-description">
                <img className="artistImage" src="./assets/images/sadewobg.png" alt="Sade black and white" />
            </div>
                <div className="other-artists">
                    <div className="otherA art1"></div>
                    <div className="otherA art2"></div>
                    <div className="otherA art3"></div>
                </div>

            </>
        )
    }
