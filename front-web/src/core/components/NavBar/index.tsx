import { isAuthenticated, logout } from 'core/utils/auth';
import { Link } from 'react-router-dom';
import './styles.scss';

const NavBar = () => {
  
  const handleLogout = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    logout();
  }

  return (
    <div className="bg-primary nav-main">
      <Link to="/" className="nav-logo-text text-dark">
        <h4>MovieFlix</h4>
      </Link>
      {isAuthenticated() && (
        <button
          type="button"
          className="btn btn-outline-dark"
          onClick={event => handleLogout(event)}
        >
          <h5>SAIR</h5>
        </button>
      )}
    </div>
  )
}

export default NavBar;