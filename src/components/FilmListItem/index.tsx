import css from './style.module.css';
import {FilmCardShort} from "@/ts/films.ts";
import {normalizeFilmData} from "@/utils";
import PosterImg from "@/components/shared/PosterImg";
import {Link} from "react-router-dom";

function FilmListItem(props: { info: FilmCardShort }) {
  const {id, name, alternativeName, enName, poster} = props.info;
  const filmName = normalizeFilmData.getName({name, alternativeName, enName});

  return (
    <article className={css.filmCard}>
      <Link to={`/${id}`} className={css.filmLink}>
        <div className={css.filmWrapImg}>
          <PosterImg poster={poster} firstTry="previewUrl"></PosterImg>
        </div>
      </Link>

      <h3 className={css.filmName}>{filmName}</h3>
    </article>
  );
}

export default FilmListItem;