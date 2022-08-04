import React, { SyntheticEvent, useState } from "react";
import logo from '../../images/megaK_logo.png';
import {login} from '../../utils/login';
import './Login.css';
import { useNavigate } from "react-router-dom";
import {Global} from '../../context/store';
import {Box, Typography} from '@mui/material';

export const Login = () => {
    const [isError, setIsError] = useState(false)
    const [userEmail, setUserEmail] = useState<string>('');
    const [userPassword, setUserPassword] = useState<string>('');
    const navigate = useNavigate();
    const { dispatchGlobalContext } = React.useContext(Global);
    const submitLoginForm = async (e: SyntheticEvent) => {
        const data = { 
            email:userEmail,
	        pwd:userPassword
        }
        e.preventDefault();
        const response  = await login(data)
        if(response.isSuccess){
            dispatchGlobalContext({
                type:'SET_USER',
                payload:{
                    user:{
                        firstName: response.firstName,
                        lastName: response.lastName
                    }
                }
            })
            if(response.role === 'student') navigate("/student", { replace: true });
            if(response.role === 'hr/') navigate("/hr/available", { replace: true });
            if(response.role === 'admin') navigate("/admin", { replace: true });
            setIsError(false)
            }
            else{
                setIsError(true)
            }
    }
    return (
      <div className="login-wrapper">
          <form action="" onSubmit={submitLoginForm} className="login-wrapper__form">
              <img
                  src={logo}
                  alt="MegaK logo"
                  className="login-wrapper__form__logo"
              />
              {isError && <Box sx={{
                paddingBottom:'10px'
              }}>
                  <Typography sx={{
                    color:'red'
                  }}>Email albo łasło są nieprawidłowe</Typography>
              </Box>}
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
  