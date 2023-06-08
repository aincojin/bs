import React, { useContext, useEffect } from "react";
import axios from "axios";
import Nnavbar from "../../components/Nnavbar";

import Cart from "../../components/Cart";
import RecordCard from "../../components/RecordCard/RecordCard"
import { Context } from "../..";
import { fetchGenres } from "../../http/genreAPI";
import { observer } from "mobx-react-lite";
import { fetchArtists } from "../../http/artistAPI";
import { fetchRecords } from "../../http/recordAPI";



const CatalogueFil = observer(() => {

   
    const{music} = useContext(Context)
    const{genretrack} = useContext(Context)
    const {cart} = useContext(Context)

    const [selectedGenre, setSelectedGenre] = React.useState(null);

    useEffect(() => {
        fetchGenres().then(data => genretrack.setGenres(data))
        fetchArtists().then(data => music.setArtists(data)); console.log('Selected Artist:', music.selectedArtist.artist);
        fetchRecords().then(data => {cart.setrecords(data); 
        console.log(data)})
    }, [])

    const productCards = [...cart.records]
    .filter(item => selectedGenre ? item.genreid === selectedGenre.id : true)
    .map(item => {
        
        return(
           
            <RecordCard
                key={item.id}
                item={item}
                artist={music.selectedArtist?.artist}
                onPlus={(obj) => onAddToCart({ ...obj, artist: music.selectedArtist?.artist })}
            />
          
        )
     })
    

    const [cartOpened, setCartOpened] = React.useState(false);
    const [cartItems, setCartItems] = React.useState([
    ]);
    const [searchValue, setsearchValue] = React.useState('');

    const onAddToCart =(obj)=>{ 
       setCartItems((prev)=>[...prev, obj]);
    };



    const handleSearchInputChange = (value) => {
        setsearchValue(value);
    };


    return(
        <>        

            {cartOpened && <Cart items ={cartItems} onCloseCart={() => setCartOpened(false)} />}
            <div className="filt_page">            
                <Nnavbar onSearchInputChange={handleSearchInputChange} searchValue={searchValue} onClickCart ={() => setCartOpened(true)} />
                 

                <div className="catalogName">CATALOGUE</div>

            </div>  
            <div className="products_wrapper"> 
                <div className="products_filters">
                    <div className="filters">
                        <div className="filt_genre filt">
                            <h3 className="filt_name" style={{fontWeight: "500",}}>Genre</h3>
                            <ul className="filter_li">
                                {genretrack.genres && [...genretrack.genres].map((genre) => (
                                    <li
                                    key={genre.id}
                                    onClick={() => setSelectedGenre(genre)}
                                  >
                                    {genre.genrename}
                                  </li>
                                  
                                ))}
                            </ul>
                        </div>
                    </div>         
                </div>
                <div className="catNtitle">
                    <h1 className="titleCat"> {searchValue? `Результаты поиска: "${searchValue}"`: "Все пластинки"}</h1>
                    
                    <div className="products_page">
                    
                        {productCards}
                        
                    </div>  
                </div>

            </div>
           
        </>
    )
   
})
export default CatalogueFil;

