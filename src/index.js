import style from './index.css'
import toiletIcon from './toilet.png'
import printMe from './printMe.js'

function component() {
	const element = document.createElement('div')
		element.classList.add('hello')
		element.innerHTML = "Mustache Machine"

	const toilet = new Image()
		toilet.src = toiletIcon

	const btn = document.createElement('button')
		btn.innerHTML = 'Click me and check the console'
		btn.onclick = printMe

	element.appendChild(toilet)
	element.appendChild(btn)

	return element
}

document.body.appendChild(component())