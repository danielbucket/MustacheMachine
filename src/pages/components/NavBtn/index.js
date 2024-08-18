import React from 'react';
import style from './index.module.css';

export function NavBtn(loc, func) {

  return (
    <div className={style.navBtnContainer}>
				<input
					className={style.navBtn}
					type='button'
					value={`<${loc} />`}
					onClick={() => func()} />
			</div>
  )
}