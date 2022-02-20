import React from "react";
import UserSearch from "../components/users/UserSearch";
import UsersResult from "../components/users/UsersResult";

function Home() {
  return (
    <>
      <UserSearch />
      <UsersResult />
    </>
  );
}

export default Home;
