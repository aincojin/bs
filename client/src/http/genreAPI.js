import jwtDecode from "jwt-decode";
import {$authHost, $host} from "./index";



export const createGenre = async (genre) => {
    const {data} = await $authHost.post('api/genre', genre);
     return data;
}

export const fetchGenres = async () => {
    const {data} = await $host.get('api/genre')
    return data

}

