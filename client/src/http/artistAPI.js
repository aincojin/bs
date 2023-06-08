import jwtDecode from "jwt-decode";
import {$authHost, $host} from "./index";



export const createArtist = async (artist) => {
    const {data} = await $authHost.post('api/artist', artist);
     return data;
}

export const fetchArtists = async () => {
    const {data} = await $host.get('api/artist')
    return data

}
 