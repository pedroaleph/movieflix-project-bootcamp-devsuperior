import { Link } from 'react-router-dom';
import './styles.scss';

const NavBar = () => {
  return (
    <div className="bg-primary nav-main">
      <Link to="/" className="nav-logo-text text-dark">
        <h4>MovieFlix</h4>
      </Link>
      <button type="button" className="btn btn-outline-dark">
        <h5>SAIR</h5>
      </button>
    </div>
  )
}

export default NavBar;