import style from './style.css'

export default function Header() {
	const headerContainer = document.createElement('div')
		headerContainer.classList.add('header-container')
		headerContainer.innerHTML = 'Header'

	return headerContainer
}