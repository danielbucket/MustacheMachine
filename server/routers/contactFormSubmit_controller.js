const POST_formSubmit = (req,res,next) => {
	// add data to database
	// api query for email
	console.log(('Contact Form @ POST_formSubmit: ', req.body))
	const { firstName } = req.body

	const dbQuery = Object.assign(
		{},
		{ firstName }
	)

	res.status(200).send(dbQuery)
	next()
}

module.exports = {
	POST_formSubmit,
}