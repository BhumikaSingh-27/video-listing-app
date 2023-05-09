import { useContext } from "react";
import { VideoContext } from "../context/VideoContext";
import { Link, NavLink } from "react-router-dom";
// import { NavLink } from "react-router-dom";

const WatchLater = () => {
  const { state, dispatch } = useContext(VideoContext);
  const watchLaterVideos = state.data.filter(({ inWatchList }) => inWatchList);

  return (
    <div>
      {watchLaterVideos.length !== 0 && (
        <h2 style={{ textAlign: "center" }}>Watch Later Videos</h2>
      )}

      <div className="main">
        {watchLaterVideos.length === 0 ? (
          <h2>
            You haven&apos;t saved any videos yet! Go back to{" "}
            <NavLink
              style={{ fontSize: "2rem", textDecoration: "underline" }}
              to="/video"
            >
              videos
            </NavLink>{" "}
            to explore more!
          </h2>
        ) : (
          watchLaterVideos?.map(
            ({ id, title, thumbnail, url, isLiked, inWatchList }) => (
              <div className="container" key={id}>
                <a href={url}>
                  <img src={thumbnail} alt={title} />
                </a>
                <Link to={`/video/${id}`}><h2>{title}</h2></Link>
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
                    {inWatchList ? "Remove from watch later" : "Watch later"}
                  </button>
                </div>
              </div>
            )
          )
        )}
      </div>
    </div>
  );
};

export default WatchLater;
