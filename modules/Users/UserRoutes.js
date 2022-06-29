const { validation } = require('../../Middelwares/validation')
const { signin } = require('./uesrController.js/SignIn')
const { signup } = require('./uesrController.js/SignUp')
const { signUpValidator, loginValidator } = require('./User.validation')

const router = require('express').Router()

router.post('/User/signup', validation(signUpValidator), signup)
router.post('/User/login', validation(loginValidator), signin)

module.exports = router
