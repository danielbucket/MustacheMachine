import style from './style.css'

export default function Profile() {
	const profileContainer = document.createElement('div')
		profileContainer.classlist.add('profile-container')
		profileContainer.innerHTML = 'Profile'

	return profileContainer
}