import style from './style.css'

export default function Footer() {
	const footerContainer = document.createElement('div')
		footerContainer.classList.add('footer-container')
		footerContainer.innerHTML = 'Footer'

	return footerContainer
}