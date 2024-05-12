import {memo} from "react";
import css from './style.module.css'
import Logo from "@/components/shared/Logo";
import InfoText from "@/components/shared/InfoText/InfoText.tsx";

function Footer() {
  return (
    <footer className={css.footer}>
      <Logo size={"small"}/>

      <section>
        <InfoText>
          Автор проекта: Барабанов Дмитрий Александрович
        </InfoText>

        <ul>
          <li>
            <InfoText><span>телеграмм: @xfides</span></InfoText>
          </li>
          <li>
            <InfoText><span>email: baradmitrij@yandex.ru</span></InfoText>
          </li>
        </ul>

      </section>
    </footer>
  )
    ;
}

const MemoFooter = memo(Footer)

export default MemoFooter;