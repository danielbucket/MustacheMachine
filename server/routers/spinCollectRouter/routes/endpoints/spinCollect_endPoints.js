const discogsLoginPackage = {
		USER_NAME: process.env.DISCOGS_USER,
		USER_TOKEN: process.env.DISCOGS_TOKEN,
	}

const spinConnectUserName = 'bucketLimited'
const spinnConnectUserPassword = 'password123'

const getUserMediaLoginPackage = (req,res,next) => {
	console.log('poo poo pee pee: ', req.params)

	const { name, password } = req.params

	if (!name) {
		res.send('no username')
		next()
	}

	if (name === spinConnectUserName && password === spinnConnectUserPassword) {
		resObj = Object.assign({},{loginSuccess:true},discogsLoginPackage)
		res.status = 200
		res.send(resObj)
		next()
	}
}

const basicResponse = (req,res,next) => {
console.log("Basic Response")
}

module.exports = {
	getUserMediaLoginPackage,
	basicResponse,
}