import { getAllStub } from './discogsResponseStubs'

const KEY = process.env.DISCOGS_CONSUMER_KEY
const SECRET = process.env.CONSUMER_SECRET
// const DISCOGS_TOKEN = process.env.DISCOGS_TOKEN
// const DISCOGS_USER = process.env.DISCOGS_USER

const requestTokenURL = `https://api.discogs.com/oauth/request_token`
const authorizeURL = `https://www.discogs.com/oauth/authorize`
const accesTokenURL = `https://api.discogs.com/oauth/access_token`


export async function getDiscogs(DCC,name, token) {
	const GET_discogsURL = `https://api.discogs.com/users/${name}/collection/folders/0/releases?token=${token}&per_page=100&sort=artist`

	return fetch(GET_discogsURL, {
		'method': 'GET',
		'Authorization': `Discogs key=[${KEY}], secret:[${SECRET}]`
	}).then(res => {
		if (!res.ok) {
			throw new Error('Network response was no OK')
		}
		return res.json()
	}).then((data) => {
		const { releases } = data

		return releases.map(i => {
			const { basic_information } = i
			const parentValues = {
				date_added: i.date_added,
				rating: i.rating,
				notes: i.notes || '',	
			}

			return Object.assign(parentValues, basic_information)
		})
	})
}