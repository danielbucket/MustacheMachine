import React from 'react';
import style from './index.module.css';

export function NavBtn(loc, func = () =>{}) {

	if (typeof func !== 'function') {
		func = () => {}
	}

  return (
				<input
					className={style.navBtn}
					type='button'
					value={`<${loc} />`}
					onClick={() => func()} />
  )
}