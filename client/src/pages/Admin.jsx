import React, { useState } from 'react';

import CreateArtist from '../components/modals/CreateArtist';
import CreateAlbum from '../components/modals/CreateAlbum';
import CreateRecord from '../components/modals/CreateRecord';
import CreateTrack from '../components/modals/CreateTrack';
import CreateGenre from '../components/modals/CreateGenre';

const Admin = () => {

    const [showArtist,setshowArtist] = useState(false)
    const handleClickArtist = ()=>{
        setshowArtist(!showArtist);
    }

    const [showAlbum,setshowAlbum] = useState(false)
    const handleClickAlbum = ()=>{ 
        setshowAlbum(!showAlbum);
    }

    const [showTrack,setshowTrack] = useState(false)
    const handleClickTrack = ()=>{
        setshowTrack(!showTrack);
    }

    const [showRecord,setshowRecord] = useState(false)
    const handleClickRecord = ()=>{
        setshowRecord(!showRecord);
    }

    
    const [showGenre,setshowGenre] = useState(false)
    const handleClickGenre = ()=>{
        setshowGenre(!showGenre);
    }



    return (
        <div className="admin_container ">
            <button onClick={handleClickArtist} className='admin_btn btnn'>Добавить исполнителя</button>
            {showArtist && <CreateArtist open={showArtist} hide={() => setshowArtist(false)} />}

            <button onClick={handleClickAlbum} className='admin_btn btnn'>  Добавить альбом</button>
            {showAlbum && <CreateAlbum open={showAlbum} hide={() => setshowAlbum(false)}/>}

            <button onClick={handleClickTrack} className='admin_btn btnn'>Добавить трек</button>
            {showTrack && <CreateTrack open={showTrack} hide={() => setshowTrack(false)}/>}

            <button onClick={handleClickRecord} className='admin_btn btnn'> Добавить пластинку</button>
            {showRecord && <CreateRecord open={showRecord} hide={() => setshowRecord(false)}/>}

            <button onClick={handleClickGenre} className='admin_btn btnn'>  Добавить жанр</button>
            {showGenre && <CreateGenre open={showGenre} hide={() => setshowGenre(false)}/>}

           
        </div>
    );
};

export default Admin;
