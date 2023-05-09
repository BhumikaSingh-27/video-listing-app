import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { VideoContext } from "../context/VideoContext";

const Header = () => {
  const { state } = useContext(VideoContext);
  const likeCount = state.data.filter(({ isLiked }) => isLiked);
  const watchLateCount = state.data.filter(({ inWatchList }) => inWatchList);
  return (
    <div>
      <nav className="nav">
        <NavLink className="navigation" to="/">
          Home
        </NavLink>
        <NavLink className="navigation" to="/video">
          Videos
        </NavLink>
        <NavLink className="navigation" to="/likedVideo">
          Liked Videos({likeCount.length ?? 0})
        </NavLink>
        <NavLink className="navigation" to="/watchlater">
          Watch Later Videos({watchLateCount.length ?? 0})
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
