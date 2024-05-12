import css from './style.module.css'

import {ReactNode} from "react";
import MemoHeader from "@/components/Header";
import MemoFooter from "@/components/Footer";

function Layout({children}:{children: ReactNode}) {
  console.log(css)
  return (
    <>
      <MemoHeader></MemoHeader>
      <main>
        {children}
      </main>
      <MemoFooter></MemoFooter>
    </>
);
}

export default Layout;