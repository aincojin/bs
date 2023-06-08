import {makeAutoObservable} from "mobx";

export default class GenreStore {
    constructor() {
        this._genres = []
        this._tracks = []
        this._selectedGenre={}
        makeAutoObservable(this)
    }

    setGenres(genres) {
   
        this._genres = genres
        
    
    }
    settracks(tracks) {
        this._tracks = tracks
    }
    setSelectedGenre(genre){
        this._selectedGenre = genre
    }

    get genres() {
        return this._genres
    }
    get tracks() {
        return this._tracks
    }
    get selectedGenre() {
        return this._selectedGenre
    }
}