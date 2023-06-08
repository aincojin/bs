const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Users = sequelize.define('user', {
    userid: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    useremail: {type: DataTypes.STRING, unique: true,},
    userpassword: {type: DataTypes.STRING},
    userrole: {type: DataTypes.STRING, defaultValue: "USER"},
})

const Cart = sequelize.define('cart', {
    cartid: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    cartprice:{type: DataTypes.INTEGER, allowNull: false}
})

const CartRecord = sequelize.define('cart_record', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Records = sequelize.define('records', {
    recordid: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    recordname: {type: DataTypes.STRING, unique: true, allowNull: false},
    recordprice: {type: DataTypes.INTEGER, allowNull: false},
    recordimg: {type: DataTypes.STRING, allowNull: false},
})

const Albums = sequelize.define('albums', {
    albumid: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    albumname: {type: DataTypes.STRING, unique: true, allowNull: false},
    albumlabel: {type: DataTypes.STRING, unique: true, allowNull: false}
})

const Artists = sequelize.define('artists', {
    artistid: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    artistname: {type: DataTypes.STRING, unique: true, allowNull: false},
    artistcountry: {type: DataTypes.STRING, unique: true, allowNull: false}

})

const Tracks = sequelize.define('tracks', {
    trackid: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    trackname: {type: DataTypes.STRING, unique: true, allowNull: false}
})

const Genres = sequelize.define('genres', {
    genreid: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    genrename: {type: DataTypes.STRING, allowNull: false}
})

const TrackGenre = sequelize.define('track_genre', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})


User.hasOne(Basket)
Basket.belongsTo(User)

Basket.hasMany(CartRecord)
CartRecord.belongsTo(Basket)

Records.hasMany(Albums)
Albums.belongsTo(Records)

Artists.hasMany(Albums)
Albums.belongsTo(Artists)

Album.hasMany(Tracks)
Tracks.belongsTo(Album)

Record.hasMany(CartRecord)
CartRecord.belongsTo(Record)

Device.hasMany(DeviceInfo, {as: 'info'});
DeviceInfo.belongsTo(Device)

Tracks.belongsToMany(Genre, {through: TrackGenre })
Genre.belongsToMany(Track, {through: TrackGenre })

module.exports = {
    User,
    Cart,
    CartRecord,
    Records,
    Albums,
    Artists,
    Tracks,
    Genres,
    TrackGenre
}




