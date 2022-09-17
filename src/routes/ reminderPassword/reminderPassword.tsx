import React, {FormEvent, useState} from "react";
import {adress} from "../../constant/setting";
import logo from "../../images/megaK_logo.png";
import './reminderPassword.css';


export const ReminderPassword = () => {
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [email, setEmail] = useState({email: ''});

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setError(false);
        setSuccess(false);

        const res = await fetch(`${adress}/user/forgetpassword`, {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(email),
            credentials: 'include',
        })
        const data = await res.json()
        try {
            if (!data.isSuccess) throw new Error();
            setSuccess(true);
            setEmail({...email, email: ''});
        } catch (error) {
            setError(true);
        }
    };

    return (
        <div className="reminder-wrapper">
            <form action="" className="reminder-wrapper__form" onSubmit={handleSubmit}>
                <img
                    src={logo}
                    alt="MegaK logo"
                    className="login-wrapper__form__logo"
                />
                <label>Email</label>
                <input
                    className="reminder-wrapper__form__input-email"
                    type="email"
                    required={true}
                    onChange={e => setEmail({...email, email: e.target.value})}
                />
                <div className="reminder-wrapper__form__bottom-form-line">
                    <button className="reminder-wrapper__form__submit-button" type="submit">Wyślij</button>
                    {success &&
                        <span style={{
                            textAlign: "center",
                            color: "green",
                            marginTop: "10px"
                        }}>Na podany email wysłano link do ustawienia nowego hasła...</span>}
                    {error &&
                        <span style={{
                            color: "darkred",
                            marginTop: "10px"
                        }}>Coś poszło nie tak... Spóbuj ponownie.</span>}
                </div>
            </form>
        </div>
    )
}
