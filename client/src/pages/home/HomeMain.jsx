import React from "react";
import { useNavigate } from "react-router-dom";

const HomeMain = () => {
        const navigate = useNavigate() 

        return(
            <div className="home-mid">
                <div className="left-column">
                    <div className="home-big-para">
                        <h4 className="home-lil-headers">Добро пожаловать в наш</h4>
                        <h1 className="title">RECORD STORE</h1>
                    </div>
                    <div className="home-lil-para">
                        <h4 className="home-lil-headers">Исследуй огромный мир музыки</h4>
                        <p>Мы представляем пластинки практически люого жанра,
                           чтобы каждый смог найти себе что-то по вкусу</p>
                    </div>
                    <div className="home-lil-para">
                        <h4 className="home-lil-headers">
                            Узнай больше об истории музыки пока ищешь то,
                            что тебе по душе
                        </h4>
                        <p>Узнай историю происхождения твоих любых альбомов и песен</p>
                    </div>
                    <div className="btns">
                        <button className="btnn red-btn" style={{width:"250px"}} onClick={()=> navigate('/sign-up')}>Зарегистрироваться</button>
                        <button className="btn-browse btnn" onClick={()=>navigate('/catalogue')}>Перейти к каталогу</button>
                    </div>
                </div> 
                <div className="right-column">
                    <img className="home-record" src="./assets/images/home-record2.jpg" alt="a record on a record player"/>
                </div>
            </div> 
        )
    }


export default HomeMain