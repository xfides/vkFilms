import {
  AllFilmsContext,
  AllFilmsDispatchContext,
  OneFilmContext,
  OneFilmDispatchContext
} from "@/context";
import {ReactNode, useCallback, useState} from "react";
import {
  ResponseFilmCardShort,
  FilmCardFull,
  FilmIdPicked,
  FilmsKind,
} from "@/ts/films.ts";
import {useService} from "@/hooks/useService.ts";
import {getFilmById, getFilms} from "@/api/service.ts";

export default function AppProviders({children}: { children: ReactNode }) {

  //    ----    ----    ----

  const [kindOfFilms, setKindOfFilms] = useState<FilmsKind | null>(null);

  const allFilmsService = useService<
    ResponseFilmCardShort,
    Parameters<typeof getFilms>
  >(getFilms, kindOfFilms)

  const dispatchAllFilms = useCallback((kindObj: FilmsKind) => {
    setKindOfFilms(kindObj);
  }, [])

  //    ----    ----    ----

  const [filmId, setFilmId] = useState<FilmIdPicked | null>(null);

  const oneFilmService = useService<
    FilmCardFull,
    Parameters<typeof getFilmById>
  >(getFilmById, filmId)

  const dispatchOneFilm = useCallback((filmIdInfo: FilmIdPicked) => {
    setFilmId(filmIdInfo);
  }, [])

  //    ----    ----    ----

  return (
    <AllFilmsContext.Provider value={allFilmsService}>
      <AllFilmsDispatchContext.Provider value={dispatchAllFilms}>
        <OneFilmContext.Provider value={oneFilmService}>
          <OneFilmDispatchContext.Provider value={dispatchOneFilm}>
            {children}
          </OneFilmDispatchContext.Provider>
        </OneFilmContext.Provider>
      </AllFilmsDispatchContext.Provider>
    </AllFilmsContext.Provider>
  );
}
