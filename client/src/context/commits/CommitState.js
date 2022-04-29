import React, { useReducer } from "react";
import CommitReducer from "./CommitReducer";
import CommitContext from "./CommitContext";
import axios from "axios";

const CommitState = (props) => {
  const initialState = {
    commits: [],
    selectedCommit: null,
  };

  const [state, dispatch] = useReducer(CommitReducer, initialState);

  const getCommits = async () => {
    const res = await axios.get("http://localhost:8000/commits");
    console.log("API", res);
    dispatch({
      type: "GET_COMMITS",
      payload: res.data,
    });
  };

  const getCommitDetails = () => {};

  return (
    <CommitContext.Provider
      value={{
        commits: state,
        // selectedCommit: state.selectedCommit,
        getCommits,
        getCommitDetails,
      }}
    >
      {props.children}
    </CommitContext.Provider>
  );
};

export default CommitState;
