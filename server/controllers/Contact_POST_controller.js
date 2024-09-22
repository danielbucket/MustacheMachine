async function POST_formSubmit(req,res) {
	// add data to database
	// api query for email
	console.log(('Contact Form @ POST_formSubmit: ', req.body))
	const { firstName } = req.body

	const dbQuery = Object.assign(
		{},
		{ firstName }
	)

	res.status(200).send(JSON.stringify(dbQuery))
}

async function test_POST(req,res,next) {
	res.status(200).send({name:'Mr. Stub'})
	next()
}

module.exports = {
	POST_formSubmit,
	test_POST,
}