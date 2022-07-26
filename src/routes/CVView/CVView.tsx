import React from "react";

import arrow from '../../images/Group 29.png';

import './CVView.css';

export const CVView = () => {
    return (
        <div className="cv-wrapper">
            <div className="cv">
                <div className="cv__back">
                   <a href="" className="cv__back__link">
                       <img src={arrow} alt="Arrow sign" className="cv__back__img"/>
                       Wróć
                   </a>
                </div>
                <div className="cv__short-bio"></div>
                <div className="cv__main-bio">
                    <div>
                        <div className="cv__main-bio__title-container">
                            <p className="cv__main-bio__title-container__title">Oceny</p>
                        </div>
                        <div className="cv__main-bio__content"></div>
                    </div>
                    <div>
                        <div className="cv__main-bio__title-container">
                            <p className="cv__main-bio__title-container__title">Oczekiwanie w stosunku do zatrudnienia</p>
                        </div>
                        <div className="cv__main-bio__content"></div>
                    </div>
                    <div>
                        <div className="cv__main-bio__title-container">
                            <p className="cv__main-bio__title-container__title">Edukacja</p>
                        </div>
                        <div className="cv__main-bio__content"></div>
                    </div>
                    <div>
                        <div className="cv__main-bio__title-container">
                            <p className="cv__main-bio__title-container__title">Kursy</p>
                        </div>
                        <div className="cv__main-bio__content"></div>
                    </div>
                    <div>
                        <div className="cv__main-bio__title-container">
                            <p className="cv__main-bio__title-container__title">Doświadczenie zawodowe</p>
                        </div>
                        <div className="cv__main-bio__content"></div>
                    </div>
                    <div>
                        <div className="cv__main-bio__title-container">
                            <p className="cv__main-bio__title-container__title">Portfolio</p>
                        </div>
                        <div className="cv__main-bio__content"></div>
                    </div>
                    <div>
                        <div className="cv__main-bio__title-container">
                            <p className="cv__main-bio__title-container__title">Projekt w zespole Scrumowym</p>
                        </div>
                        <div className="cv__main-bio__content"></div>
                    </div>
                    <div>
                        <div className="cv__main-bio__title-container">
                            <p className="cv__main-bio__title-container__title">Projekt na zaliczenie</p>
                        </div>
                        <div className="cv__main-bio__content"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}