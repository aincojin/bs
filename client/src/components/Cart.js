import React, { useState } from "react"
import Checkout from "./Checkout";

export default function Cart({ onCloseCart,items = [] }) {
  const [showCheckout,setShowCheckout] = useState(false)
  const [cartItems,setCartItems] = useState(items)

    const handleClickCheckout = ()=>{
        setShowCheckout(!showCheckout);
    }
    const handleClickDelete = (index) => {
      // Create a new array without the item to be deleted
      const updatedItems = [...cartItems];
      updatedItems.splice(index, 1);
      setCartItems(updatedItems);
    };

    const calculateTotalPrice = () => {
      let totalPrice = 0;
      cartItems.forEach((obj) => {
        if (obj.item.recordprice) {
          totalPrice += obj.item.recordprice;
        }
      });
      return totalPrice;
    };
    return (
      <div style={{ display: "", position: "fixed" }} className="cart-overlay">
        <div className="cart">
          <div className="cartHeader">
            <h2>Ваша корзина</h2>
            <button className="cartExit" onClick={onCloseCart}>
              x
            </button>
          </div>
  
          <div className="cartItems">
            {items.length > 0 ? (
              cartItems.map((obj,index) => (
                <div className="cartItem" key={index}>
                    <div className="cart_item">
                      <div className="cart_img" style={{width:"150px",height:"150px", backgroundImage:`url(${obj.item.recordimage})`, backgroundSize: "cover"}}></div>
                      <div className="cart_info">
                          <p className="cart_wrap">{obj.item.recordname}</p>
                          <p className="cart_wrap">{obj.item.artist}</p>
                          <p className="cart_wrap">{obj.item.recordprice ? obj.item.recordprice : "N/A"} BLR</p>
                      </div>
                    </div>
                    
                      <img className="navicon deleteItem" onClick={() => handleClickDelete(index)} src="./assets/images/icons/deleteCart.svg" alt="deleteItem"/>
                    </div>
               
              ))
            ) : (
              <p>Корзина пуста</p>
            )}   
          </div>

          <div className="cart_bot">
            <div className="cart_bot_sum">
              <h4>К оплате</h4>
              <h4 className="cart_wrap">{calculateTotalPrice()} BLR</h4>
            </div>
            <button onClick={handleClickCheckout} className="checkout_btn" >ОПЛАТИТЬ ПОКУПКУ</button>
            {showCheckout && <Checkout totalAmount={calculateTotalPrice()}  open={showCheckout} hide={() => setShowCheckout(false)}/>}
          </div>
        </div>
      </div>
    );
  }
  