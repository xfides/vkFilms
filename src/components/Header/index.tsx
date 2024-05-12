import {memo} from "react";
import css from './style.module.css'
import Logo from "@/components/shared/Logo";
import InfoText from "@/components/shared/InfoText/InfoText.tsx";

function Header() {
  return (
    <header className={css.header}>
      <Logo />

      <section>
        <InfoText>
          Тестовое задание для поступления на
          стажировку по React стеку
        </InfoText>
        <InfoText>
          Исходный код можно найти в репозитории на GitHub по
          &nbsp;
          <a href='https://github.com/xfides/vkFilms' target='_blank'>
            ссылке
          </a>
          &nbsp;
          <span>( https://github.com/xfides/vkFilms )</span>
        </InfoText>
      </section>

    </header>
  );
}

const MemoHeader = memo(Header)

export default MemoHeader;