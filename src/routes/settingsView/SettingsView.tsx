import * as React from 'react';
import WrapperLoggedView from "../../components/wrapperLoggedView/WrapperLoggedView";
import {FormEvent, useState} from "react";
import "./../studentView/StudentView.css";

function SettingsView() {
    const [newPwd, setNewPwd] = useState('');
    const [checkPwd, setCheckPwd] = useState('');
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setSuccess(false)
        setError(false);

        if(newPwd !== checkPwd) {
            setSuccess(false);
            setError(true);
            return
        }

        const res = await fetch('http://localhost:3001/user/change-password', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({newPwd}),
            credentials: 'include',
        });

        const data = await res.json();

        try {
            if (!data.isSuccess) {
                throw new Error();
            }
            setSuccess(true);
        } catch (error) {
            setError(true);
        }
    };

    return (
        <WrapperLoggedView>
            <div className="editProfile">
                <div className="editProfileWrapper" style={{width: "40%"}}>
                    <div className="editProfileTitleWrapper">
                        <span className="editProfileTitle">Edytuj hasło</span>
                    </div>
                    <form action="" className="editProfileForm" onSubmit={handleSubmit}>

                        <label>Nowe hasło</label>
                        <input
                            type="password"
                            required={true}
                            onChange={e => setNewPwd( e.target.value)}
                        />
                        <label>Powtórz hasło</label>
                        <input
                            type="password"
                            required={true}
                            onChange={e => setCheckPwd(e.target.value)}
                        />
                        <button className="btn settingsSubmit" type="submit">Zapisz</button>
                        {success &&
                            <span style={{textAlign: "center", color: "green", marginTop: "10px"}}>Hasło zostało zaktualizowane...</span>}
                        {error &&
                            <span style={{
                                color: "darkred",
                                marginTop: "10px"
                            }}>Coś poszło nie tak... Spóbuj ponownie.</span>}
                    </form>
                </div>
            </div>
        </WrapperLoggedView>
    )
}

export default SettingsView;
