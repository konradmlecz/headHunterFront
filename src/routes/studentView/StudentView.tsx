import React, {FormEvent, useEffect, useState} from 'react'
import WrapperLoggedView from '../../components/wrapperLoggedView/WrapperLoggedView';
import {Global} from '../../context/store';
import {useNavigate} from "react-router-dom";
import {expectedContractType, expectedTypeWork, Student} from "../../types/global-types";
import {ContextManager} from "../../context/ContextManager";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import PhoneInput from 'react-phone-number-input/input'
import {adress} from "../../constant/setting";
import "./StudentView.css";

function UserView() {
    const {dispatchGlobalContext, globalState} = React.useContext(Global);
    const navigate = useNavigate();

    const [user, setUser] = useState<Student>(
        {
            email: '',
            phone: '',
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

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setError(false);
        setSuccess(false);

        const res = await fetch(`${adress}/student/profile`, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(user),
            credentials: 'include',
        })
        const data = await res.json()
        try {
            if (!data.isSuccess) throw new Error();
            setSuccess(true);
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

    const handleStatusEm = async () => {
        await new ContextManager({dispatch: dispatchGlobalContext, state: globalState}).studentSetToEmployed()

        navigate('/login', {replace: true});
        dispatchGlobalContext({
            type: 'CLEAR_USER',
        });
    }

    useEffect(() => {
        (async () => {
            if (globalState.user.role !== "student") navigate("/login", {replace: true});
            const res = await fetch(`${adress}/student/profile`, {
                method: 'GET',
                credentials: 'include',
            })
            const data = await res.json()
            setUser(user => ({
                ...user,
                email: data.email,
                phone: data.phone,
                firstName: data.firstName,
                lastName: data.lastName,
                githubUsername: data.githubUsername,
                portfolioUrls: data.portfolioUrls,
                projectUrls: data.projectUrls,
                bio: data.bio,
                expectedTypeWork: data.expectedTypeWork,
                targetWorkCity: data.targetWorkCity,
                expectedContractType: data.expectedContractType,
                expectedSalary: data.expectedSalary,
                canTakeApprenticeship: data.canTakeApprenticeship,
                monthsOfCommercialExp: data.monthsOfCommercialExp,
                education: data.education,
                workExperience: data.workExperience,
                courses: data.courses,
            }));
        })()
    }, []);

    return (
        <WrapperLoggedView>
            <div className="editProfile">
                <div className="editProfileWrapper">
                    <div className="editProfileTitleWrapper">
                        <span className="editProfileTitle">Edytuj profil</span>
                        <div className="btnWrapper">
                            <button className="btn" onClick={handleClickOpen}>Zatrudniony</button>
                        </div>
                        <Dialog
                            PaperProps={{
                                style: {
                                    backgroundColor: 'var(--input-background-color)',
                                    color: 'var(--main-text-color)'
                                },
                            }}
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                        >
                            <DialogContent>
                                <DialogContentText color="var(--main-text-color)" id="alert-dialog-description">
                                    Czy na pewno oznaczyć jako zatrudniony?
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions color="var(--main-text-color)">
                                <Button style={{color: 'var(--main-text-color)'}}
                                        onClick={handleStatusEm}>Potwierdź</Button>
                                <Button style={{color: 'var(--main-text-color)'}} onClick={handleClose} autoFocus>
                                    Anuluj
                                </Button>
                            </DialogActions>
                        </Dialog>
                    </div>
                    <form action="" className="editProfileForm" onSubmit={handleSubmit}>

                        <label>Email*</label>
                        <input
                            type="email"
                            required={true}
                            value={user.email}
                            minLength={3}
                            maxLength={255}
                            onChange={e => updateUser("email", e.target.value)}
                        />
                        <label>Numer telefonu</label>
                        <PhoneInput
                            country="PL"
                            value={user.phone}
                            onChange={(value) => updateUser("phone", value)}
                        />
                        <label>Imię*</label>
                        <input
                            type="text"
                            required={true}
                            value={user.firstName ?? ""}
                            minLength={3}
                            maxLength={13}
                            onChange={e => updateUser("firstName", e.target.value)}
                        />
                        <label>Nazwisko*</label>
                        <input
                            type="text"
                            required={true}
                            value={user.lastName ?? ""}
                            minLength={2}
                            maxLength={28}
                            onChange={e => updateUser("lastName", e.target.value)}
                        />

                        <label>Login GitHub*</label>
                        <input
                            type="text"
                            required={true}
                            value={user.githubUsername ?? ""}
                            minLength={4}
                            maxLength={39}
                            onChange={e => updateUser("githubUsername", e.target.value)}
                        />
                        <label>Portfolio URL</label>
                        <input
                            type="text"
                            value={user.portfolioUrls ?? ""}
                            minLength={0}
                            maxLength={255}
                            onChange={e => updateUser("portfolioUrls", e.target.value)}
                        />
                        <label>Projekty GitHub* (Linki oddzielone przecinkami)</label>
                        <textarea
                            required={true}
                            value={user.projectUrls ?? ""}
                            minLength={0}
                            maxLength={255}
                            onChange={e => updateUser("projectUrls", e.target.value)}
                        />
                        <label>Biogram zawodowy</label>
                        <input
                            type="text"
                            value={user.bio ?? ""}
                            minLength={0}
                            maxLength={255}
                            onChange={e => updateUser("bio", e.target.value)}
                        />
                        <label>Preferowane miejsce pracy*</label>
                        <select value={user.expectedTypeWork}
                                onChange={e => updateUser("expectedTypeWork", e.target.value)}>
                            <option value={expectedTypeWork.ONSITE}>Na miejscu</option>
                            <option value={expectedTypeWork.RELOCATION}>Gotowość do przeprowadzki</option>
                            <option value={expectedTypeWork.REMOTELY}>Wyłącznie zdalnie</option>
                            <option value={expectedTypeWork.HEBRID}>Hybrydowo</option>
                            <option value={expectedTypeWork.NOMETTER}>Bez znaczenia</option>
                        </select>
                        <label>Docelowe miasto</label>
                        <input
                            type="text"
                            value={user.targetWorkCity ?? ""}
                            minLength={0}
                            maxLength={30}
                            onChange={e => updateUser("targetWorkCity", e.target.value)}
                        />
                        <label>Oczekiwany typ kontraktu*</label>
                        <select value={user.expectedContractType}
                                onChange={e => updateUser("expectedContractType", e.target.value)}>
                            <option value={expectedContractType.UOP}>Tylko UoP</option>
                            <option value={expectedContractType.B2B}>Mozliwe B2B</option>
                            <option value={expectedContractType.UZ}>Możliwe UZ/UoD</option>
                            <option value={expectedContractType.NO}>Brak</option>
                        </select>
                        <label>Oczekiwane wynagrodzenie</label>
                        <input
                            type="text"
                            value={user.expectedSalary ?? ""}
                            minLength={0}
                            maxLength={255}
                            onChange={e => updateUser("expectedSalary", e.target.value)}
                        />
                        <label>Zgoda na odbycie bezpłatnych praktyk/stażu*</label>
                        <select required={true} onChange={e => updateUser("canTakeApprenticeship", Number(e.target.value))}>
                            <option value="" selected disabled hidden>Wybierz</option>
                            <option value="1">Tak</option>
                            <option value="0">Nie</option>
                        </select>
                        <label>Ilość miesięcy doświadczenia komercyjnego*</label>
                        <input
                            type="number"
                            required={true}
                            min={0}
                            max={240}
                            onChange={e => updateUser("monthsOfCommercialExp", e.target.value)}
                        />
                        <label>Przebieg edukacji</label>
                        <textarea
                            value={user.education ?? ""}
                            onChange={e => updateUser("education", e.target.value)}
                        />
                        <label>Przebieg doswiadczenia zawodowego</label>
                        <textarea
                            value={user.workExperience ?? ""}
                            onChange={e => updateUser("workExperience", e.target.value)}
                        />
                        <label>Kursy i certyfikaty</label>
                        <textarea
                            value={user.courses ?? ""}
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
