import React from "react";
import { useNavigate } from "react-router-dom";

export default function CatalogueGenreCard(props){ 
    const navigate = useNavigate()
    return(
        <>
            <div className="Card" onClick={()=> navigate('/catalogue')}>
                <div className="genreCard" style={{backgroundImage: `url(${props.item.name})`, backgroundSize: "cover"}}> 
                    {/* {props.name === 'Record1' &&<h3>{props.name}</h3>} */}
                </div>
                <h3>{props.item.genre}</h3>
            </div>
        </>
    ) 
}