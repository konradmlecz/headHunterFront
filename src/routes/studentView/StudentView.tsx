import React, {FormEvent, useEffect, useState} from 'react'
import WrapperLoggedView from '../../components/wrapperLoggedView/WrapperLoggedView';
import {Global} from '../../context/store';
import {useNavigate} from "react-router-dom";
import {expectedContractType, expectedTypeWork, Student} from "../../types/global-types";
import "./StudentView.css";

function UserView() {

    const {dispatchGlobalContext, globalState} = React.useContext(Global);
    const navigate = useNavigate();

    const [user, setUser] = useState<Student>(
        {
            email: '',
            phone: 0,
            firstName: '',
            lastName: '',
            githubUsername: '',
            portfolioUrls: '',
            projectUrls: '',
            bio: '',
            expectedTypeWork: expectedTypeWork.NOMETTER,
            targetWorkCity: '',
            expectedContractType: expectedContractType.NO,
            expectedSalary: '',
            canTakeApprenticeship: false,
            monthsOfCommercialExp: 0,
            education: '',
            workExperience: '',
            courses: '',
        }
    );
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setError(false);
        setSuccess(false);
    };

    const updateUser = (key: string, value: any) => {

        setUser(user => ({
            ...user,
            [key]: value,
        }));
    };

    useEffect(() => {
        if (globalState.user.role !== "student") navigate("/login", {replace: true});
    }, [])

    return (
        <WrapperLoggedView>
            <div className="settings">
                <div className="settingsWrapper">
                    <div className="settingsTitle">
                        <span className="settingsUpdateTitle">Edytuj profil</span>
                        <div className="btnWrapper">
                            <button className="btn" type="submit">Zmień hasło</button>
                            <button className="btn" type="submit">Zatrudniony</button>
                        </div>
                    </div>
                    <form action="" className="settingsForm" onSubmit={handleSubmit}>

                        <label>Email</label>
                        <input
                            type="email"
                            required={true}
                            placeholder={user.email}
                            onChange={e => updateUser("email", e.target.value)}
                        />
                        <label>Numer telefonu</label>
                        <input
                            type="text"
                            placeholder={String(user.phone)}
                            onChange={e => updateUser("phone", e.target.value)}
                        />
                        <label>Imię</label>
                        <input
                            type="text"
                            required={true}
                            placeholder={user.firstName}
                            onChange={e => updateUser("firstName", e.target.value)}
                        />
                        <label>Nazwisko</label>
                        <input
                            type="text"
                            required={true}
                            placeholder={user.lastName}
                            onChange={e => updateUser("lastName", e.target.value)}
                        />

                        <label>Login GitHub</label>
                        <input
                            type="text"
                            required={true}
                            placeholder={user.githubUsername}
                            onChange={e => updateUser("githubUsername", e.target.value)}
                        />
                        <label>Portfolio URL</label>
                        <input
                            type="text"
                            placeholder={user.portfolioUrls}
                            onChange={e => updateUser("portfolioUrls", e.target.value)}
                        />
                        <label>Projekty GitHub</label>
                        <input
                            type="text"
                            required={true}
                            placeholder={user.projectUrls}
                            onChange={e => updateUser("projectUrls", e.target.value)}
                        />
                        <label>Biogram zawodowy</label>
                        <input
                            type="text"
                            placeholder={user.bio}
                            onChange={e => updateUser("bio", e.target.value)}
                        />
                        <label>Preferowane miejsce pracy</label>
                        <select value={user.expectedTypeWork} onChange={e => updateUser("expectedTypeWork", e.target.value)}>
                            <option value={expectedTypeWork.ONSITE}>Na miejscu</option>
                            <option value={expectedTypeWork.RELOCATION}>Gotowość do przeprowadzki</option>
                            <option value={expectedTypeWork.REMOTELY}>Wyłącznie zdalnie</option>
                            <option value={expectedTypeWork.HEBRID}>Hybrydowo</option>
                            <option value={expectedTypeWork.NOMETTER}>Bez znaczenia</option>
                        </select>
                        <label>Docelowe miasto</label>
                        <input
                            type="text"
                            placeholder={user.targetWorkCity}
                            onChange={e => updateUser("targetWorkCity", e.target.value)}
                        />
                        <label>Oczekiwany typ kontraktu</label>
                        <select value={user.expectedContractType} onChange={e => updateUser("expectedContractType", e.target.value)}>
                            <option value={expectedContractType.UOP}>Tylko UoP</option>
                            <option value={expectedContractType.B2B}>Mozliwe B2B</option>
                            <option value={expectedContractType.UZ}>Możliwe UZ/UoD</option>
                            <option value={expectedContractType.NO}>Brak</option>
                        </select>
                        <label>Oczekiwane wynagrodzenie</label>
                        <input
                            type="text"
                            placeholder={user.expectedSalary}
                            onChange={e => updateUser("expectedSalary", e.target.value)}
                        />
                        <label>Zgoda na odbycie bezpłatnych praktyk/stażu</label>
                        <div onChange={e => updateUser("canTakeApprenticeship", e.target)}>
                            <input type="radio" value={1} name="true" /> Tak
                            <input type="radio" value={0} name="false" /> Nie
                        </div>
                        <label>Ilość miesięcy doświadczenia komercyjnego</label>
                        <input
                            type="number"
                            required={true}
                            min={0}
                            max={240}
                            onChange={e => updateUser("monthsOfCommercialExp", e.target.value)}
                        />
                        <label>Przebieg edukacji</label>
                        <input
                            type="text"
                            placeholder={user.education}
                            onChange={e => updateUser("education", e.target.value)}
                        />
                        <label>Przebieg doswiadczenia zawodowego</label>
                        <input
                            type="text"
                            placeholder={user.workExperience}
                            onChange={e => updateUser("workExperience", e.target.value)}
                        />
                        <label>Kursy i certyfikaty</label>
                        <input
                            type="text"
                            placeholder={user.courses}
                            onChange={e => updateUser("courses", e.target.value)}
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
        </WrapperLoggedView>
    );
}

export default UserView;
