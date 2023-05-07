const express = require('express');
const CartController = require('../controllers/cartController');
const router = express.Router();
const {Cart, CartRecord} = require('../models/models');

// Роутер для корзины
const cartRouter = express.Router();

// Создание экземпляра контроллера корзины
const cartController = new CartController();

// Получение содержимого корзины
cartRouter.get('/', cartController.getCart.bind(cartController));

// Добавление элемента в корзину
cartRouter.post('/', cartController.addItemToCart.bind(cartController));

// Удаление элемента из корзины
cartRouter.delete('/:id', cartController.removeItemFromCart.bind(cartController));

// Экспортируем роутер
module.exports = cartRouter;
