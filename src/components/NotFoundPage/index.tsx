import {Link} from "react-router-dom";

function NotFoundPage() {
  return (
    <div>
      <h3>Запрашиваемая страница не найдена</h3>
      <Link to="/">К списку фильмов</Link>
    </div>
  );
}

export default NotFoundPage;