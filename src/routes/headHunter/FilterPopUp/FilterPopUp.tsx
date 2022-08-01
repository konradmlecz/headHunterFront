import React, {useState} from "react";

import './FilterPopUp.css';
import {starIconDefinition} from "../../../helpers/fontAwsomeIcons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

interface Props {
    setIsPopUpVisible: (bool: boolean) => void;
}

interface QueryInterface {
    courseRate: number,
    activityRate: number,
    codeRate: number,
    scrumRate: number,
    remote: boolean,
    office: boolean,
    employmentContract: boolean,
    b2b: boolean,
    mandatoryContract: boolean,
    contract: boolean,
    salaryFrom: number | string,
    salaryTo: number | string,
    apprenticeship: boolean,
    experience: number,
}



export const FilterPopUp = ({setIsPopUpVisible}: Props) => {

    const [form, setForm] = useState<QueryInterface>({
        courseRate: 0,
        activityRate: 0,
        codeRate: 0,
        scrumRate: 0,
        remote: false,
        office: false,
        employmentContract: false,
        b2b: false,
        mandatoryContract: false,
        contract: false,
        salaryFrom: '',
        salaryTo: '',
        apprenticeship: false,
        experience: 0,
    });

    const updateForm = (key: string, value: any) => {

        setForm(form => ({
            ...form,
            [key]: value,
        }));

    };

    const handleCancelButton = () => {
        setIsPopUpVisible(false);
    }

    const handleClearButton = () => {
        setForm({
            courseRate: 0,
            activityRate: 0,
            codeRate: 0,
            scrumRate: 0,
            remote: false,
            office: false,
            employmentContract: false,
            b2b: false,
            mandatoryContract: false,
            contract: false,
            salaryFrom: '',
            salaryTo: '',
            apprenticeship: false,
            experience: 0,
        });
    }

    const handleSubmitForm = async (e: any) => {

        e.preventDefault();

        console.table(form);

    }

    return (
        <>
            <div className="popup-outer-wrapper"></div>
            <div className="popup-inner-wrapper">
                <form action="" className="popup-inner-wrapper__form" onSubmit={handleSubmitForm}>
                    <div className="popup-inner-wrapper__form__top-segment">
                        <p className="popup-inner-wrapper__form__top-segment__title">Filtrowanie</p>
                        <button className="popup-inner-wrapper__form__top-segment__button" type="button" onClick={handleClearButton}>Wyczyść wszystkie</button>
                    </div>
                    <div className="popup-inner-wrapper__form__course-rate-segment">
                        <p className="popup-inner-wrapper__form__course-rate-segment__title">Ocena przejścia kursu</p>
                        <div className="popup-inner-wrapper__form__star-container">
                            <label className="popup-inner-wrapper__form__star" htmlFor="5-course">5
                                <input type="radio" id="5-course" name="courseRate" value="5" checked={form.courseRate === 5} onChange={e => updateForm('courseRate', Number(e.target.value))}/>
                                <span><FontAwesomeIcon icon={starIconDefinition}/></span>
                            </label>
                            <label className="popup-inner-wrapper__form__star" htmlFor="4-course">4
                                <input type="radio" id="4-course" name="courseRate" value="4" checked={form.courseRate === 4} onChange={e => updateForm('courseRate', Number(e.target.value))}/>
                                <span><FontAwesomeIcon icon={starIconDefinition}/></span>
                            </label>
                            <label className="popup-inner-wrapper__form__star" htmlFor="3-course">3
                                <input type="radio" id="3-course" name="courseRate" value="3" checked={form.courseRate === 3} onChange={e => updateForm('courseRate', Number(e.target.value))}/>
                                <span><FontAwesomeIcon icon={starIconDefinition}/></span>
                            </label>
                            <label className="popup-inner-wrapper__form__star" htmlFor="2-course">2
                                <input type="radio" id="2-course" name="courseRate" value="2" checked={form.courseRate === 2} onChange={e => updateForm('courseRate', Number(e.target.value))}/>
                                <span><FontAwesomeIcon icon={starIconDefinition}/></span>
                            </label>
                            <label className="popup-inner-wrapper__form__star" htmlFor="1-course">1
                                <input type="radio" id="1-course" name="courseRate" value="1" checked={form.courseRate === 1} onChange={e => updateForm('courseRate', Number(e.target.value))}/>
                                <span><FontAwesomeIcon icon={starIconDefinition}/></span>
                            </label>
                        </div>
                    </div>
                    <div className="popup-inner-wrapper__form__activity-rate-segment">
                        <p className="popup-inner-wrapper__form__activity-rate-segment__title">Ocena aktywności i zangażowania na kursie</p>
                        <div className="popup-inner-wrapper__form__star-container">
                            <label className="popup-inner-wrapper__form__star" htmlFor="5-activity">5
                                <input type="radio" id="5-activity" name="activityRate" value="5" checked={form.activityRate === 5} onChange={e => updateForm('activityRate', Number(e.target.value))}/>
                                <span><FontAwesomeIcon icon={starIconDefinition}/></span>
                            </label>
                            <label className="popup-inner-wrapper__form__star" htmlFor="4-activity">4
                                <input type="radio" id="4-activity" name="activityRate" value="4" checked={form.activityRate === 4} onChange={e => updateForm('activityRate', Number(e.target.value))}/>
                                <span><FontAwesomeIcon icon={starIconDefinition}/></span>
                            </label>
                            <label className="popup-inner-wrapper__form__star" htmlFor="3-activity">3
                                <input type="radio" id="3-activity" name="activityRate" value="3" checked={form.activityRate === 3} onChange={e => updateForm('activityRate', Number(e.target.value))}/>
                                <span><FontAwesomeIcon icon={starIconDefinition}/></span>
                            </label>
                            <label className="popup-inner-wrapper__form__star" htmlFor="2-activity">2
                                <input type="radio" id="2-activity" name="activityRate" value="2" checked={form.activityRate === 2} onChange={e => updateForm('activityRate', Number(e.target.value))}/>
                                <span><FontAwesomeIcon icon={starIconDefinition}/></span>
                            </label>
                            <label className="popup-inner-wrapper__form__star" htmlFor="1-activity">1
                                <input type="radio" id="1-activity" name="activityRate" value="1" checked={form.activityRate === 1} onChange={e => updateForm('activityRate', Number(e.target.value))}/>
                                <span><FontAwesomeIcon icon={starIconDefinition}/></span>
                            </label>
                        </div>
                    </div>
                    <div className="popup-inner-wrapper__form__code-rate-segment">
                        <p className="popup-inner-wrapper__form__code-rate-segment__title">Ocena kodu w projekcie własnym</p>
                        <div className="popup-inner-wrapper__form__star-container">
                            <label className="popup-inner-wrapper__form__star" htmlFor="5-code">5
                                <input type="radio" id="5-code" name="codeRate" value="5" checked={form.codeRate === 5} onChange={e => updateForm('codeRate', Number(e.target.value))}/>
                                <span><FontAwesomeIcon icon={starIconDefinition}/></span>
                            </label>
                            <label className="popup-inner-wrapper__form__star" htmlFor="4-code">4
                                <input type="radio" id="4-code" name="codeRate" value="4" checked={form.codeRate === 4} onChange={e => updateForm('codeRate', Number(e.target.value))}/>
                                <span><FontAwesomeIcon icon={starIconDefinition}/></span>
                            </label>
                            <label className="popup-inner-wrapper__form__star" htmlFor="3-code">3
                                <input type="radio" id="3-code" name="codeRate" value="3" checked={form.codeRate === 3} onChange={e => updateForm('codeRate', Number(e.target.value))}/>
                                <span><FontAwesomeIcon icon={starIconDefinition}/></span>
                            </label>
                            <label className="popup-inner-wrapper__form__star" htmlFor="2-code">2
                                <input type="radio" id="2-code" name="codeRate" value="2" checked={form.codeRate === 2} onChange={e => updateForm('codeRate', Number(e.target.value))}/>
                                <span><FontAwesomeIcon icon={starIconDefinition}/></span>
                            </label>
                            <label className="popup-inner-wrapper__form__star" htmlFor="1-code">1
                                <input type="radio" id="1-code" name="codeRate" value="1" checked={form.codeRate === 1} onChange={e => updateForm('codeRate', Number(e.target.value))}/>
                                <span><FontAwesomeIcon icon={starIconDefinition}/></span>
                            </label>
                        </div>
                    </div>
                    <div className="popup-inner-wrapper__form__scrum-rate-segment">
                        <p className="popup-inner-wrapper__form__scrum-rate-segment__title">Ocena pracy w zespole w Scrum</p>
                        <div className="popup-inner-wrapper__form__star-container">
                            <label className="popup-inner-wrapper__form__star" htmlFor="5-scrum">5
                                <input type="radio" id="5-scrum" name="scrumRate" value="5" checked={form.scrumRate === 5} onChange={e => updateForm('scrumRate', Number(e.target.value))}/>
                                <span><FontAwesomeIcon icon={starIconDefinition}/></span>
                            </label>
                            <label className="popup-inner-wrapper__form__star" htmlFor="4-scrum">4
                                <input type="radio" id="4-scrum" name="scrumRate" value="4" checked={form.scrumRate === 4} onChange={e => updateForm('scrumRate', Number(e.target.value))}/>
                                <span><FontAwesomeIcon icon={starIconDefinition}/></span>
                            </label>
                            <label className="popup-inner-wrapper__form__star" htmlFor="3-scrum">3
                                <input type="radio" id="3-scrum" name="scrumRate" value="3" checked={form.scrumRate === 3} onChange={e => updateForm('scrumRate', Number(e.target.value))}/>
                                <span><FontAwesomeIcon icon={starIconDefinition}/></span>
                            </label>
                            <label className="popup-inner-wrapper__form__star" htmlFor="2-scrum">2
                                <input type="radio" id="2-scrum" name="scrumRate" value="2" checked={form.scrumRate === 2} onChange={e => updateForm('scrumRate', Number(e.target.value))}/>
                                <span><FontAwesomeIcon icon={starIconDefinition}/></span>
                            </label>
                            <label className="popup-inner-wrapper__form__star" htmlFor="1-scrum">1
                                <input type="radio" id="1-scrum" name="scrumRate" value="1" checked={form.scrumRate === 1} onChange={e => updateForm('scrumRate', Number(e.target.value))}/>
                                <span><FontAwesomeIcon icon={starIconDefinition}/></span>
                            </label>
                        </div>
                    </div>
                    <div className="popup-inner-wrapper__form__place-segment">
                        <p className="popup-inner-wrapper__form__place-segment__title">Preferowane miejsce pracy</p>
                        <input type="checkbox" id="remote" name="jobPlace" value="remote" checked={form.remote} onChange={e => updateForm('remote', e.target.checked)}/>
                        <label htmlFor="remote">Praca zdalna</label>
                        <input type="checkbox" id="office" name="jobPlace" value="office" checked={form.office} onChange={e => updateForm('office', e.target.checked)}/>
                        <label htmlFor="office">Praca w biurze</label>
                    </div>
                    <div className="popup-inner-wrapper__form__contract-segment">
                        <p className="popup-inner-wrapper__form__contract-segment__title">Oczekiwany tryb kontraktu</p>
                        <input type="checkbox" id="employment" name="jobContract" value="Umowa o pracę" checked={form.employmentContract} onChange={e => updateForm('employmentContract', e.target.checked)}/>
                        <label htmlFor="employment">Umowa o pracę</label>
                        <input type="checkbox" id="b2b" name="jobContract" value="B2B" checked={form.b2b} onChange={e => updateForm('b2b', e.target.checked)}/>
                        <label htmlFor="b2b">B2B</label>
                        <input type="checkbox" id="mandate" name="jobContract" value="Umowa zlecenie" checked={form.mandatoryContract} onChange={e => updateForm('mandatoryContract', e.target.checked)}/>
                        <label htmlFor="mandate">Umowa zlecenie</label>
                        <input type="checkbox" id="contract" name="jobContract" value="Umowa o dzieło" checked={form.contract} onChange={e => updateForm('contract', e.target.checked)}/>
                        <label htmlFor="contract">Umowa o dzieło</label>
                    </div>
                    <div className="popup-inner-wrapper__form__salary-segment">
                        <p className="popup-inner-wrapper__form__salary-segment__title">Oczekiwane wynagrodzenie miesięczne</p>
                        <label htmlFor="from">Od</label>
                        <input type="number" id="from" name="jobSalary" value={form.salaryFrom} placeholder="zł" onChange={e => updateForm('salaryFrom', Number(e.target.value))}/>
                        <label htmlFor="to">Do</label>
                        <input type="number" id="to" name="jobSalary" value={form.salaryTo} placeholder="zł" onChange={e => updateForm('salaryTo', Number(e.target.value))}/>
                    </div>
                    <div className="popup-inner-wrapper__form__intern-segment">
                        <p className="popup-inner-wrapper__form__intern-segment__title">Zgoda na odbycie bezpłatnych praktyk/stażu na początek</p>
                        <div className="popup-inner-wrapper__form__intern-segment__radio-inputs">
                            <label htmlFor="intern-yes">
                            <input className="popup-inner-wrapper__form__intern-segment__radio" type="radio" checked={form.apprenticeship} id="intern-yes" name="internship" value='1' onChange={e => updateForm('apprenticeship', Boolean(e.target.value))}/>
                                <span></span>
                            Tak</label>
                            <label htmlFor="intern-no">
                            <input className="popup-inner-wrapper__form__intern-segment__radio" type="radio" checked={!form.apprenticeship} id="intern-no" name="internship" value='' onChange={e => updateForm('apprenticeship', Boolean(e.target.value))}/>
                                <span></span>
                            Nie</label>
                        </div>
                    </div>
                    <div className="popup-inner-wrapper__form__experience-segment">
                        <p className="popup-inner-wrapper__form__experience-segment__title">Ilość miesięcy doświadczenia komercyjnego kandydata w programowaniu</p>
                        <input type="number" name="experience" value={form.experience} onChange={e => updateForm('experience', Number(e.target.value))}/>
                    </div>
                    <div className="popup-inner-wrapper__form__bottom-segment">
                        <button className="popup-inner-wrapper__form__bottom-segment__cancel-button" onClick={handleCancelButton}>Anuluj</button>
                        <input className="popup-inner-wrapper__form__bottom-segment__submit-button" type="submit" value="Pokaż wyniki"/>
                    </div>
                </form>
            </div>
        </>
    );
};