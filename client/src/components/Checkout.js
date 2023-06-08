import React, {useState} from 'react';

const Checkout = (props)=>{
    const [value, setValue] = useState('')
    const submitCheckout = () => {
        props.hide()
    }
    return(
       
        <dialog open={props.open} className='checkout'>
            <h2>Подтверждение оплаты</h2>
            <h4>`Подтверждение заказа на сумму {props.totalAmount} BLR`</h4>
            
        {/* SUBMIT */}
        <button onClick={submitCheckout} className='btnn modal_btn'>ПОДТВЕРДИТЬ</button>
        
        
        </dialog>
    )
}

export default Checkout