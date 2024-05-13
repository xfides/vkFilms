import css from './style.module.css'
import {normalizeFilmData} from "@/utils";
import {FilmPoster} from "@/ts/films.ts";

function PosterImg({poster = {}, firstTry = 'url'}: {
  poster?: FilmPoster,
  firstTry?: 'url' | 'previewUrl'
}) {

  const previewImgUrl = normalizeFilmData.getImgUrl(
    poster ?? {},
    {firstTry: firstTry}
  );

  return previewImgUrl
    ? <img src={previewImgUrl} alt="poster" className={css.filmImg}/>
    : <div className={css.filmImg}><strong>poster missing</strong></div>;
}

export default PosterImg;

