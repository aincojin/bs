import jwtDecode from "jwt-decode";
import {$authHost, $host} from "./index";



export const createTrack = async (track) => {
    const {data} = await $authHost.post('api/track', track);
     return data;
}

export const fetchTracks = async () => {
    const {data} = await $host.get('api/track')
    return data

}
