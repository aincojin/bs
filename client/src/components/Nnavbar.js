import React, { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { Context } from "..";
import { observer } from "mobx-react-lite";
import { logout } from "../http/userAPI";


const Nnavbar = observer((props) => {
    const {user} = useContext(Context)
    const navigate = useNavigate()   

    // const logOut =()=>{
 
    //     user.setUser({})
    //     user.setIsAuth(false)
    //     navigate('/')
        
    // }
    const logOut = async (event) => {
        event.preventDefault();
        try {
          await logout();
          user.setUser({})
          user.setIsAuth(false)
          // Перенаправляем на страницу каталога 
        //   navigate('/catalogue');
        } catch (e) {
          alert(e.response.data.message)
        }
      };


    const [searchValue, setsearchValue] = React.useState('');
    const handleSearchInputChange = (e) =>{
        setsearchValue(e.target.value);
        props.onSearchInputChange(e.target.value);
    }

        return(
            <nav className="nnavigate">
                <div className="Lnav">
                    <img className="menuicon navicon" src="./assets/images/icons/dropdownmenu.svg" alt="menu"/>
                    <img onClick={()=>navigate('/')} className='logonav' 
                        src="./assets/images/icons/logo.png" alt="record logo"/>
                </div>
                <div className="Rnav">
                    {/* <input type="search" className="search" onChange={handleSearchInputChange} value={searchValue} placeholder="Поиск..."></input> */}
                    {/* <img className="navicon search_btn" src="./assets/images/icons/searchicon.svg" alt="search"/> */}
                    <img className="navicon" onClick={()=>navigate('/admin')} src="./assets/images/icons/usericon.svg" alt="admin"/>
                    <img className="navicon" onClick={(event)=>logOut(event)} src="./assets/images/icons/logout.svg" alt="logout"/>
                    <img className="navicon" onClick={props.onClickCart} src="./assets/images/icons/carticon.svg" alt="cart"/>
                </div>
            </nav>
        )
    })


export default Nnavbar