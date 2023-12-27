const getPoopinData = (req,res) => {
	const poopinGuySays = "Poop Strong!"
	
	res.send(poopinGuySays)
}

module.exports = {
	getPoopinData,
}