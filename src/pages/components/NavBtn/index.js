export function NavBtn(loc, func) {


  return (
    <div className={style.navBtnContainer}>
				<input
					className={style.navBtn}
					type='button'
					value={`Back to <${loc} />`}
					onClick={() => func()} />
			</div>
  )
}