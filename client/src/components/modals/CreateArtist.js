import React, { useState } from 'react';
import { Alert, Form } from 'react-bootstrap';
import { createArtist } from "../../http/artistAPI";

const CreateArtist = (props) => {
    const [artName, setArtName] = useState('');
    const [artCountry, setArtCountry] = useState('');

    const addArtist = () => {
        const artistData = {
            artistname: artName,
            country: artCountry
        };

        createArtist(artistData).then(data => {
            setArtName('');
            setArtCountry('');
        });

        props.hide();
    };

    return (
        <dialog open={props.open} className='modal'>
            <h2>Добавление исполнителя</h2>
            <label className='modal_label'>
                Имя:
                <input value={artName} onChange={e => setArtName(e.target.value)} className='modal_input' type='text' />
            </label>
            <label className='modal_label'>
                Страна:
                <input value={artCountry} onChange={e => setArtCountry(e.target.value)} className='modal_input' type='text' />
            </label>
            
            {/* SUBMIT */}
            <button onClick={addArtist} className='btnn modal_btn'>SUBMIT</button>
        </dialog>
    );
};

export default CreateArtist;
