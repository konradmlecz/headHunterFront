import React, { SyntheticEvent, useState } from "react";
import logo from '../../images/megaK_logo.png';
import {login} from '../../utils/login';
import './Login.css';
import { useNavigate } from "react-router-dom";
import {Global} from '../../context/store';

export const Login = () => {

    const [userEmail, setUserEmail] = useState<string>('');
    const [userPassword, setUserPassword] = useState<string>('');
    const navigate = useNavigate();
    const { dispatchGlobalContext, globalState } = React.useContext(Global);
    console.log(globalState, "globalState");
    const submitLoginForm = async (e: SyntheticEvent) => {
        const data = {
            email:userEmail,
	        pwd:userPassword,
            role:'USER'
        }
        e.preventDefault();
        const response  = await login(data)
        if(response.isSuccess){
            dispatchGlobalContext({
                type:'SET_USER',
                payload:{
                    user:{
                        role: response.role,
                        name: '',
                        surname: ''
                    }
                }
            })
            if(response.role === 'student') navigate("/user", { replace: true });
            if(response.role === 'hr') navigate("/hr", { replace: true });
            if(response.role === 'admin') navigate("/admin", { replace: true });
            }
        console.log(response, "response");
    }


    return (
      <div className="login-wrapper">
          <form action="" onSubmit={submitLoginForm} className="login-wrapper__form">
              <img
                  src={logo}
                  alt="MegaK logo"
                  className="login-wrapper__form__logo"
              />
              <input
                  type="email"
                  placeholder="E-mail"
                  className="login-wrapper__form__input-email"
                  onChange={e => setUserEmail(e.target.value)}
                  required={true}
              />
              <input
                  type="password"
                  placeholder="Hasło"
                  className="login-wrapper__form__input-password"
                  onChange={e => setUserPassword(e.target.value)}
                  required={true}
              />
              <a
                  href=""
                  className="login-wrapper__form__link-forgot"
              >
                  Zapomniałeś hasła?
              </a>
              <div className="login-wrapper__form__bottom-form-line">
                  <p className="login-wrapper__form__register-label">
                      Nie masz konta?
                      <a href=""> Zarejestruj się</a>
                  </p>
                  <input type="submit" value="Zaloguj się" className="login-wrapper__form__submit-button"/>
              </div>
          </form>
      </div>
    );
  }
  