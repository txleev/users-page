import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function UserDetails() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [id]);

  if (!user) return <p className="text-center">Loading...</p>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">User Details</h1>
      <div className="bg-white p-4 shadow-md rounded-md">
        <p><strong>Username:</strong> {user.username}</p>
        <p>
          <strong>Password:</strong> 
          {showPassword ? ` ${user.password}` : " •••••••"}
          <button onClick={() => setShowPassword(!showPassword)} className="ml-2 text-blue-500">
            {showPassword ? "Hide" : "Show"}
          </button>
        </p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Address:</strong> {user.address.street}, {user.address.number}, {user.address.city}, {user.address.zipcode}</p>
        <p><strong>Geo:</strong> {user.address.geolocation.lat}, {user.address.geolocation.long}</p>
        <Link to="/users" className="block mt-4 bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600">
          Назад к списку пользователей
        </Link>
      </div>
    </div>
  );
}