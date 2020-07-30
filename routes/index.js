const express= require('express');
const router=express.Router();

const homeController= require('../controllers/home_controller');
router.get('/',homeController.home );
router.post('/', homeController.upload);

router.get('/file',homeController.getAllFiles);

module.exports= router;