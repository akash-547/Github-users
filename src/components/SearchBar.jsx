import { useState } from "react";

const SearchBar = ({ fetchUser }) => {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() !== "") {
      fetchUser(username);
      setUsername("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-2 mb-6"
    >
      <input
        type="text"
        placeholder="Enter GitHub username"
        className="flex-1 p-3 rounded border focus:outline-none focus:ring"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <button className="bg-black text-white px-6 rounded hover:bg-gray-800">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
