import style from './style.css'

export default function Experience() {
	const experienceContainer = document.createElement('div')
		experienceContainer.classList.add('experience-container')
		experienceContainer.innerHTML = 'Experience'

	return experienceContainer;
}