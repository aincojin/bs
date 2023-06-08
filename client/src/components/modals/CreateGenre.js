import React, {useState} from 'react';
import {createGenre} from "../../http/genreAPI"
const CreateGenre = (props)=>{
    const [value, setValue] = useState('')

    const addGenre = () => {
        createGenre({genrename: value}).then(data => setValue(''))
        props.hide()
    }
    
    return(
       
        <dialog open={props.open} className='modal'>
            <h2>Добавление жанра</h2>
            <label className='modal_label'>
                Название:
                <input value={value} onChange={e => setValue(e.target.value)} className='modal_input' type='text'/>
            </label>
            
        {/* SUBMIT */}
        <button onClick={addGenre} className='btnn modal_btn'>SUBMIT </button>
        
        
        </dialog>
    )
}

export default CreateGenre