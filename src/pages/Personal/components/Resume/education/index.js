import style from './style.css'

export default function Education() {
	const educationContainer = document.createElement('div')
		educationContainer.classList.add('education-container')
		educationContainer.innerHTML = 'Education'

	return educationContainer;
}