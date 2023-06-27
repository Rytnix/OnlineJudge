import Tabs from "../components/Home/Tab";
import NavBar from "../components/Navbar/navbar";
import styles from "./styles.module.css";

function Home(userDetails) {
  const user = userDetails.user;
  const logout = () => {
    window.open(`${process.env.REACT_APP_API_URL}/api/oj/logout`, "_self");
  };
  return (
    <>
      <NavBar />
      <Tabs />
    </>
  );
}

export default Home;
