import css from './style.module.css'
import FilmListItem from "@/components/FilmListItem";
import {useContext, useEffect, useState} from "react";
import {AllFilmsContext, AllFilmsDispatchContext} from "@/context";
import Loading from "@/components/shared/Loading";
import Error from "@/components/shared/Error";
import {FilmsKind} from "@/ts/films.ts";
import PageTitle from "../shared/PageTitle";

/*
const mockFilms: FilmCardShort[] = [
  {
    id: 1,
    name: 'name 1',
    alternativeName: undefined,
    enName: undefined,
    poster: {
      url: 'https://dummyimage.com/600x1200/000/fff',
      previewUrl: 'https://dummyimage.com/600x300/000/fff'
    }
  },
  {
    id: 2,
    name: undefined,
    alternativeName: 'alternativeName 2',
    enName: undefined,
    poster: {
      url: 'https://dummyimage.com/600x1200/000/fff',
      previewUrl: 'https://dummyimage.com/600x300/000/fff'
    }
  },
  {
    id: 3,
    name: undefined,
    alternativeName: undefined,
    enName: 'enName 3',
    poster: {
      url: 'https://dummyimage.com/600x1200/000/fff',
      previewUrl: 'https://dummyimage.com/600x300/000/fff'
    }
  },
  {
    id: 4,
    name: 'name 4',
    alternativeName: undefined,
    enName: undefined,
    poster: {
      url: undefined,
      previewUrl: 'https://dummyimage.com/600x300/000/fff'
    }
  },
  {
    id: 5,
    name: undefined,
    alternativeName: undefined,
    enName: undefined,
    poster: {
      url: 'https://dummyimage.com/600x1200/000/fff',
      previewUrl: undefined
    }
  },
  {
    id: 6,
    name: undefined,
    alternativeName: 'alternativeName 6',
    enName: undefined,
    poster: {
      url: undefined,
      previewUrl: undefined
    }
  }
]
*/

function FilmList() {

  const dispatchFilms = useContext(AllFilmsDispatchContext);
  const filmsService = useContext(AllFilmsContext);
  const {data, error, loading} = filmsService
  const errorMsg = error?.message ?? '';

  //    ----    ----    ----

  const [filmsKind] = useState<FilmsKind>({kind: ''})

  useEffect(() => {
    dispatchFilms(filmsKind)
  }, [dispatchFilms, filmsKind])

  //    ----    ----    ----

  const filmsCardShort = data ? data.docs : [];

  const filmsCardShortComponents = filmsCardShort.map((filmsCardShortInfo) => {
    const key = filmsCardShortInfo.id;

    return (
      <FilmListItem key={key} info={filmsCardShortInfo}></FilmListItem>
    )
  })

  //    ----    ----    ----

  return (
    <section className={css.films}>

      <PageTitle>
        Фильмы, полученные с API: https://api.kinopoisk.dev
      </PageTitle>

      <div className={css.filmsContainer}>
        <Error errorMsg={errorMsg}></Error>
        <Loading loading={loading}></Loading>
        {filmsCardShortComponents}
      </div>

    </section>
  );
}

export default FilmList;