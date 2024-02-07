import { React } from 'react'
import style from './index.module.css'

export default function SpinnerOfDoom() {

	return (
		<div className={style.spinnerOfDoomWrapper}>
			<div className={style.headerContainer}>
				<p>Spinner of Doom!</p>
			</div>
			<div className={style.spinner}>Doom Doom!</div>
		</div>
	)
}