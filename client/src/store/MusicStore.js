import {makeAutoObservable} from "mobx";

export default class MusicStore {
    constructor() {
        this._artists = []
        this._albums = []
        this._selectedArtist={}
        this._selectedCountry={}
        this._selectedAlbum={}
        makeAutoObservable(this)
    }

    setArtists(artists) {
        this._artists = artists
    }
    setAlbums(albums) {
        this._albums = albums
    }
    setSelectedCountry(artist){
        this._selectedCountry = artist
    }
    setSelectedArtist(artist){
        this._selectedArtist = artist
    }
    setSelectedAlbum(album){
        this._selectedAlbum = album
    }
    get artists() {
        return this._artists
    }
    get albums() {
        return this._albums
    }
    get selectedCountry() {
        return this._selectedCountry
    }
    get selectedArtist(){
        return this._selectedArtist
    }
    get selectedAlbum(){
        return this._selectedAlbum
    }
}