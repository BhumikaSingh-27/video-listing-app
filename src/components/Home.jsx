import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Welcome to video Library</h1>
      <div>
        <h3>TO browse all th videos click on the button below.</h3>
        <Link to="/video">
          <button>Explore Videos</button>
        </Link>
      </div>
    </>
  );
};

export default Home;
