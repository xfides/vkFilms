import {createContext} from "react";
import {
  AsyncService,
  FilmCardFull,
  FilmCardShort,
  FilmsKind,
  FilmIdPicked,
} from "@/ts/films.ts";

const noOpFn = () => {}

export const AllFilmsContext = createContext<AsyncService<FilmCardShort[]>>({
  data: null,
  error: undefined,
  loading: false
})

export const AllFilmsDispatchContext = createContext<
  (kindInfo: FilmsKind) => void
>(noOpFn)

export const OneFilmContext = createContext<AsyncService<FilmCardFull>>({
  data: null,
  error: undefined,
  loading: false
})

export const OneFilmDispatchContext = createContext<
  ((filmIdInfo: FilmIdPicked) => void)
>(noOpFn)