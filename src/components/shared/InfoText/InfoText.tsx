import css from './style.module.css'
import {ReactNode} from "react";

function InfoText({children}: { children: ReactNode }) {
  return (
    <p className={css.info}>{children}</p>
  );
}

export default InfoText;