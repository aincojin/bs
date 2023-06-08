import React, {useContext, useEffect, useState} from 'react';
import { Context } from '../..';
import { fetchAlbums } from '../../http/albumAPI';
import { createRecord } from '../../http/recordAPI';
import { fetchGenres } from '../../http/genreAPI';
import { fetchArtists } from '../../http/artistAPI';

const CreateRecord = (props)=>{
    const {genretrack} = useContext(Context)
    const {music} = useContext(Context)
    const [recName, setRecName] = useState('')
    const [recPrice, setRecPrice] = useState(0)
    const [file,setFile] = useState(null)
    const [isOpenAl, setIsOpenAl] = useState(false);
    const [selectedOptionAl, setSelectedOptionAl] = useState('');
    const [isOpenG, setIsOpenG] = useState(false);
    const [selectedOptionG, setSelectedOptionG] = useState('');
    const [isOpenAr, setIsOpenAr] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');



    useEffect(() => { 
        fetchAlbums().then(data => music.setAlbums(data)) 
        fetchGenres().then(data => genretrack.setGenres(data))
        fetchArtists().then(data => music.setArtists(data))
    }, [])

   
    const selectFile = (e) => {
        setFile(e.target.files[0]);
      };
      

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
    const handleOptionClickAr = (optionAr) => {
        const selectedArtist = music.artists.find(artist => artist.artistname === optionAr);
        setSelectedOption(optionAr);
        console.log(music.selectedArtist.id);
        music.setSelectedArtist(selectedArtist);
        console.log(selectedArtist);
        setIsOpenAr(false);
      };
      

    const addRecord = () => {
        if (!music.selectedAlbum) {
          console.log('Альбом не выбран');
          return;
        }
        if (!genretrack.selectedGenre) {
            console.log('Жанр не выбран');
            return;
          }
          if (!music.selectedArtist) {
            console.log('Артист не выбран');
            return;
          }
      
        const recordData = {
            
          recordname: recName,
          recordprice: `${recPrice}`,
          recordimage: file,
          albumid: music.selectedAlbum.id,
          genreid : genretrack.selectedGenre.id,
          artistid: music.selectedArtist.id
        };
        
      
        createRecord(recordData).then((data) => {
          setRecName('');
          setRecPrice('');
        });
      console.log('recordData:', recordData);
        props.hide();
      };
      
    return(
       
        <dialog open={props.open} className='modal'>
            <h2>Добавление пластинки</h2>
            <label className='modal_label'>
                Название:
                <input value={recName} onChange={e => setRecName(e.target.value)} className='modal_input' type='text'/>
            </label>
            <label className='modal_label'>
                Цена:
                <input value={recPrice} onChange={e => setRecPrice(Number(e.target.value))} className='modal_input' type='number'/>
            </label>
            <label className='modal_label'>
                Обложка:
                <input onChange={selectFile} className='modal_input' type='file'/>
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
                                {genretrack.genres && genretrack.genres.map((genre) => (
                                    <li key={genre.id} onClick={() => { handleOptionClickG(`${genre.genrename}`)}}>
                                        {genre.genrename}
                                    </li>
                                ))}
                    </ul>
                )}
            </div>
            <div className="dropdown">
                <button className="dropdown_btn" onClick={() => setIsOpenAr(!isOpenAr)}>
                    {selectedOption || 'Выберите исполнителя'}
                </button>
                {isOpenAr && (
                    <ul className="dropdown_menu">
                                {music.artists && music.artists.map((artist) => (
                                    <li key={artist.id} onClick={() =>{ handleOptionClickAr(`${artist.artistname}`)}}>
                                        {artist.artistname}
                                    </li>
                                ))}
                    </ul>
                )}
            </div>
        {/* SUBMIT */}
        <button onClick={addRecord} className='btnn modal_btn'>SUBMIT </button>
        
        
        </dialog>
    )
}
export default CreateRecord