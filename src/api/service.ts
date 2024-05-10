// const URL1 = 'https://api.kinopoisk.dev/v1.4/movie';
// const URL2 = `https://api.kinopoisk.dev/v1.4/movie/${5}`
// const HOST = 'https://freetestapi.com/api/v1';

const HOST = 'https://api.kinopoisk.dev/v1.4';
const PATH_MOVIES = 'movie';

const requestHeaders = new Headers();
requestHeaders.append('X-API-KEY', 'Q3Q0Y7K-JS4MFQA-H2Y9STK-FTVHWRQ');

const requestOptions = {
  method: 'GET',
  headers: requestHeaders,
};

export function getFilms<UserData>(): Promise<UserData>  {
  const URL = `${HOST}/${PATH_MOVIES}`;

  return makeRequest({URL, requestOptions});
}


export function getFilmById<UserData>(id: number): Promise<UserData> {
  const URL = `${HOST}/${PATH_MOVIES}/${id}`;

  return makeRequest({URL, requestOptions});
}

async function makeRequest<UserData>({URL, requestOptions}: {
  URL: string,
  requestOptions: ResponseInit
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