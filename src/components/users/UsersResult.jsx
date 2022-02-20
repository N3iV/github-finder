import React, { useContext } from "react";
import GithubContext from "../../Context/github-context/GithubContext";
import Spinner from "../layout/Spinner";
import UserItem from "./UserItem";
function UsersResult() {
  const { users, loading } = useContext(GithubContext);
  console.log(users, loading);
  if (!loading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  } else {
    return <Spinner />;
  }
}

export default UsersResult;
