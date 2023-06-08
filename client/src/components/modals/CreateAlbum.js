import React, {useContext, useEffect, useState} from 'react';
import {createAlbum} from "../../http/albumAPI"
import { Context } from '../..';
import { fetchArtists } from '../../http/artistAPI';


const CreateAlbum = (props)=>{
    const [albName, setAlbName] = useState('');
    const [albYear, setAlbYear] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');

    const{music} = useContext(Context)

    useEffect(() => { 
        fetchArtists().then(data => music.setArtists(data))
    }, [])


    const handleOptionClick = (option) => {
        const selectedArtist = music.artists.find(artist => artist.artistname === option);
        setSelectedOption(option);
      
        music.setSelectedArtist(selectedArtist);
        console.log(selectedArtist);
        setIsOpen(false);
      };
      
      const addAlbum = () => {
        if (!music.selectedArtist) {
          console.log('Артист не выбран');
          return;
        }
      
        const albumData = {
          albumname: albName,
          albumyear: albYear,
          artistid: music.selectedArtist.id
        };
      
        createAlbum(albumData).then((data) => {
          setAlbName('');
          setAlbYear('');
        });
      
        props.hide();
      };
      

      
    return(
       
        <dialog open={props.open} className='modal'>
            <h2>Добавление альбома</h2>
            <label className='modal_label'>
                Название:
                <input value={albName} onChange={e => setAlbName(e.target.value)} className='modal_input' type='text'/>
            </label>
            <label className='modal_label'>
                Год:
                <input value={albYear} onChange={e => setAlbYear(e.target.value)} className='modal_input' type='text'/>
            </label>
            {/* <label className='modal_label'>
                Исполнитель:
                <input onChange={()=> music.selectedArtist} className='modal_input' type='text'/>
            </label> */}
            <div className="dropdown">
                <button className="dropdown_btn" onClick={() => setIsOpen(!isOpen)}>
                    {selectedOption || 'Выберите исполнителя'}
                </button>
                {isOpen && (
                    <ul className="dropdown_menu">
                        {/* {music.artists.map(genre =>
                            <li onClick={() => handleOptionClick(`${genre.genrename}`)}>{genre.genrename}</li>
                        )} */}

                                {music.artists && music.artists.map((artist) => (
                                    <li key={artist.id} onClick={() =>{ handleOptionClick(`${artist.artistname}`)}}>
                                        {artist.artistname}
                                    </li>
                                ))}
                    </ul>
                )}
            </div>
        {/* SUBMIT */}
        <button onClick={addAlbum} className='btnn modal_btn'>SUBMIT </button>
       
        
        </dialog>
    )
}

export default CreateAlbum