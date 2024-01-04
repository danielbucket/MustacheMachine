export async function getDiscogs(userPackage) {
	const { KEY, SECRET, USER_NAME, USER_TOKEN } = userPackage
	const GET_discogsURL = `https://api.discogs.com/users/${USER_NAME}/collection/folders/0/releases?token=${USER_TOKEN}&per_page=100&sort=artist`

	return fetch(GET_discogsURL, {
		'method': 'GET',
		'Authorization': `Discogs key=[${KEY}], secret:[${SECRET}]`
	}).then(res => {
		if (!res.ok) {
			throw new Error('Network response was not OK')
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