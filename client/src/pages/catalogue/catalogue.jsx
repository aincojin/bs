import React, { useContext, useEffect } from "react";

import Nnavbar from "../../components/Nnavbar";
import CatalogueGenreData from "./CatalogueGenreData.json";
import CatalogueGenreCard from "../../components/CatalogueGenreCard";
import Cart from "../../components/Cart";
import { observer } from "mobx-react-lite";



const CatalogueNew = observer(() => {
    const genreCards = CatalogueGenreData.map(item => {
        return(
            <CatalogueGenreCard
                key={item.id}
                item={item}
            />
        )
    })

    const [cartOpened, setCartOpened] = React.useState(false);

    // const onChangeSearchInput = (e) =>{

    // }

   


    return(
        <>       

            {cartOpened && <Cart onCloseCart={() => setCartOpened(false)}/>}
            <div className="genre_page">            
                <Nnavbar onClickCart ={() => setCartOpened(true)}/>
                 

                <div className="catalogName">CATALOGUE</div>

                <div className="divScroll">
                        <img className="Larrow" 
                            onClick ={ () => {
                                    document.getElementById("container").scrollLeft -= 245;
                                    }}
                            style={{height:"225px", width:"70px"}}
                            src="./assets/images/icons/arrowL.svg" alt="arrow-left"/> 

                        <div id="container" className="catalogScroll">
                            {genreCards}
                        </div>

                        <img className="Rarrow" 
                            onClick ={ () => {
                                document.getElementById("container").scrollLeft += 245;
                            }}
                            style={{height:"225px", width:"70px"}}
                            src="./assets/images/icons/arrowR.svg" alt="arrow-right"/>

                </div>  
            </div>  
        </>
    )
   
})

export default CatalogueNew