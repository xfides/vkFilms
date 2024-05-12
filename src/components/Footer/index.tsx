import {memo} from "react";
import './style.module.css'

function Footer() {
  return (
    <footer className="footer">
      <section className="footer__logo logo logo--smaller">VK Films</section>
      <section className="footer__statistics">
        <p>Всего с сервера запрошено 30 фильмов</p>
      </section>
    </footer>
  );
}

const MemoFooter = memo(Footer)

export default MemoFooter;