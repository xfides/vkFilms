import css from './style.module.css';
import {FilmCardShort} from "@/ts/films.ts";
import {normalizeFilmData} from "@/utils";
import PosterImg from "@/components/shared/PosterImg";

function FilmListItem(props: { info: FilmCardShort }) {
  const {id, name, alternativeName, enName, poster} = props.info;
  const filmName = normalizeFilmData.getName({name, alternativeName, enName});

  console.log(id);

  return (
    <article className={css.filmCard}>
      <a href="#" className={css.filmLink}>
        <div className={css.filmWrapImg}>
          <PosterImg poster={poster} firstTry="previewUrl"></PosterImg>
        </div>
      </a>

      <h3 className={css.filmName}>{filmName}</h3>
    </article>
  );
}

export default FilmListItem;