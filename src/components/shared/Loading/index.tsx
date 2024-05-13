import css from './style.module.css';
import loader from '@/assets/images/loader.gif';

function Loading({loading = false}: { loading: boolean }) {

  if (!loading) return null;

  return (
    <div className={css.loaderWrap}>
      <img src={loader} alt="load icon" className={css.loaderImg}/>
    </div>
  );
}

export default Loading;