import { useContext } from "react";
import { VideoContext } from "../context/VideoContext";
import { useParams } from "react-router";

const VideoDetail = () => {
  const { state, dispatch } = useContext(VideoContext);
  const { vId } = useParams();

  const detail = state.data.find(({ id }) => id.toString() === vId);

  return (
    <>
    <h2>Video Detail Page</h2>
    <div className="main">
      <div className="container" key={detail.id}>
        <a href={detail.url}>
          <img src={detail.thumbnail} alt={detail.title} />
        </a>
        <h2>{detail.title}</h2>
        <div className="button">
          <button
            onClick={() => dispatch({ type: "LIKE_VIDEO", payload: detail.id })}
          >
            {detail.isLiked ? "Liked" : "Like"}
          </button>
          <button
            onClick={() =>
              dispatch({ type: "WATCH_LATER", payload: detail.id })
            }
          >
            {detail.inWatchList ? "Added to watch later" : "Watch later"}
          </button>
        </div>
      </div>
    </div></>
  );
};

export default VideoDetail;
