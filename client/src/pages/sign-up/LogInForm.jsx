
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../http/userAPI";
import { Context } from "../../index";
// import * as Yup from "yup"

const  LogInForm = () => {
        const navigate = useNavigate()
        const {user} = useContext(Context)
        const [name, setName] = useState('')
        const [password, setPassword] = useState('')

        const click = async (event) => {
            let data;
            event.preventDefault();
            try {
              data = await login(name, password);
              user.setUser(user)
              user.setIsAuth(true)
              // Перенаправляем на страницу каталога 
              navigate('/catalogue');
            } catch (e) {
              alert(e.response.data.message)
            }
          };
          
        
        return(
            <>
                <div className="back_btn">
                    <button className="back_button" onClick={()=> navigate(-1)} style={{color:'#c4c2b8', textDecoration: 'none'}}>Назад</button>
                </div>
                <div className="container">
                    <div className="box">
                        <h2>Войти</h2>
                        <form action="#" >

                            <div className="input_box" >
                                <input type="text" value={name} onChange={e=>setName(e.target.value)} className="username"   required/>
                                <label>Имя</label>
                            </div>

                            <div className="input_box" >
                                <input type="password" value={password} onChange={e=>setPassword(e.target.value)} className="password" required/>
                                <label>Пароль</label>
                            </div>

                            <button className="login_button" onClick={(event)=>{click(event)}} type="submit" style={{color:'#c4c2b8', textDecoration:'none'}}>Войти</button>
                            <div className="signup_link"><Link to='/sign-up' style={{color:'#c4c2b8'}}>Нет аккаунта?</Link></div>
                        </form>
                    </div>
                </div>
            </>
        )
}

export default LogInForm