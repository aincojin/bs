import jwtDecode from "jwt-decode";
import {$authHost, $host} from "./index";


export const registration = async (name, password ,email,role) => {
    const {data} = await $host.post('api/user/registration', {name,password, email,  role})
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)

}

export const login = async (name, password) => {
    const {data} = await $host.post('api/user/login', {name, password})
    localStorage.setItem('token', data.token)
    // const decodedToken = jwtDecode(data.token);
    // const userId = decodedToken.id 
    // localStorage.setItem('userId', userId)
     return jwtDecode(data.token)
}

export const logout = async () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId'); // если используется
    // или другие важные данные, которые нужно очистить
    // выполняем перенаправление на главную страницу
    window.location.href = '/';
  }
  

export const check = async () => {
    const {data} = await $authHost.get('/api/user/auth' )
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}