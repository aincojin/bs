import jwtDecode from "jwt-decode";
import {$authHost, $host} from "./index";



export const createAlbum = async (album) => {
    const {data} = await $authHost.post('api/album', album);
     return data;
}

export const fetchAlbums = async () => {
    const {data} = await $host.get('api/album')
    return data

}
