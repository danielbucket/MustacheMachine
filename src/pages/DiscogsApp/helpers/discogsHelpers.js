const KEY = process.env.DISCOGS_CONSUMER_KEY
const SECRET = process.env.CONSUMER_SECRET
// const DISCOGS_TOKEN = process.env.DISCOGS_TOKEN
// const DISCOGS_USER = process.env.DISCOGS_USER

const requestTokenURL = `https://api.discogs.com/oauth/request_token`
const authorizeURL = `https://www.discogs.com/oauth/authorize`
const accesTokenURL = `https://api.discogs.com/oauth/access_token`


export async function getDiscogs(name, token) {
	const GET_discogsURL = `https://api.discogs.com/users/${name}/collection/folders/0/releases?token=${token}&per_page=100&sort=artist`

	return fetch(GET_discogsURL, {
		'method': 'GET',
		'Authorization': `Discogs key=[${KEY}], secret:[${SECRET}]`
	}).then(res => {
		if (!res.ok) {
			throw new ERROR('Network response was no OK')
		}
		return res.json()
	}).then(data => {
		return data.releases.map(i => {
			console.log(i.basic_information)
			// const {id, date_added, rating, basic_information}
		})
		return data
	})
}