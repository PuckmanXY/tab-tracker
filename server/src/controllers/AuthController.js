const {User} = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

function jwtSignUser (user) {
	const ONE_WEEK = 60 * 60 * 24 * 7
	return jwt.sign(user, config.auth.jwtSecret, {
		expiresIn: ONE_WEEK
	})
}

module.exports = {
	async register (req, res) {
		try {
			const user = await User.create(req.body)
			res.send(user.toJSON())
   	} catch (err) {
   		res.status(400).send({
   			error: 'This email account is already in use.'
   		})
   	}
	},
	async login (req, res) {
		try {
			const {email, password} = req.body
			const user = await User.findOne({
				where: {
					email: email
				}
			})
			if (!user)
				res.status(403).send({
					error: 'Login information is incorrect'
				})

			const isPasswordValid = await user.comparePassword(password)
			if (!isPasswordValid)
				res.status(403).send({
					error: 'Login information is incorrect'
				})

			const userJson = user.toJSON()

			res.send({
				user: userJson,
				token: jwtSignUser(userJson)
			})

   	} catch (err) {
   		res.status(500).send({
   			error: 'An error occoured when trying to login, please try again later'
   		})
   	}
	}
}