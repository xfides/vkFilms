import {ReactNode} from 'react';
import css from './style.module.css'

function PageTitle({children}: { children: ReactNode }) {
  return (
    <h1 className={css.pageTitle}>{children}</h1>
  );
}

export default PageTitle;

