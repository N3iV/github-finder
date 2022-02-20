import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const UserItem = ({ user: { login, avatar_url } }) => {
  return (
    <div className="card shadow-md compact side bg-base-100">
      <div className="flex-row items-center space-x-4 card-body">
        <div>
          <div className="avatar">
            <div className="rounded-full shadow w-14 h-14 overflow-hidden">
              <img src={avatar_url} alt="profile" />
            </div>
          </div>
        </div>
        <div>
          <h2 className="card-title">{login}</h2>
          <Link
            className="text-base-content text-opacity-240"
            to={`/user/${login}`}
          >
            Visit profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};
