import { ReactComponent as HidePasswordIcon } from 'core/assets/images/hide-password.svg';
import { ReactComponent as ShowPasswordIcon } from 'core/assets/images/show-password.svg';
import ButtonIcon from 'core/components/ButtonIcon';
import { useState } from 'react';
import './styles.scss';

const Login = () => {

  const [isHidden, setIsHidden] = useState(true);

  const handlePasswordInput = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    event.preventDefault();
    setIsHidden(!isHidden);
  }

  return (
    <form className="auth-login-container">
      <h1 className="auth-login-title">
        login
      </h1>
      <input
        type="text"
        className="form-control input-base"
        placeholder="Email"
      />
      <div className="auth-login-password">
      <input
        type={ isHidden ? "password" : "text"}
        className="form-control input-base"
        placeholder="Senha"
      />
      <i onClick={event => handlePasswordInput(event)}>
        {isHidden && (<HidePasswordIcon className="password-icon"/>)}
        {!isHidden && (<ShowPasswordIcon className="password-icon"/>)}
      </i>
      </div>
      <ButtonIcon text="logar" />
    </form>
  )
}

export default Login;