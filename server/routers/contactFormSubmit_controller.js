const formSubmit = formData => {
	console.log('formData: ', Object.keys(formData))


	const mockFetch = () => {
		setTimeout(() => {
			console.log('Contact form submitted')
			return 
		}, 1000)
	}



	res.send()
}

module.exports = {
	formSubmit,
}