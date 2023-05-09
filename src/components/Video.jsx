import { useContext } from "react";
import { VideoContext } from "../context/VideoContext";
import { Link } from "react-router-dom";

const Video = () => {
  const { state, dispatch } = useContext(VideoContext);
  //   console.log("inside video compo", state.data);
  return (
    <>
      {" "}
      {state.isLoading ? (
        <h2>Hold on! Loading videos...</h2>
      ) : (
        <>
          <h2 style={{ textAlign: "center" }}>All Videos</h2>
          <div className="main">
            {state.data.map(
              ({ id, title, thumbnail, url, isLiked, inWatchList }) => (
                <div className="container" key={id}>
                  <a href={url}>
                    <img src={thumbnail} alt={title} />
                  </a>
                  <Link to={`/video/${id}`}>
                    <h2>{title}</h2>
                  </Link>
                  <div className="button">
                    <button
                      onClick={() =>
                        dispatch({ type: "LIKE_VIDEO", payload: id })
                      }
                    >
                      {isLiked ? "Liked" : "Like"}
                    </button>
                    <button
                      onClick={() =>
                        dispatch({ type: "WATCH_LATER", payload: id })
                      }
                    >
                      {inWatchList ? "Added to watch later" : "Watch later"}
                    </button>
                  </div>
                </div>
              )
            )}
          </div>{" "}
        </>
      )}
    </>
  );
};

export default Video;
