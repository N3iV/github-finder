import React from "react";
import RepoItem from "./RepoItem";

const RepoList = ({ repos }) => {
  console.log(repos);
  return (
    <div className="rounded-lg shadow-lg card bg-base-100">
      <div className="card-body">
        <h2 className="text-3xl my-3 font-bold card-title">
          Lastest Respositories
        </h2>
        <div className="grid md:grid-cols-2 sm:grid-cols-1 md:gap-8 sm:gap-4">
          {repos.map((repo) => (
            <RepoItem key={repo.id} repo={repo} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RepoList;
