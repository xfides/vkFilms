import {FilmIdPicked, FilmsKind} from "@/ts/films.ts";

const HOST = 'https://api.kinopoisk.dev/v1.4';
// const HOST = 'https://freetestapi.com/api/v1';
const PATH_MOVIES = 'movie';
// const PATH_MOVIES = 'movies';
const API_KEY = 'Q3Q0Y7K-JS4MFQA-H2Y9STK-FTVHWRQ'

const requestHeaders = new Headers();
requestHeaders.append('X-API-KEY', API_KEY);

const requestOptions = {
  method: 'GET',
  headers: requestHeaders,
};

export function getFilms<UserData>(
  kindInfo: FilmsKind | null
): Promise<UserData> {
  if (kindInfo === null) return Promise.resolve(null as UserData)

  const queryParams = [
    'page=1',
    'limit=25',
    'selectFields=id',
    'selectFields=name',
    'selectFields=enName',
    'selectFields=alternativeName',
    'selectFields=poster',
    'type=movie',
    'sortField=rating.kp',
    'sortType=1',
    'rating.kp=8.5-10'
  ];
  const queryParametersString = queryParams.join('&')

  const URL = `${HOST}/${PATH_MOVIES}?${queryParametersString}`;

  return makeRequest({URL, requestOptions});
}

export function getFilmById<UserData>(
  filmIdInfo: FilmIdPicked | null
): Promise<UserData> {
  if (filmIdInfo === null) return Promise.resolve(null as UserData)

  const URL = `${HOST}/${PATH_MOVIES}/${filmIdInfo.filmId}`;

  return makeRequest({URL, requestOptions});
}

async function makeRequest<UserData>({URL, requestOptions = {}}: {
  URL: string,
  requestOptions: ResponseInit & { method?: string }
}): Promise<UserData> {
  const response = await fetch(URL, requestOptions);

  if (response.ok) {
    return await response.json();
  } else {
    const responseStatus = response.status;
    const responseStatusText = response.statusText
      ? response.statusText
      : '<empty>';

    throw new Error(`
      Sorry. Something went wrong. 
      Response status: ${responseStatus}. 
      Response status text: ${responseStatusText}.
    `);
  }
}