import {React,useContext,useState} from "react";
import { Link,useNavigate } from 'react-router-dom';
import { registration } from "../../http/userAPI";
import { Context } from "../..";
import { observer } from "mobx-react-lite";



const SignUpForm = observer(() => {
    const navigate = useNavigate()
        const {user} = useContext(Context)
        const [email, setEmail] = useState('')
        const [name, setName] = useState('')
        const [password, setPassword] = useState('')
        const [role, setRole] = useState('');

        const click = async(event)=>{
            let data;
            event.preventDefault();
            try{
            data = await registration(name, password, email,role)
            user.setUser(data)
            user.setIsAuth(true)
            navigate('/login');
            }catch(e) {
                alert(e.response.data.message)
            }
        };
 
        return(
            <div className="signin-page">
                <div className="back_btn">
                    <button className="back_button" onClick={()=> navigate(-1)} style={{color:'#c4c2b8', textDecoration: 'none'}}>Назад</button>
                </div>
                <div className="container">
                    
                    <div className="box">
                        <h2>Регистрация</h2>
                        <form action="#">

                            <div className="input_box">
                                <input type="text" value={name} onChange={e=>setName(e.target.value)} className="username" required/>
                                <label>Имя</label>
                            </div>

                            <div className="input_box">
                                <input type="password" value={password} onChange={e=>setPassword(e.target.value)} className="password" required/>
                                <label>Пароль</label>
                                {/* <div className="password_checkbox"><input type="checkbox"/>
                                    <p>Show Password</p>
                                </div> */}
                            </div>

                            <div className="input_box">
                                <input type="text" value={email} onChange={e=>setEmail(e.target.value)} className="email" required/>
                                <label>Email</label>
                            </div>
                            <select value={role} onChange={(e) => setRole(e.target.value)}>
                                <option value="">Select role</option>
                                <option value="ADMIN">Admin</option>
                                <option value="USER">User</option>
                            </select>
                            <button className="signup_button" onClick={(event)=>{click(event)}}  type="submit" style={{color:'#c4c2b8', textDecoration:'none'}}>Создать аккаунт</button>
                            <div className="login_link"><Link to='/log-in' style={{color:'#c4c2b8'}}>Уже есть аккаунт?</Link></div>
                        </form>
                    </div>
                </div> 
            </div>
        )
})

export default SignUpForm