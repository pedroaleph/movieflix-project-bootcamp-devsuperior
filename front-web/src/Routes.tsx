import NavBar from 'core/components/NavBar';
import PrivateRoute from 'core/components/Routes/PrivateRoute';
import history from 'core/utils/history';
import Auth from 'pages/Auth';
import Movies from 'pages/Movies';
import MovieDetails from 'pages/Movies/MovieDetails';
import { Router, Switch, Route, Redirect } from 'react-router-dom';

const Routes = () => {
  return (
    <Router history={history}>
      <NavBar />
        <Switch>
          <Redirect from="/" to="/movies" exact/>
          <Route path="/" exact>

          </Route>
          <Redirect from="/auth" to="auth/login" exact/>
          <Route path="/auth">
            <Auth />
          </Route>
          <PrivateRoute path="/movies">
            <Movies />
          </PrivateRoute>
          <PrivateRoute path="/movies/:movieId">
            <MovieDetails />
          </PrivateRoute>
        </Switch>
    </Router>
  );
}

export default Routes;