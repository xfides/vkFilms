import './style.module.css'

import {ReactNode} from "react";
import MemoHeader from "@/components/Header";
import MemoFooter from "@/components/Footer";

function Layout({children}: { children: ReactNode }) {
  return (
    <>
      <MemoHeader></MemoHeader>
      <main>{children}</main>
      <MemoFooter></MemoFooter>
    </>
  );
}

export default Layout;