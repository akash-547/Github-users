import { useState } from "react";
import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";
import Loader from "./components/Loader";

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchUser = async (username) => {
    setLoading(true);
    setError("");
    setUser(null);

    try {
      const response = await fetch(
        `https://api.github.com/users/${username}`
      );

      if (!response.ok) {
        throw new Error("User not found");
      }

      const data = await response.json();
      setUser(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-start p-6">
      <div className="w-full max-w-xl">
        <h1 className="text-3xl font-bold text-center mb-6">
          GitHub User Finder
        </h1>

        <SearchBar fetchUser={fetchUser} />

        {loading && <Loader />}
        {error && <p className="text-red-500 text-center mt-4">{error}</p>}
        {user && <UserCard user={user} />}
      </div>
    </div>
  );
};

export default App;
