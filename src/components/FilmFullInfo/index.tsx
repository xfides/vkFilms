import css from "./style.module.css";
import PosterImg from "@/components/shared/PosterImg";
import {FilmCardFull} from "@/ts/films.ts";
import {normalizeFilmData} from "@/utils";

/*
const mockProps = {
  id: 5,
  name: 'name 5',
  alternativeName: 'alternativeName 5',
  enName: 'enName 5',
  year: 2003,
  description: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains',
  shortDescription: 'Можете помочь с переводом этого сайта на какой-либо иностранный язык? Если да, то посылайте e-mail с деталями.',
  rating: {
    kp: 7.3
  },
  poster: {
    url: undefined,
    previewUrl: undefined
  }

}
*/

function FilmFullInfo({data}: { data: FilmCardFull }) {

  const {
    year,
    poster,
    rating,
    shortDescription,
    description
  } = data

  const normalizedDescription = normalizeFilmData.getDescription({
    description,
    shortDescription
  })

  return (
    <div className={css.filmOne}>

      <div className={css.filmOneSignsAll}>
        <div className={css.filmOnePosterWrap}>
          <PosterImg poster={poster}></PosterImg>
        </div>
        <div className={css.filmOneSignsSmall}>
          <p>Рейтинг Кинопоиска: <b>{rating?.kp ?? 'неизвестно'}</b></p>
          <p>Дата выпуска: <b>{year ?? 'неизвестно'}</b></p>
        </div>
      </div>

      <div className={css.filmOneInfo}>{normalizedDescription}</div>

    </div>
  );
}

export default FilmFullInfo;