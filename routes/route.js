
var express=require('express');
const router=express.Router();
var userController=require('../src/user/userController');


router.route('/user/getAll').get(userController.getDataControllerfn);
router.route('/user/Create').post(userController.crateDataControllerfn);

module.exports = router;