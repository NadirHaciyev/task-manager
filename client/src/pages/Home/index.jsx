// Layouts
import Navbar from "../../layouts/Navbar";

// components
import Admin from "./Admin";
import User from "./User";

// Redux Toolkit
import { useSelector } from "react-redux";

function Home() {
  const { me } = useSelector((state) => state.auth);

  return (
    <>
      <Navbar />
      {me.role ? (
        me.role === "admin" ? (
          <Admin />
        ) : (
          <User />
        )
      ) : (
        <div className="text-center mt-40 text-red-800 text-5xl">
          Please register or login
        </div>
      )}
    </>
  );
}

export default Home;
