const getCollection = (req,res,next) => {
	res.send('get collection')
	next()
}

// const getCollection_collection = (req,res) => {
// 	const { KEY, SECRET, USER_NAME, USER_TOKEN } = req.body
// 	const GET_discogsURL = `https://api.discogs.com/users/${USER_NAME}/collection/folders/0/releases?token=${USER_TOKEN}&per_page=100&sort=artist`

// 	return fetch(GET_discogsURL, {
// 		'method': 'GET',
// 		'Authorization': `Discogs key=[${KEY}], secret:[${SECRET}]`
// 	}).then(response => {
// 		if (!response.ok) {
// 			throw new Error('Network response was not OK')
// 		}
// 		return response.json()
// 	}).then((data) => {
// 		const { releases } = data

// 		return releases.map(i => {
// 			const { basic_information } = i
// 			const parentValues = {
// 				date_added: i.date_added,
// 				rating: i.rating,
// 				notes: i.notes || '',	
// 			}

// 			return Object.assign(parentValues, basic_information)
// 		})
// 	})
// }

module.exports = {
	getCollection,
}