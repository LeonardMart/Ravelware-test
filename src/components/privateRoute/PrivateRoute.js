import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Layout from "../../pages";

const PrivateRoute = () => {
  const user = useSelector((state) => state.auth.userInfo);
  return user ? (
    <Layout>
      <Outlet />
    </Layout>
  ) : (
    <Navigate to="/login" replace />
  );
};

export default PrivateRoute;
