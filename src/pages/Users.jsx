import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Users List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white p-4 shadow-md rounded-md transform transition duration-300 hover:scale-105 hover:shadow-lg"
          >
            <img src={`https://i.pravatar.cc/150?img=${user.id}`} alt="Avatar" className="w-20 h-20 rounded-full mx-auto"/>
            <h2 className="text-lg font-semibold text-center mt-2">
              {user.name.firstname} {user.name.lastname}
            </h2>
            <p className="text-center text-gray-600">{user.email}</p>
            <p className="text-center">{user.address.city}, {user.address.street}</p>
            <Link to={`/users/${user.id}`} className="block text-center mt-3 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              Подробнее
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}