const discogsLoginPackage = {
		USER_NAME: process.env.DISCOGS_USER,
		USER_TOKEN: process.env.DISCOGS_TOKEN,
	}

const spinConnectUserName = 'bucketLimited'
const spinnConnectUserPassword = 'password123'

const getUserMediaLoginPackage = (req,res,next) => {
	const { userName,password } = req.body
	if (!userName) {
		res.send('no username')
		next()
	}

	if (userName === spinConnectUserName && password === spinnConnectUserPassword) {

		res.send(Object.assign({},{loginSuccess:true},discogsLoginPackage)
		next()
	}
}

module.exports = {
	getUserMediaLoginPackage,
}