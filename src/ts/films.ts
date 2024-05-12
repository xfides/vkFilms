export interface FilmCardShort {
  nameShort: string
}

export interface FilmCardFull {
  nameLong: string
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
  filmId: string
}


