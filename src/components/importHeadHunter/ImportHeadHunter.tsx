import React, {FormEvent, useState} from "react";
import {adress} from "../../constant/setting";


export const ImportHeadHunter = () => {
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [user, setUser] = useState(
        {
            email: '',
            firstName: '',
            lastName: '',
            company: '',
            maxReservedStudents: 0,
        }
    );

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setError(false);
        setSuccess(false);

        const res = await fetch(`${adress}/admin/headhunter`, {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(user),
            credentials: 'include',
        })
        const data = await res.json()
        try {
            if (!data.isSuccess) throw new Error();
            setSuccess(true);
            setUser({
                email: '',
                firstName: '',
                lastName: '',
                company: '',
                maxReservedStudents: 0,
            })
        } catch (error) {
            setError(true);
        }
    };

    const updateUser = (key: string, value: any) => {
        setUser(user => ({
            ...user,
            [key]: value,
        }));
    };


    return(
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <form action="" className="settingsForm" onSubmit={handleSubmit}>
                        <label>Email</label>
                        <input
                            type="email"
                            required={true}
                            value={user.email}
                            onChange={e => updateUser("email", e.target.value)}
                        />
                        <label>Imię</label>
                        <input
                            type="text"
                            required={true}
                            value={user.firstName ?? ""}
                            onChange={e => updateUser("firstName", e.target.value)}
                        />
                        <label>Nazwisko</label>
                        <input
                            type="text"
                            required={true}
                            value={user.lastName ?? ""}
                            onChange={e => updateUser("lastName", e.target.value)}
                        />
                        <label>Nazwa Firmy</label>
                        <input
                            type="text"
                            required={true}
                            value={user.company ?? ""}
                            onChange={e => updateUser("company", e.target.value)}
                        />
                        <label>Max. il. Kursantów</label>
                        <input
                            type="number"
                            min={1}
                            max={99}
                            required={true}
                            value={user.maxReservedStudents ?? ""}
                            onChange={e => updateUser("maxReservedStudents", e.target.value)}
                        />

                        <button className="btn settingsSubmit" type="submit">Zapisz</button>
                        {success &&
                            <span style={{textAlign: "center", color: "green", marginTop: "10px"}}>Pomyślnie zaktualizowano...</span>}
                        {error &&
                            <span style={{
                                color: "darkred",
                                marginTop: "10px"
                            }}>Coś poszło nie tak... Spóbuj ponownie.</span>}
                    </form>
                </div>
            </div>
        </div>
    )
}
