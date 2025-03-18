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
      <h1 className="text-2xl font-bold mb-4 text-center">User Details</h1>
      <div className="bg-white p-6 shadow-md rounded-md max-w-lg mx-auto text-center">
        <img
          src={`https://i.pravatar.cc/150?img=${id}`}
          alt="User Avatar"
          className="w-32 h-32 rounded-full mx-auto shadow-md"
        />

        <h2 className="text-xl font-semibold mt-4">{user.name.firstname} {user.name.lastname}</h2>
        <p className="text-gray-600">@{user.username}</p>

        <div className="mt-4 text-left">
          <p><strong>📧 Email:</strong> {user.email}</p>
          <p><strong>📞 Phone:</strong> {user.phone}</p>
          <p>
            <strong>🔐 Password:</strong> 
            {showPassword ? ` ${user.password}` : " •••••••"}
            <button 
              onClick={() => setShowPassword(!showPassword)}
              className="ml-2 text-blue-500"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </p>
          <p><strong>🏠 Address:</strong> {user.address.street}, {user.address.number}, {user.address.city}, {user.address.zipcode}</p>
          <p><strong>🌍 Geo:</strong> {user.address.geolocation.lat}, {user.address.geolocation.long}</p>
        </div>

        <Link to="/users" className="mt-6 inline-block bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600">
          ⬅ Back to Users List
        </Link>
      </div>
    </div>
  );
}