import Home from "../../components/Home/Home"
import { Outlet } from "react-router-dom";

const HomePage = ({ loading }) => {
  return (
  <>
  <Home loading={loading} />
  <Outlet />
  </>
  );
}

export default HomePage