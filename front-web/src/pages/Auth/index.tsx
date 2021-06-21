import { Switch, Route } from 'react-router-dom';
import './styles.scss';

const Auth = () => {
  return (
    <div className="auth-container">
      <div className="auth-info">

      </div>
      <div className="auth-content">
        <Switch>
          <Route path="auth/login">

          </Route>
        </Switch>
      </div>
    </div>
  )
}

export default Auth;