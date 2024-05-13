import css from './style.module.css'

function Error({errorMsg = ''}: { errorMsg: string }) {
  if (!errorMsg) return null

  return <div className={css.errorMsg}>{errorMsg}</div>
}

export default Error;