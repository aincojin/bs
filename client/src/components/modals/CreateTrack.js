import React, {useContext, useEffect, useState} from 'react';
import { Context } from '../..';
import { fetchGenres } from '../../http/genreAPI';
import { createTrack } from '../../http/trackAPI';
import { fetchAlbums } from '../../http/albumAPI';


const CreateTrack = (props)=>{
    const [trName, setTrName] = useState('');
    const [isOpenG, setIsOpenG] = useState(false);
    const [isOpenAl, setIsOpenAl] = useState(false);
    const [selectedOptionG, setSelectedOptionG] = useState('');
    const [selectedOptionAl, setSelectedOptionAl] = useState('');

    const {genretrack} = useContext(Context)
    const{music} = useContext(Context)

    useEffect(() => { 
        fetchGenres().then(data => genretrack.setGenres(data))
        fetchAlbums().then(data => music.setAlbums(data))
    }, [])

    const handleOptionClickAl = (optionAl) => {
        const selectedAlbum = music.albums.find(album => album.albumname === optionAl);
        setSelectedOptionAl(optionAl);
      
        music.setSelectedAlbum(selectedAlbum);
        console.log(selectedAlbum);
        setIsOpenAl(false);
    }

    const handleOptionClickG = (optionG) => {
        const selectedGenre = genretrack.genres.find(genre => genre.genrename === optionG);
        setSelectedOptionG(optionG);
        genretrack.setSelectedGenre(selectedGenre);
        console.log(selectedGenre);
        setIsOpenG(false);
    }

    const addTrack = () => {
        if (!genretrack.selectedGenre) {
          console.log('Жанр не выбран');
          return;
        }
        if (!music.selectedAlbum) {
            console.log('Альбом не выбран');
            return;
        }

        const trackData = {
          trackname: trName,
          genreid : genretrack.selectedGenre.id,
          albumid: music.selectedAlbum.id
        };
      
        createTrack(trackData).then((data) => {
          setTrName('');
        });
      
        props.hide();
      };
      

    return(
       
        <dialog open={props.open} className='modal'>
            <h2>Добавление трека</h2>
            <label className='modal_label'>
                Название:
                <input value={trName} onChange={e => setTrName(e.target.value)} className='modal_input' type='text'/>
            </label>
            <div className="dropdown">
                <button className="dropdown_btn" onClick={() => setIsOpenAl(!isOpenAl)}>
                    {selectedOptionAl || 'Выберите альбом'}
                </button>
                {isOpenAl && (
                    <ul className="dropdown_menu">
                                {music.albums && music.albums.map((album) => (
                                    <li key={album.id} onClick={() =>{ handleOptionClickAl(`${album.albumname}`)}}>
                                        {album.albumname}
                                    </li>
                                ))}
                    </ul>
                )}
            </div>
            <div className="dropdown">
                <button className="dropdown_btn" onClick={() => setIsOpenG(!isOpenG)}>
                    {selectedOptionG || 'Выберите жанр'}
                </button>
                {isOpenG && (
                    <ul className="dropdown_menu">
                        {/* {genretrack.genres.map(genre =>
                            <li onClick={() => handleOptionClick(`${genre.genrename}`)}>{genre.genrename}</li>
                        )} */}

                                {genretrack.genres && genretrack.genres.map((genre) => (
                                    <li key={genre.id} onClick={() => { handleOptionClickG(`${genre.genrename}`)}}>
                                        {genre.genrename}
                                    </li>
                                ))}
                    </ul>
                )}
            </div>
        {/* SUBMIT */}
        <button onClick={addTrack} className='btnn modal_btn'>SUBMIT </button>
        
        
        </dialog>
    )
}

export default CreateTrack