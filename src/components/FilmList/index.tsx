import css from './style.module.css'
import FilmListItem from "@/components/FilmListItem";
import {useContext, useEffect, useState} from "react";
import {AllFilmsContext, AllFilmsDispatchContext} from "@/context";
import Loading from "@/components/shared/Loading";
import Error from "@/components/shared/Error";
import {FilmsKind} from "@/ts/films.ts";

function FilmList() {

  const dispatchFilms = useContext(AllFilmsDispatchContext);
  const filmsService = useContext(AllFilmsContext);
  const {data, error, loading} = filmsService
  const errorMsg = error?.message ?? '';

  //    ----    ----    ----

  const [filmsKind] = useState<FilmsKind>({kind: ''})

  // useEffect(()=>{
  //     dispatchFilms(filmsKind)
  // },[dispatchFilms, filmsKind])

  console.log(data?.docs)

  const mockFilms = [
    {
      id: 1,
      name: 'name 1',
      alternativeName: null,
      enName: null,
      poster: {
        url: 'https://dummyimage.com/600x1200/000/fff',
        previewUrl: 'https://dummyimage.com/600x300/000/fff'
      }
    },
    {
      id: 2,
      name: null,
      alternativeName: 'alternativeName 2',
      enName: null,
      poster: {
        url: 'https://dummyimage.com/600x1200/000/fff',
        previewUrl: 'https://dummyimage.com/600x300/000/fff'
      }
    },
    {
      id: 3,
      name: null,
      alternativeName: null,
      enName: 'enName 3',
      poster: {
        url: 'https://dummyimage.com/600x1200/000/fff',
        previewUrl: 'https://dummyimage.com/600x300/000/fff'
      }
    },
    {
      id: 4,
      name: 'name 4',
      alternativeName: null,
      enName: null,
      poster: {
        url: null,
        previewUrl: 'https://dummyimage.com/600x300/000/fff'
      }
    },
    {
      id: 5,
      name: null,
      alternativeName: null,
      enName: null,
      poster: {
        url: 'https://dummyimage.com/600x1200/000/fff',
        previewUrl: null
      }
    },
    {
      id: 6,
      name: null,
      alternativeName: 'alternativeName 6',
      enName: null,
      poster: {
        url: null,
        previewUrl: null
      }
    }
  ]

  const filmsCardShort = data ? data.docs : mockFilms;

  const filmsCardShortComponents = filmsCardShort.map((filmsCardShortInfo) => {
    const key = filmsCardShortInfo.id;

    return (
      <FilmListItem key={key} info={filmsCardShortInfo}></FilmListItem>
    )
  })

  //    ----    ----    ----

  return (
    <section className={css.films}>

      <h1 className={css.filmsTitle}>
        Фильмы, полученные с API: https://api.kinopoisk.dev
      </h1>

      <div className={css.filmsContainer}>
        <Error errorMsg={errorMsg}></Error>
        <Loading loading={loading}></Loading>
        {filmsCardShortComponents}
      </div>

    </section>
  );
}

export default FilmList;