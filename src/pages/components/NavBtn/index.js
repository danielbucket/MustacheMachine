import React from 'react';
import style from './index.module.css';

export function NavBtn(loc, func) {

  return (
				<input
					className={style.navBtn}
					type='button'
					value={`<${loc} />`}
					onClick={() => func()} />
  )
}