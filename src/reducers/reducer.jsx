export const initialState = {
  isLoading: false,
  isError: null,
  data: [],
  clickLike: false,
  clickWatch: false,
};

export const reducerFn = (state, action) => {
  switch (action.type) {
    case "LOADING": {
      return { ...state, isLoading: true };
    }
    case "GET_DATA": {
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        isError: null,
      };
    }
    case "ERROR": {
      return { ...state, isLoading: false, isError: action.payload };
    }
    case "LIKE_VIDEO": {
      const newData = state.data.map((video) =>
        video.id === action.payload
          ? { ...video, isLiked: !video.isLiked }
          : video
      );
      return { ...state, data: newData };
    }
    case "WATCH_LATER": {
      const newData = state.data.map((video) =>
        video.id === action.payload
          ? { ...video, inWatchList: !video.inWatchList }
          : video
      );
      return { ...state, data: newData };
    }
    default:
      return state;
  }
};
