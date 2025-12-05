import Link from "next/link";

const Users = () => {
  return (
    <div>
      <h1>Users Data Dashboard</h1>

      <ul className="mt-10 ml-10">
        <li><Link rel="stylesheet" href="/dashboard/users/1">User1</Link></li>
        <li><Link rel="stylesheet" href="/dashboard/users/2">User2</Link></li>
        <li><Link rel="stylesheet" href="/dashboard/users/3">User3</Link></li>
        <li><Link rel="stylesheet" href="/dashboard/users/4">User4</Link></li>
      </ul>
    </div>
  );
};

export default Users;
