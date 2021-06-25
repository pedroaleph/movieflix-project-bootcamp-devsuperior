import { isAuthenticated, logout } from "core/utils/auth";
import { Route } from "react-router-dom";

type Props = {
  children: React.ReactNode;
  path: string;
  exact?: boolean;
}

const PrivateRoute = ({ children, path, exact }: Props) => {
  return (
    <Route 
      path={path}
      render={() => {
        if (!isAuthenticated()) {
          logout();
        } 
        return children;
      }}
      exact={exact}
    />
  )
}

export default PrivateRoute;