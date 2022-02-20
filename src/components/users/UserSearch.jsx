import React, { useContext, useState } from "react";
import AlertContext from "../../Context/alert/AlertContext";
import { searchUsers } from "../../Context/github-context/GithubActions";
import GithubContext from "../../Context/github-context/GithubContext";
import Alert from "../alert/Alert";

function UserSearch() {
  const [text, setText] = useState("");
  const { users, dispatch } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);
  const hanldeSubmit = async (e) => {
    e.preventDefault();
    if (text === "") {
      setAlert("Please Enter Something", "error");
    } else {
      dispatch({ type: "SET_LOADING" });
      const users = await searchUsers(text);
      dispatch({ type: "GET_USERS", payload: users });
      setText("");
    }
  };
  return (
    <div className="gird grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
      <div>
        <form className="form-control ">
          <div className="flex items-center justify-center">
            <input
              type="text"
              className="w-4/5 pr-40 bg-gray-200 input input-lg text-black"
              placeholder="Search"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button
              className=" rounded-l-none w-36 btn btn-lg"
              type="submit"
              onClick={hanldeSubmit}
            >
              Go
            </button>
          </div>
        </form>
      </div>
      <Alert />

      {users.length > 0 && (
        <div>
          <button
            className="btn btn-ghost btn-lg"
            onClick={() => dispatch({ type: "CLEAR_USER" })}
          >
            Clear
          </button>
        </div>
      )}
    </div>
  );
}

export default UserSearch;
