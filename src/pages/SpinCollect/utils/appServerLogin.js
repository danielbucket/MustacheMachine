import { spinConnectRouter } from './constants'

const appServerLogin = (user,password) => {
	fetch(`${spinConnectRouter}/login?${user}:${password}`,{
		
	})
	.then(res => res.json())
	.then(creds => {
		console.log(creds)
	})
}