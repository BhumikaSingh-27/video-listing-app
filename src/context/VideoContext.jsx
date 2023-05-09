import { createContext, useEffect, useReducer } from "react";
import { initialState, reducerFn } from "../reducers/reducer";
import { fakeFetch } from "../data/api";

export const VideoContext = createContext();

export const VideoContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFn, initialState);

  useEffect(() => {
    (async () => {
      dispatch({ type: "LOADING" });
      try {
        const {
          status,
          data: { videos },
        } = await fakeFetch("https://example.com/api/videos");
        if (status === 200) {
          dispatch({ type: "GET_DATA", payload: videos });
        }
      } catch (e) {
        console.log(e);
        dispatch({ type: "ERROR", payload: e.message });
      }
    })();
  }, []);
  console.log(state.data);
  return (
    <VideoContext.Provider value={{ state, dispatch }}>
      {children}
    </VideoContext.Provider>
  );
};
