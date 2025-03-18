import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4">
      <nav className="container mx-auto flex justify-between">
        <Link to="/users" className="text-xl font-bold">Users App</Link>
      </nav>
    </header>
  );
}