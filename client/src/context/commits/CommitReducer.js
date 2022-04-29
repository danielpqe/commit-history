import { GET_COMMITS, GET_COMMIT_DETAILS } from "../types";

export default (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_COMMITS:
      return {
        ...state,
        commits: payload,
      };
    case GET_COMMIT_DETAILS:
      return {
        ...state,
        selectedCommit: payload,
      };
    default:
      return {
        ...state,
      };
  }
};
