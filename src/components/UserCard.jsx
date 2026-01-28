const UserCard = ({ user }) => {
  return (
    <div className="bg-white shadow rounded p-6">
      <div className="flex items-center gap-4">
        <img
          src={user.avatar_url}
          alt="avatar"
          className="w-24 h-24 rounded-full"
        />

        <div>
          <h2 className="text-xl font-bold">{user.name}</h2>
          <p className="text-gray-500">@{user.login}</p>
        </div>
      </div>

      <p className="mt-4">{user.bio}</p>

      <div className="grid grid-cols-3 gap-4 text-center mt-4">
        <div>
          <p className="font-bold">{user.followers}</p>
          <p className="text-sm">Followers</p>
        </div>
        <div>
          <p className="font-bold">{user.following}</p>
          <p className="text-sm">Following</p>
        </div>
        <div>
          <p className="font-bold">{user.public_repos}</p>
          <p className="text-sm">Repos</p>
        </div>
      </div>

      <a
        href={user.html_url}
        target="_blank"
        className="block mt-5 text-center bg-black text-white py-2 rounded hover:bg-gray-800"
      >
        View Profile
      </a>
    </div>
  );
};

export default UserCard;
