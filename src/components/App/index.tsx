import Layout from "@/components/Layout";
import FilmList from "@/components/FilmList";
import FilmFull from "@/components/FilmFull";
import {Routes, Route} from 'react-router-dom'
import NotFoundPage from "@/components/NotFoundPage";

function App() {
  return (
    <Routes>
      <Route  element={<Layout/>}>
        <Route path="/" element={<FilmList/>}/>
        <Route path="/:id" element={<FilmFull/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Route>
    </Routes>
  );
}

export default App
