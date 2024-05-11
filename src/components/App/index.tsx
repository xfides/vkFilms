import './style.module.css'
import {useService} from "@/hooks/useService.ts";
import {getFilmById, getFilms} from "@/api/service.ts";

interface FilmCardShort {
  nameShort: string
}

interface FilmCardFull {
  nameLong: string
}


function App() {
  const {loading, error, data} = useService<
    FilmCardFull, Parameters<typeof getFilmById>
  >(getFilmById, 5581330)
  const stringData = JSON.stringify(data);

  console.log(loading, error, data)

  const {loading: l1, error: e1, data: d1} =
    useService<FilmCardShort>(getFilms)
  const stringData1 = JSON.stringify(d1);

  console.log(l1, e1, d1)

  return (
    <>
      {loading && <div>LOADING...</div>}
      {error && <div>ERROR...{error.message}</div>}
      {stringData}
      <hr/>
      {stringData1}
    </>
  );
}


export default App
