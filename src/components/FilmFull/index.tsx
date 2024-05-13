import css from './style.module.css'
import {useContext, useEffect, useState} from "react";
import {OneFilmContext, OneFilmDispatchContext} from "@/context";
import Loading from "@/components/shared/Loading";
import Error from "@/components/shared/Error";
import PageTitle from "../shared/PageTitle";
import FilmFullInfo from "@/components/FilmFullInfo";
import {normalizeFilmData} from "@/utils";
import {Simulate} from "react-dom/test-utils";
import load = Simulate.load;

function FilmFull() {

  const dispatchOneFilm = useContext(OneFilmDispatchContext);
  const oneFilmService = useContext(OneFilmContext);
  let {data, error, loading} = oneFilmService
  data = {}
  error = undefined
  loading = false;

  const errorMsg = error?.message ?? '';
  const filmName = normalizeFilmData.getName({
    name: data?.name,
    alternativeName: data?.alternativeName,
    enName: data?.enName
  });

  const filmId = 5581330
  const [filmIdPicked, setFilmIdPicked] = useState<number | null>(filmId)

  // useEffect(() => {
  //   if (filmIdPicked) {
  //     dispatchOneFilm({filmId: filmIdPicked})
  //   }
  // }, [dispatchOneFilm, filmIdPicked])

  console.log(data);

  const isShowFilmData = !error && !loading && filmIdPicked && data

  return (
    <section className={css.filmOneWrap}>

      <Error errorMsg={errorMsg}></Error>
      <Loading loading={loading}></Loading>

      {isShowFilmData && <PageTitle>{filmName}</PageTitle>}
      {isShowFilmData && data && <FilmFullInfo data={data}></FilmFullInfo>}

      <div className={css.control}>
        <a href="#">К списку фильмов</a>
      </div>
    </section>
  );
}

export default FilmFull;