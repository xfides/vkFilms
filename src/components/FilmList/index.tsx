import './style.module.css'
import FilmListItem from "@/components/FilmListItem";

function FilmList() {
  return (
    <section className="films">
      <section className="films-list">
        <h2 className="films-list__title">
          Наиболее популярные фильмы с API кинопоиска
        </h2>

        <div className="films-list__container">
          <FilmListItem></FilmListItem>
        </div>

      </section>
    </section>
  );
}

export default FilmList;