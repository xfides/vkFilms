import css from './style.module.css';
import {FilmCardShort} from "@/ts/films.ts";

function FilmListItem(props: { info: FilmCardShort }) {
  const {id, name, alternativeName, enName, poster} = props.info;
  const {previewUrl, url} = poster ?? {previewUrl: null, url: null};
  console.log(id);

  const filmName = name ?? alternativeName ?? enName ?? 'movie name is missing';
  const previewImgUrl = previewUrl ?? url ?? null;

  let img = <div className={css.filmImg}><strong>poster missing</strong></div>;
  if (previewImgUrl) {
    img = (
      <img src={previewImgUrl}
           alt="poster"
           className={css.filmImg}
      />
    )
  }

  return (
    <article className={css.filmCard}>
      <a href="#" className={css.filmLink}>
        <div className={css.filmWrapImg}>
          {img}
        </div>
      </a>

      <h3 className={css.filmName}>{filmName}</h3>
    </article>
  );
}

export default FilmListItem;