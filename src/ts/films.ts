export interface FilmPoster {
  url?: string,
  previewUrl?: string
}

export interface FilmCardShort {
  id: number,
  name?: string,
  alternativeName?: string,
  enName?: string,
  poster?: FilmPoster
}

export interface ResponseFilmCardShort {
  docs: FilmCardShort[],
  limit?: number,
  page?: number,
  pages?: number,
  total?: number,
}

export interface FilmCardFull {
  id: number,
  name?: string,
  alternativeName?: string,
  enName?: string,
  year?: number,
  description?: string,
  shortDescription?: string,
  rating: {
    kp?: number
  },
  poster?: FilmPoster
}

export interface AsyncService<ServiceData> {
  loading: boolean,
  error: Error | undefined,
  data: ServiceData | null
}

export interface FilmsKind {
  kind: string
}

export interface FilmIdPicked {
  filmId: number
}


