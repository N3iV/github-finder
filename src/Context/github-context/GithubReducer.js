import * as Type from "./GithubTypes";
const githubReducer = (state, action) => {
  switch (action.type) {
    case Type.GET_USERS: {
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    }
    case Type.GET_USER_AND_REPOS: {
      return {
        ...state,
        user: action.payload.user,
        repos: action.payload.repos,
        loading: false,
      };
    }
    case Type.GET_REPOS: {
      return {
        ...state,
        repos: action.payload,
        loading: false,
      };
    }
    case Type.SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case Type.CLEAR_USER: {
      return {
        ...state,
        users: [],
      };
    }
    default:
      return state;
  }
};
export default githubReducer;
