import { ReactComponent as HidePasswordIcon } from 'core/assets/images/hide-password.svg';
import { ReactComponent as ShowPasswordIcon } from 'core/assets/images/show-password.svg';
import ButtonIcon from 'core/components/ButtonIcon';
import { saveSessionData } from 'core/utils/auth';
import history from 'core/utils/history';
import { LoginData, makeLogin } from 'core/utils/request';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import './styles.scss';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginData>();
  const [isHidden, setIsHidden] = useState(true);

  const onSubmit = (data: LoginData) => {
    makeLogin(data)
      .then(response => {
        saveSessionData(response.data);
        history.replace('/');
      })
      .catch(() => {
        toast("Usuário ou senha inválidos!", {
          className: 'dark-toast',
          progressClassName: 'yellow-progress'
        });
      })
  }

  const handlePasswordInput = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    event.preventDefault();
    setIsHidden(!isHidden);
  }

  return (
    <form className="auth-login-container" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="auth-login-title">
        login
      </h1>
      <div>
        <input
          type="email"
          className={`form-control input-base ${errors.username ? 'border-primary' : ''}`}
          placeholder="Email"
          {...register("username", {
            required: "Campo obrigatório",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Email inválido"
            }
          })}
        />
        {errors.username && (
          <div className="invalid-feedback text-primary d-block">
            {errors.username.message}
          </div>
        )}
      </div>
      <div>
      <div className="auth-login-password">
        <input
          type={isHidden ? "password" : "text"}
          className={`form-control input-base ${errors.password ? 'border-primary' : ''}`}
          placeholder="Senha"
          {...register("password", { required: "Campo obrigatório" })}
        />
        <i onClick={event => handlePasswordInput(event)}>
          {isHidden && (<HidePasswordIcon className="password-icon" />)}
          {!isHidden && (<ShowPasswordIcon className="password-icon" />)}
        </i>
      </div>
      {errors.password && (
        <div className="invalid-feedback text-primary d-block">
          {errors.password.message}
        </div>
      )}
      </div>
      <div className="auth-login-button">
        <ButtonIcon text="logar" />
      </div>
    </form>
  )
}

export default Login;