import Navbar from "../Container/Navbar";
import SideNav from "../Container/SideNav";
import Profile from "./Profile/Profile";
import './Home.css';

function Home() {
  return (
    <>
      <Navbar />
      <div className="Homeflex">
        <div className="snav">
          <SideNav/>
        </div>
        <div className="prof">
          <Profile/>
        </div>
      </div>
    </>
  );
}

export default Home;
