const express = require('express');
const router = express.Router();
const { verifyToken } = require("../../utility/verify_token");
const itemsControoler = require('../../controllers/home/items_controller');
router.get('/getAllItems',verifyToken,itemsControoler.getAllItems);
module.exports = 
<<<<<<< HEAD
router
=======
router
>>>>>>> 13384bac412d2bb6c64861e6fcb189e95ee56b69
