import {memo} from "react";

function Header() {
  return (
    <header className="header">
      <h1 className="header__logo logo">VK Films</h1>

      <section className="header__profile profile">
        <p className="profile__rating">
          Тестовое задание для поступления на
          стажировку по React стеку
        </p>
        <p className="profile__rating">
          Исходный код можно найти в репозитории на GitHub
          по <a href='#'>ссылке</a> ( https://github.com/xfides/vkFilms )
        </p>
      </section>

    </header>
  );
}

const MemoHeader = memo(Header)

export default MemoHeader;