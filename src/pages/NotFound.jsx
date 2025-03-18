import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="container mx-auto text-center p-6">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-xl mt-2">Страница не найдена</p>
      <Link to="/users" className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
        Вернуться на главную
      </Link>
    </div>
  );
}