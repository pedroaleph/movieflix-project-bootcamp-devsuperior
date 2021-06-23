import { logout } from 'core/utils/auth';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './styles.scss';

const NavBar = () => {
  const [isLogged , setIsLogged] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLogged(Boolean(localStorage.getItem('authData')));
  }, [location])

  const handleLogout = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    logout();
  }

  return (
    <div className="bg-primary nav-main">
      <Link to="/" className="nav-logo-text text-dark">
        <h4>MovieFlix</h4>
      </Link>
      {isLogged && (
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