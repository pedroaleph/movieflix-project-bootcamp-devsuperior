//import { isAuthenticated, logout } from "core/utils/auth";
import { Route } from "react-router-dom";

type Props = {
  children: React.ReactNode;
  path: string;
}

const PrivateRoute = ({ children, path }: Props) => {
  return (
    <Route 
      path={path}
      render={() => {
        /*if (!isAuthenticated()) {
          return logout();
        } */
        return children;
      }}
    />
  )
}

export default PrivateRoute;