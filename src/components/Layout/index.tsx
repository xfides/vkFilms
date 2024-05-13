import './style.css'
import MemoHeader from "@/components/Header";
import MemoFooter from "@/components/Footer";
import {Outlet} from "react-router-dom";

function Layout() {
  return (
    <>
      <MemoHeader></MemoHeader>
      <main>
        <Outlet/>
      </main>
      <MemoFooter></MemoFooter>
    </>
  );
}

export default Layout;