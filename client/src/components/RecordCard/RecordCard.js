import React, { useContext } from "react";


export default function RecordCard({ item: { recordimage, recordname,artist,recordprice },onPlus }){
    const [isAdded, setIsAdded] = React.useState();
    const onClickPlus =() =>{
     
        onPlus({ item: { recordimage, recordname, artist, recordprice}});
        setIsAdded(!isAdded);
    };

    return(
        <>
                <div className="prod_card">
                <img className="prod_img" src={recordimage} alt="Record Image" />
                        <p className="prod_text prod_album">{recordname}</p>
                        <p className="prod_text prod_artist">{artist}</p>

                        <button className={isAdded ? "add_btn added":"add_btn"} onClick={onClickPlus}>{isAdded ? "ADDED TO CART" : "ADD"}</button>    
                </div>
        </>
    )
}