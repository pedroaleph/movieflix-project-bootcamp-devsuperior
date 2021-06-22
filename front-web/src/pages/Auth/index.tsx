import { ReactComponent as AuthImage } from 'core/assets/images/auth-image.svg';
import { isAuthenticated, logout } from 'core/utils/auth';
import { Switch, Route } from 'react-router-dom';
import Login from './Login';
import './styles.scss';

const Auth = () => {
  return (
    <div className="auth-container">
      <div className="auth-info">
        <h1 className="auth-info-title">
          Avalie Filmes
        </h1>
        <p className="auth-info-description">
          Diga o que você achou do seu filme favorito
        </p>
        <AuthImage className="auth-info-image"/>
      </div>
      <div className="card-base auth-content border-radius-20">
        <Switch>
          <Route path="/auth/login">
            {isAuthenticated() && logout()}
            <Login />
          </Route>
        </Switch>
      </div>
    </div>
  )
}

export default Auth;