import {makeAutoObservable} from "mobx";

export default class CartStore {
    constructor() {
        this._carts = [
            {
                id:1, userid: 1
            },
            {
                id:2,userid: 2
            }
        ]
        this._cartrecords = [ 
            {
                id:1, recordid:1,userid:1
            },
            {
                id:2,recordid:2, userid:2
            }
        ]
        this._records = [
            {
                id:1, name:'RECORD1',price:'50000'
            },
            {
                id:2, NAME: 'RECORD2',price:'52000'
            }
        ]
        makeAutoObservable(this)
    }

    setcarts(carts) {
        this._carts = carts
    }
    setrecords(records) {
        this._records = records
    }
    setcartrecord(cartrecords) {
        this._cartrecords = cartrecords
    }

    get carts() {
        return this._carts
    }
    get records() {
        return this._records
    }
    get cartrecords() {
        return this._cartrecords
    }
}