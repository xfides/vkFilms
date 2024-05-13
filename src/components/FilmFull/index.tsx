import css from './style.module.css'
import {useContext, useEffect, useState} from "react";
import {OneFilmContext, OneFilmDispatchContext} from "@/context";
import Loading from "@/components/shared/Loading";
import Error from "@/components/shared/Error";
import PageTitle from "../shared/PageTitle";
import FilmFullInfo from "@/components/FilmFullInfo";
import {normalizeFilmData} from "@/utils";
import {Link, useParams} from "react-router-dom";

function FilmFull() {

  const dispatchOneFilm = useContext(OneFilmDispatchContext);
  const oneFilmService = useContext(OneFilmContext);
  const {data, error, loading} = oneFilmService
  const errorMsg = error?.message ?? '';
  const filmName = normalizeFilmData.getName({
    name: data?.name,
    alternativeName: data?.alternativeName,
    enName: data?.enName
  });

  //    ----    ----    ----

  const urlParams = useParams();
  const filmId = urlParams.id ? Number(urlParams.id) : null;
  const [filmIdPicked] = useState<number | null>(filmId)

  useEffect(() => {
    if (filmIdPicked) {
      dispatchOneFilm({filmId: filmIdPicked})
    }
  }, [dispatchOneFilm, filmIdPicked])

  //    ----    ----    ----

  const isShowFilmData = !error && !loading && filmIdPicked && data

  return (
    <section className={css.filmOneWrap}>

      <Error errorMsg={errorMsg}></Error>
      <Loading loading={loading}></Loading>

      {isShowFilmData && <PageTitle>{filmName}</PageTitle>}
      {isShowFilmData && data && <FilmFullInfo data={data}></FilmFullInfo>}

      <div className={css.control}>
        <Link to="/">К списку фильмов</Link>
      </div>
    </section>
  );
}

export default FilmFull;