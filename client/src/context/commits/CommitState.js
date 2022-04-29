import React, { useReducer } from "react";
import CommitReducer from "./CommitReducer";
import CommitContext from "./CommitContext";
import axios from "axios";

const CommitState = (props) => {
  const initialState = {
    commits: [],
    selectedCommit: [],
  };

  const [state, dispatch] = useReducer(CommitReducer, initialState);

  const getCommits = async () => {
    const res = await axios.get("http://localhost:8000/commits");
    dispatch({
      type: "GET_COMMITS",
      payload: res.data,
    });
  };

  const getCommitDetails = async (sha) => {
    const res = await axios.get("http://localhost:8000/commits/" + sha);
    dispatch({
      type: "GET_COMMIT_DETAILS",
      payload: res.data,
    });
  };

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
