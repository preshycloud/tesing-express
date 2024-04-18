const express = require("express")

const {getAllUsersInfo, getASingleUserInfo, createANewUser, updateUserInfo, deleteUserInfo} = require('../controllers/userController')

const router = express.Router()
router.get('/users', getAllUsersInfo)

router.get('/users/:id', getASingleUserInfo)

router.post('/users', createANewUser)

router.put('/users/:id', updateUserInfo)

router.delete('/users/:id', deleteUserInfo)


// router.route('/users').get(getAllUsersInfo).post(createANewUser)

// router.route('./users/:id').get(getASingleUserInfo).put(updateUserInfo).delete(deleteUserInfo)

module.exports = router