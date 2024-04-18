const express = require("express")

const {getAllServices, getASingleService, createANewService, updateServices, deleteService} = require('../controllers/serviceController')


const router = express.Router()
router.get('/services', getAllServices)

router.get('/services/:id', getASingleService)

router.post('/services',  createANewService)

router.put('/services/:id', updateServices)

router.delete('/services/:id', deleteService)


module.exports = router