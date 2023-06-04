const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const db = require("../db.js")

const generateJwt = (id, email, role) => {
    return jwt.sign(
        {id, email, role}, 
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

class UserController {
    async registration(req, res, next) {
        const {name, email, password, role} = req.body
        if (!email || !password) {
            return next(ApiError.badRequest('Некорректный email или password'))
        }
        const candidate = await db.query(
              `select * from public.users where useremail=$1`,
              [email]
            );
        if (candidate.rowCount) {
            return next(ApiError.badRequest('Пользователь с таким email уже существует'))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await db.query(
              `INSERT INTO public.users(
                    username, useremail,  userpassword, userrole)
                    VALUES ($1, $2,$3,$4) RETURNING *`,
              [name, email, hashPassword, role]
            );
        const token = generateJwt((user.rows[0].id, user.rows[0].useremail, user.rows[0].userrole));
        return res.json({token})
    }

    async login(req, res, next) {
        const {name, password} = req.body
        const user = await db.query(`select * from public.users where username=$1`, [
              name
            ]);
             
        if (!user.rowCount) {
            return next(ApiError.internal('Пользователь не найден'))
        }
        let comparePassword = bcrypt.compareSync(password,user.rows[0].userpassword) 
        
        if (!comparePassword) {
            return next(ApiError.internal('Указан неверный пароль'))
        }
        const token = generateJwt(user.rows[0].id, user.rows[0].username, user.rows[0].userrole)
        return res.json({token})
    }
    // //это еще чекнуть надо
    // async updateUser(req, res, next) {
    //     try {
    //         const { email, password } = req.body;
    //         const userId = req.user.id;
    //         const user = await Users.findOne({ where: { id: userId } });
    
    //         if (!user) {
    //             return next(ApiError.internal('Пользователь не найден'));
    //         }
    
    //         if (email) {
    //             user.email = email;
    //         }
    
    //         if (password) {
    //             user.password = await bcrypt.hash(password, 5);
    //         }
    
    //         await user.save();
    
    //         const token = generateJwt(user.id, user.email, user.role);
    //         return res.json({ token });
    //     } catch (err) {
    //         console.error(err);
    //         return next(ApiError.internal('Ошибка при обновлении пользователя'));
    //     }
    // }
    
    async check(req, res, next) {
        const token = generateJwt(req.user.id, req.user.email, req.user.role)
        return res.json({token})
    }
}

module.exports = new UserController()