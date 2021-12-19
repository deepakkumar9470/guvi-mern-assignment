import express from 'express'


const router = express.Router()

import UserController from '../controllers/user-controller.js'
import ProfileController from '../controllers/profile-controller.js'

import authentication from './../middlewares/authorization.js';

// /api/auth/register
router.post('/register', UserController.register)


// /api/auth/login
router.post('/login', UserController.loginUser)


// /api/auth/logout
router.get('/logout', UserController.logout)


// authentication
router.get('/', authentication , (req,res) => {
                
})

// /api/profile/create
router.post('/create',ProfileController.createProfile)

// /api/profile/userprofile/ahgsssgagsfgs
router.get('/userprofile',ProfileController.getProfile)


// router.get('/userprofile/:id',ProfileController.getSingleProfile)


router.put('/userprofile/:id',ProfileController.updateProfile)



export default router

