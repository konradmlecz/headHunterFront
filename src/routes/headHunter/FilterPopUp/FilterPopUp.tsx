import React from "react";

import './FilterPopUp.css';

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
                    <div>
                        <p>Filtrowanie</p>
                        <button>Wyczyść wszystkie</button>
                    </div>
                    <div>
                        <p>Ocena przejścia kursu</p>
                        <label htmlFor="5-course">5</label>
                        <input type="radio" id="5-course" name="Course rate" value="5"/>
                        <label htmlFor="4-course">4</label>
                        <input type="radio" id="4-course" name="Course rate" value="4"/>
                        <label htmlFor="3-course">3</label>
                        <input type="radio" id="3-course" name="Course rate" value="3"/>
                        <label htmlFor="2-course">2</label>
                        <input type="radio" id="2-course" name="Course rate" value="2"/>
                        <label htmlFor="1-course">1</label>
                        <input type="radio" id="1-course" name="Course rate" value="1"/>
                    </div>
                    <div>
                        <p>Ocena aktywności i zangażowania na kursie</p>
                        <label htmlFor="5-activity">5</label>
                        <input type="radio" id="5-activity" name="Activity rate" value="5"/>
                        <label htmlFor="4-activity">4</label>
                        <input type="radio" id="4-activity" name="Activity rate" value="4"/>
                        <label htmlFor="3-activity">3</label>
                        <input type="radio" id="3-activity" name="Activity rate" value="3"/>
                        <label htmlFor="2-activity">2</label>
                        <input type="radio" id="2-activity" name="Activity rate" value="2"/>
                        <label htmlFor="1-activity">1</label>
                        <input type="radio" id="1-activity" name="Activity rate" value="1"/>
                    </div>
                    <div>
                        <p>Ocena kodu w projekcie własnym</p>
                        <label htmlFor="5-code">5</label>
                        <input type="radio" id="5-code" name="Code rate" value="5"/>
                        <label htmlFor="4-code">4</label>
                        <input type="radio" id="4-code" name="Code rate" value="4"/>
                        <label htmlFor="3-code">3</label>
                        <input type="radio" id="3-code" name="Code rate" value="3"/>
                        <label htmlFor="2-code">2</label>
                        <input type="radio" id="2-code" name="Code rate" value="2"/>
                        <label htmlFor="1-code">1</label>
                        <input type="radio" id="1-code" name="Code rate" value="1"/>
                    </div>
                    <div>
                        <p>Ocena pracy w zespole w Scrum</p>
                        <label htmlFor="5-scrum">5</label>
                        <input type="radio" id="5-scrum" name="Scrum rate" value="5"/>
                        <label htmlFor="4-scrum">4</label>
                        <input type="radio" id="4-scrum" name="Scrum rate" value="4"/>
                        <label htmlFor="3-scrum">3</label>
                        <input type="radio" id="3-scrum" name="Scrum rate" value="3"/>
                        <label htmlFor="2-scrum">2</label>
                        <input type="radio" id="2-scrum" name="Scrum rate" value="2"/>
                        <label htmlFor="1-scrum">1</label>
                        <input type="radio" id="1-scrum" name="Scrum rate" value="1"/>
                    </div>
                    <div>
                        <p>Preferowane miejsce pracy</p>
                        <label htmlFor="remote">Praca zdalna</label>
                        <input type="checkbox" id="remote" name="job-place" value="Praca zdalna"/>
                        <label htmlFor="office">Praca w biurze</label>
                        <input type="checkbox" id="office" name="job-place" value="Praca w biurze"/>
                    </div>
                    <div>
                        <p>Oczekiwany tryb kontraktu</p>
                        <label htmlFor="employment">Umowa o pracę</label>
                        <input type="checkbox" id="employment" name="job-contract" value="Umowa o pracę"/>
                        <label htmlFor="b2b">B2B</label>
                        <input type="checkbox" id="b2b" name="job-contract" value="B2B"/>
                        <label htmlFor="mandate">Umowa zlecenie</label>
                        <input type="checkbox" id="mandate" name="job-contract" value="Umowa zlecenie"/>
                        <label htmlFor="contract">Umowa o dzieło</label>
                        <input type="checkbox" id="contract" name="job-contract" value="Umowa o dzieło"/>
                    </div>
                    <div>
                        <p>Oczekiwane wynagrodzenie miesięczne</p>
                        <label htmlFor="from">Od</label>
                        <input type="number" id="from" name="job-salary"/>
                        <label htmlFor="to">Do</label>
                        <input type="number" id="to" name="job-salary"/>
                    </div>
                    <div>
                        <p>Zgoda na odbycie bezpłatnych praktyk/stażu na początek</p>
                        <label htmlFor="intern-yes">Tak</label>
                        <input type="radio" id="intern-yes" name="internship" value="yes"/>
                        <label htmlFor="intern-no">Nie</label>
                        <input type="radio" id="intern-no" name="internship" value="no"/>
                    </div>
                    <div>
                        <p>Ilość miesięcy doświadczenia komercyjnego kandydata w programowaniu</p>
                        <input type="number"/>
                    </div>
                    <div>
                        <button className="popup-inner-wrapper__form__cancel-button" onClick={handleCancelButton}>Anuluj</button>
                        <input type="submit" value="Pokaż wyniki"/>
                    </div>
                </form>
            </div>
        </>
    );
};