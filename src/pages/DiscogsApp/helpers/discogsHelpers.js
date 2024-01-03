const KEY = process.env.DISCOGS_CONSUMER_KEY
const SECRET = process.env.CONSUMER_SECRET

const requestTokenURL = 'https://api.discogs.com/oauth/request_token'
const authorizeURL = 'https://www.discogs.com/oauth/authorize'
const accesTokenURL = 'https://api.discogs.com/oauth/access_token'

export const getDiscogs = () => {

	console.log('secret: ', SECRET)
}