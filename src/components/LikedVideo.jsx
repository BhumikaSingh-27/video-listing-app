import { useContext } from "react";
import { VideoContext } from "../context/VideoContext";
import { Link } from "react-router-dom";

const LikedVideo = () => {
  const { state, dispatch } = useContext(VideoContext);
  const noOfLikedVideos = state.data.filter(({ isLiked }) => isLiked);
  return (
    <>
      {noOfLikedVideos.length !== 0 && (
        <h2 style={{ textAlign: "center" }}>Liked Videos</h2>
      )}
      <div className="main">
        {noOfLikedVideos.length === 0 ? (
          <h2>You haven&apos;t liked any videos yet!</h2>
        ) : (
          <>
            {noOfLikedVideos?.map(
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
                      {inWatchList ? "Added to watch later" : "Watch later"}
                    </button>
                  </div>
                </div>
              )
            )}
          </>
        )}
      </div>
    </>
  );
};

export default LikedVideo;
