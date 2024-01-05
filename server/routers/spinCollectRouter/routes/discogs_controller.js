const getCollection = (req,res,next) => {
	res.send('Discogs Controller')
	next()
}

module.exports = {
	getCollection,
}