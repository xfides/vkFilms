export interface FilmCardShort {
  id: number,
  name: string | null,
  alternativeName: string | null,
  enName: string | null,
  poster?: {
    url: string | null,
    previewUrl: string | null
  }
}

export interface ResponseFilmCardShort {
  docs: FilmCardShort[],
  limit?: number,
  page?: number,
  pages?: number,
  total?: number,
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


