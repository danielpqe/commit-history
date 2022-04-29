import { GET_COMMITS } from "../types";

export default (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_COMMITS:
      console.log("payload", state);
      return {
        ...state,
        commits: payload,
      };
    default:
      return {
        ...state,
      };
  }
};
