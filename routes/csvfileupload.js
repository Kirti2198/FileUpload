const express= require('express');
const router=express.Router();

const fileController= require('../controllers/file_controller');

router.post('/upload', fileController.upload);
router.get('/',fileController.getAllFiles);
router.get('/:id/view', fileController.openFile);

module.exports= router;