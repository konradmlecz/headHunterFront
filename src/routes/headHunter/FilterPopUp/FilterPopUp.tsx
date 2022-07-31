import React from "react";

import './FilterPopUp.css';
import {starIconDefinition} from "../../../helpers/fontAwsomeIcons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

interface Props {
    setIsPopUpVisible: (bool: boolean) => void;
}

export const FilterPopUp = ({setIsPopUpVisible}: Props) => {

    const handleCancelButton = () => {
        setIsPopUpVisible(false);
    }

    return (
        <>
            <div className="popup-outer-wrapper"></div>
            <div className="popup-inner-wrapper">
                <form action="" className="popup-inner-wrapper__form">
                    <div className="popup-inner-wrapper__form__top-segment">
                        <p className="popup-inner-wrapper__form__top-segment__title">Filtrowanie</p>
                        <button className="popup-inner-wrapper__form__top-segment__button">Wyczyść wszystkie</button>
                    </div>
                    <div className="popup-inner-wrapper__form__course-rate-segment">
                        <p className="popup-inner-wrapper__form__course-rate-segment__title">Ocena przejścia kursu</p>
                        <div className="popup-inner-wrapper__form__star-container">
                            <label className="popup-inner-wrapper__form__star" htmlFor="5-course">5
                                <input type="radio" id="5-course" name="Course rate" value="5"/>
                                <span><FontAwesomeIcon icon={starIconDefinition}/></span>
                            </label>
                            <label className="popup-inner-wrapper__form__star" htmlFor="4-course">4
                                <input type="radio" id="4-course" name="Course rate" value="4"/>
                                <span><FontAwesomeIcon icon={starIconDefinition}/></span>
                            </label>
                            <label className="popup-inner-wrapper__form__star" htmlFor="3-course">3
                                <input type="radio" id="3-course" name="Course rate" value="3"/>
                                <span><FontAwesomeIcon icon={starIconDefinition}/></span>
                            </label>
                            <label className="popup-inner-wrapper__form__star" htmlFor="2-course">2
                                <input type="radio" id="2-course" name="Course rate" value="2"/>
                                <span><FontAwesomeIcon icon={starIconDefinition}/></span>
                            </label>
                            <label className="popup-inner-wrapper__form__star" htmlFor="1-course">1
                                <input type="radio" id="1-course" name="Course rate" value="1"/>
                                <span><FontAwesomeIcon icon={starIconDefinition}/></span>
                            </label>
                        </div>
                    </div>
                    <div className="popup-inner-wrapper__form__activity-rate-segment">
                        <p className="popup-inner-wrapper__form__activity-rate-segment__title">Ocena aktywności i zangażowania na kursie</p>
                        <div className="popup-inner-wrapper__form__star-container">
                            <label className="popup-inner-wrapper__form__star" htmlFor="5-activity">5
                                <input type="radio" id="5-activity" name="Activity rate" value="5"/>
                                <span><FontAwesomeIcon icon={starIconDefinition}/></span>
                            </label>
                            <label className="popup-inner-wrapper__form__star" htmlFor="4-activity">4
                                <input type="radio" id="4-activity" name="Activity rate" value="4"/>
                                <span><FontAwesomeIcon icon={starIconDefinition}/></span>
                            </label>
                            <label className="popup-inner-wrapper__form__star" htmlFor="3-activity">3
                                <input type="radio" id="3-activity" name="Activity rate" value="3"/>
                                <span><FontAwesomeIcon icon={starIconDefinition}/></span>
                            </label>
                            <label className="popup-inner-wrapper__form__star" htmlFor="2-activity">2
                                <input type="radio" id="2-activity" name="Activity rate" value="2"/>
                                <span><FontAwesomeIcon icon={starIconDefinition}/></span>
                            </label>
                            <label className="popup-inner-wrapper__form__star" htmlFor="1-activity">1
                                <input type="radio" id="1-activity" name="Activity rate" value="1"/>
                                <span><FontAwesomeIcon icon={starIconDefinition}/></span>
                            </label>
                        </div>
                    </div>
                    <div className="popup-inner-wrapper__form__code-rate-segment">
                        <p className="popup-inner-wrapper__form__code-rate-segment__title">Ocena kodu w projekcie własnym</p>
                        <div className="popup-inner-wrapper__form__star-container">
                            <label className="popup-inner-wrapper__form__star" htmlFor="5-code">5
                                <input type="radio" id="5-code" name="Code rate" value="5"/>
                                <span><FontAwesomeIcon icon={starIconDefinition}/></span>
                            </label>
                            <label className="popup-inner-wrapper__form__star" htmlFor="4-code">4
                                <input type="radio" id="4-code" name="Code rate" value="4"/>
                                <span><FontAwesomeIcon icon={starIconDefinition}/></span>
                            </label>
                            <label className="popup-inner-wrapper__form__star" htmlFor="3-code">3
                                <input type="radio" id="3-code" name="Code rate" value="3"/>
                                <span><FontAwesomeIcon icon={starIconDefinition}/></span>
                            </label>
                            <label className="popup-inner-wrapper__form__star" htmlFor="2-code">2
                                <input type="radio" id="2-code" name="Code rate" value="2"/>
                                <span><FontAwesomeIcon icon={starIconDefinition}/></span>
                            </label>
                            <label className="popup-inner-wrapper__form__star" htmlFor="1-code">1
                                <input type="radio" id="1-code" name="Code rate" value="1"/>
                                <span><FontAwesomeIcon icon={starIconDefinition}/></span>
                            </label>
                        </div>
                    </div>
                    <div className="popup-inner-wrapper__form__scrum-rate-segment">
                        <p className="popup-inner-wrapper__form__scrum-rate-segment__title">Ocena pracy w zespole w Scrum</p>
                        <div className="popup-inner-wrapper__form__star-container">
                            <label className="popup-inner-wrapper__form__star" htmlFor="5-scrum">5
                                <input type="radio" id="5-scrum" name="Scrum rate" value="5"/>
                                <span><FontAwesomeIcon icon={starIconDefinition}/></span>
                            </label>
                            <label className="popup-inner-wrapper__form__star" htmlFor="4-scrum">4
                                <input type="radio" id="4-scrum" name="Scrum rate" value="4"/>
                                <span><FontAwesomeIcon icon={starIconDefinition}/></span>
                            </label>
                            <label className="popup-inner-wrapper__form__star" htmlFor="3-scrum">3
                                <input type="radio" id="3-scrum" name="Scrum rate" value="3"/>
                                <span><FontAwesomeIcon icon={starIconDefinition}/></span>
                            </label>
                            <label className="popup-inner-wrapper__form__star" htmlFor="2-scrum">2
                                <input type="radio" id="2-scrum" name="Scrum rate" value="2"/>
                                <span><FontAwesomeIcon icon={starIconDefinition}/></span>
                            </label>
                            <label className="popup-inner-wrapper__form__star" htmlFor="1-scrum">1
                                <input type="radio" id="1-scrum" name="Scrum rate" value="1"/>
                                <span><FontAwesomeIcon icon={starIconDefinition}/></span>
                            </label>
                        </div>
                    </div>
                    <div className="popup-inner-wrapper__form__place-segment">
                        <p className="popup-inner-wrapper__form__place-segment__title">Preferowane miejsce pracy</p>
                        <input type="checkbox" id="remote" name="job-place" value="Praca zdalna"/>
                        <label htmlFor="remote">Praca zdalna</label>
                        <input type="checkbox" id="office" name="job-place" value="Praca w biurze"/>
                        <label htmlFor="office">Praca w biurze</label>
                    </div>
                    <div className="popup-inner-wrapper__form__contract-segment">
                        <p className="popup-inner-wrapper__form__contract-segment__title">Oczekiwany tryb kontraktu</p>
                        <input type="checkbox" id="employment" name="job-contract" value="Umowa o pracę"/>
                        <label htmlFor="employment">Umowa o pracę</label>
                        <input type="checkbox" id="b2b" name="job-contract" value="B2B"/>
                        <label htmlFor="b2b">B2B</label>
                        <input type="checkbox" id="mandate" name="job-contract" value="Umowa zlecenie"/>
                        <label htmlFor="mandate">Umowa zlecenie</label>
                        <input type="checkbox" id="contract" name="job-contract" value="Umowa o dzieło"/>
                        <label htmlFor="contract">Umowa o dzieło</label>
                    </div>
                    <div className="popup-inner-wrapper__form__salary-segment">
                        <p className="popup-inner-wrapper__form__salary-segment__title">Oczekiwane wynagrodzenie miesięczne</p>
                        <label htmlFor="from">Od</label>
                        <input type="number" id="from" name="job-salary" placeholder="zł"/>
                        <label htmlFor="to">Do</label>
                        <input type="number" id="to" name="job-salary" placeholder="zł"/>
                    </div>
                    <div className="popup-inner-wrapper__form__intern-segment">
                        <p className="popup-inner-wrapper__form__intern-segment__title">Zgoda na odbycie bezpłatnych praktyk/stażu na początek</p>
                        <div className="popup-inner-wrapper__form__intern-segment__radio-inputs">
                            <label htmlFor="intern-yes">
                            <input className="popup-inner-wrapper__form__intern-segment__radio" type="radio" id="intern-yes" name="internship" value="yes"/>
                            Tak</label>
                            <label htmlFor="intern-no">
                            <input className="popup-inner-wrapper__form__intern-segment__radio" type="radio" id="intern-no" name="internship" value="no"/>
                            Nie</label>
                        </div>
                    </div>
                    <div className="popup-inner-wrapper__form__experience-segment">
                        <p className="popup-inner-wrapper__form__experience-segment__title">Ilość miesięcy doświadczenia komercyjnego kandydata w programowaniu</p>
                        <input type="number"/>
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