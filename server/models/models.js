// const sequelize = require('../db')
// const {DataTypes} = require('sequelize')

// const Users = sequelize.define('user', {
//     userid: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
//     username: {type: DataTypes.STRING},
//     useremail: {type: DataTypes.STRING, unique: true,},
//     userpassword: {type: DataTypes.STRING},
//     userrole: {type: DataTypes.STRING, defaultValue: "USER"},
// })

// const Cart = sequelize.define('cart', {
//     cartid: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
// })

// const CartRecord = sequelize.define('cart_record', {
//     cart_record_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
// })

// const Records = sequelize.define('records', {
//     recordid: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
//     recordname: {type: DataTypes.STRING, unique: true, allowNull: false},
//     recordprice: {type: DataTypes.INTEGER, allowNull: false},
//     recordimg: {type: DataTypes.STRING, allowNull: false},
// })

// const Albums = sequelize.define('albums', {
//     albumid: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
//     albumname: {type: DataTypes.STRING, unique: true, allowNull: false},
//     albumyear: {type: DataTypes.STRING, allowNull: false}
// })

// const Artists = sequelize.define('artists', {
//     artistid: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
//     artistname: {type: DataTypes.STRING, unique: true, allowNull: false},
//     artistcountry: {type: DataTypes.STRING, unique: true, allowNull: false}

// })

// const Tracks = sequelize.define('tracks', {
//     trackid: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
//     trackname: {type: DataTypes.STRING, unique: true, allowNull: false}
// })

// const Genres = sequelize.define('genres', {
//     genreid: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
//     genrename: {type: DataTypes.STRING, allowNull: false}
// })



// Users.hasOne(Cart)
// Cart.belongsTo(Users)//

// Cart.hasMany(CartRecord)
// CartRecord.belongsTo(Cart)//

// Albums.hasMany(Records)
// Records.belongsTo(Albums)

// Artists.hasMany(Albums)
// Albums.belongsTo(Artists)//

// Albums.hasMany(Tracks)
// Tracks.belongsTo(Albums)//

// Records.hasMany(CartRecord)
// CartRecord.belongsTo(Records)//


// Genres.hasMany(Tracks)
// Tracks.belongsTo(Genres)

// module.exports = {
//     Albums,
//     Artists, 
//     Cart,
//     Genres,
//     Users,

//     CartRecord,
//     Records,
   
    
//     Tracks,
    
// }




