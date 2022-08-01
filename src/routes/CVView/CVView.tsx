import React from "react";
import temp_photo from '../../images/temp_photo.jpg';
import defaultUser from '../../images/default_user_icon_4_by_karmaanddestiny_de7834s.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import WrapperLoggedView from "../../components/wrapperLoggedView/WrapperLoggedView";
import arrow from '../../images/icons/Group 29.png';
import githubIco from '../../images/icons/GitHub-Mark-64px.png';
import { phoneReceiverIconDefinition, envelopeIconDefinition, starIconDefinition, paperClipIconDefinition } from '../../helpers/fontAwsomeIcons';
import {IconDefinition} from "@fortawesome/fontawesome-svg-core";

import './CVView.css';

const tempData = {
    name: 'Anna Kowalska',
    github: 'annakowalska',
    phone: '+48 566 072 227',
    email: 'annakowalska@gmail.com',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consectetur doloremque eos et ex excepturi ipsam laudantium maxime nam perferendis porro',
    courseRate: 5,
    courseActivityRate: 3,
    codeRate: 4,
    scrumRate: 5,
    place: 'biuro',
    city: 'Warszawa',
    contract: 'umowa o pracę',
    salary: 8000,
    agreement: true,
    experience: '6 miesięcy',
    education: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consectetur doloremque eos et ex excepturi ipsam laudantium maxime nam perferendis porro Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consectetur doloremque eos et ex excepturi ipsam laudantium maxime nam perferendis porro Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consectetur doloremque eos et ex excepturi ipsam laudantium maxime nam perferendis porro',
    courses: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consectetur doloremque eos et ex excepturi ipsam laudantium maxime nam perferendis porro, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consectetur doloremque eos et ex excepturi ipsam laudantium maxime nam perferendis porro',
    profExperience: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consectetur doloremque eos et ex excepturi ipsam laudantium maxime nam perferendis porro, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consectetur doloremque eos et ex excepturi ipsam laudantium maxime nam perferendis porro, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consectetur doloremque eos et ex excepturi ipsam laudantium maxime nam perferendis porro, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consectetur doloremque eos et ex excepturi ipsam laudantium maxime nam perferendis porro',
    portfolioLink: 'https://loremipsum/dolor/sit/ament',
    scrumLinks: ['https://loremipsum/scrum/sit/ament/front', 'https://loremipsum/scrum/sit/ament/back'],
    passLinks: ['https://loremipsum/dolor/sit/ament/front', 'https://loremipsum/dolor/sit/ament/back'],
}

// function to color stars relates to rating
const colorStars = (rate: number) => {
    return [...Array(5)].map((icon: IconDefinition, i: number) => {
        if (i < rate) {
            return <FontAwesomeIcon icon={starIconDefinition} key={i} className="red"/>
        } else {
            return <FontAwesomeIcon icon={starIconDefinition} key={i}/>
        }
    })
}

export const CVView = () => {
    return (
        <WrapperLoggedView>
        <div className="cv-wrapper">
            <div className="cv">
                <div className="cv__back">
                   <a href="" className="cv__back__link">
                       <img
                           src={arrow}
                           alt="Arrow sign"
                           className="cv__back__img"
                       />
                       Wróć
                   </a>
                </div>
                <div className="cv__short-bio">
                    <div className="cv__short-bio__img">
                        <img
                            // src={tempData.github ? `https://github.com/${tempData.github}.png ` : defaultUser}
                            src={temp_photo}
                            alt={`Photo of ${tempData.name}`}
                            className="cv__short-bio__img__temp-photo"
                        />
                    </div>
                    <div className="cv__short-bio__info">
                        <p className="cv__short-bio__info__name">{tempData.name}</p>
                        <a href={`https://github.com/${tempData.github}`} className="cv__short-bio__info__git">
                            <img src={githubIco} alt="Arrow sign" className="cv__short-bio__info__git__ico"/>
                            {tempData.github}
                        </a>
                        <p className="cv__short-bio__info__phone">
                            <FontAwesomeIcon icon={phoneReceiverIconDefinition}/> {tempData.phone}
                        </p>
                        <p className="cv__short-bio__info__email">
                            <FontAwesomeIcon icon={envelopeIconDefinition} />
                            <a href={`mailto:{tempData.email}`} className="cv__short-bio__info__email__link">{tempData.email}</a>
                        </p>
                        <p className="cv__short-bio__info__about-me">O mnie</p>
                        <p className="cv__short-bio__info__about-me-text">{tempData.info}</p>
                    </div>
                    <div className="cv__short-bio__controls">
                        <form action="" className="cv__short-bio__controls__form">
                            <input type="submit" className="cv__short-bio__controls__btn" value="Brak zainteresowania"/>
                            <input type="submit" className="cv__short-bio__controls__btn" value="Zatrudniony"/>
                        </form>
                    </div>
                </div>
                <div className="cv__main-bio">
                        <div className="cv__main-bio__title-container">
                            <p className="cv__main-bio__title-container__title">Oceny</p>
                        </div>
                        <div className="cv__main-bio__content">
                            <div className="cv__main-bio__content__stars-container">
                                <div className="cv__main-bio__content__stars-container__title-container">
                                    <p className="cv__main-bio__content__stars-container__title-container-title">Ocena przejścia kursu</p>
                                </div>
                                <div className="cv__main-bio__content__stars-container__stars">
                                    <p className="cv__main-bio__content__stars-container__stars__rating">
                                        <span className="cv__main-bio__content__stars-container__stars__rating__rate">{tempData.courseRate}</span>
                                        /5
                                    </p>
                                    {colorStars(tempData.courseRate)}
                                </div>
                            </div>
                            <div className="cv__main-bio__content__stars-container">
                                <div className="cv__main-bio__content__stars-container__title-container">
                                    <p className="cv__main-bio__content__stars-container__title-container-title">Ocena aktywności i zaangażowania na kursie</p>
                                </div>
                                <div className="cv__main-bio__content__stars-container__stars">
                                    <p className="cv__main-bio__content__stars-container__stars__rating">
                                        <span className="cv__main-bio__content__stars-container__stars__rating__rate">{tempData.courseActivityRate}</span>
                                        /5
                                    </p>
                                    {colorStars(tempData.courseActivityRate)}
                                </div>
                            </div>
                            <div className="cv__main-bio__content__stars-container">
                                <div className="cv__main-bio__content__stars-container__title-container">
                                    <p className="cv__main-bio__content__stars-container__title-container-title">Ocena kodu w projekcie własnym</p>
                                </div>
                                <div className="cv__main-bio__content__stars-container__stars">
                                    <p className="cv__main-bio__content__stars-container__stars__rating">
                                        <span className="cv__main-bio__content__stars-container__stars__rating__rate">{tempData.codeRate}</span>
                                        /5
                                    </p>
                                    {colorStars(tempData.codeRate)}
                                </div>
                            </div>
                            <div className="cv__main-bio__content__stars-container">
                                <div className="cv__main-bio__content__stars-container__title-container">
                                    <p className="cv__main-bio__content__stars-container__title-container-title">Ocena pracy w zespole w Scrum</p>
                                </div>
                                <div className="cv__main-bio__content__stars-container__stars">
                                    <p className="cv__main-bio__content__stars-container__stars__rating">
                                        <span className="cv__main-bio__content__stars-container__stars__rating__rate">{tempData.scrumRate}</span>
                                        /5
                                    </p>
                                    {colorStars(tempData.scrumRate)}
                                </div>
                            </div>
                        </div>
                        <div className="cv__main-bio__title-container">
                            <p className="cv__main-bio__title-container__title">Oczekiwanie w stosunku do zatrudnienia</p>
                        </div>
                        <div className="cv__main-bio__content">
                            <div className="cv__main-bio__content__expectation-container">
                                <div className="cv__main-bio__content__expectation-container__place">
                                    <p className="cv__main-bio__content__expectation-container__place-title">Preferowane miejsce pracy</p>
                                    <p className="cv__main-bio__content__expectation-container__place__content">
                                        {tempData.place}
                                    </p>
                                </div>
                                <div className="cv__main-bio__content__expectation-container__city">
                                    <p className="cv__main-bio__content__expectation-container__city-title">Docelowe miasto gdzie chce pracować kandydat</p>
                                    <p className="cv__main-bio__content__expectation-container__city-title__content">
                                        {tempData.city}
                                    </p>
                                </div>
                                <div className="cv__main-bio__content__expectation-container__contract">
                                    <p className="cv__main-bio__content__expectation-container__contract-title">Oczekiwany typ kontaktu</p>
                                    <p className="cv__main-bio__content__expectation-container__contract__content">
                                        {tempData.contract}
                                    </p>
                                </div>
                                <div className="cv__main-bio__content__expectation-container__salary">
                                    <p className="cv__main-bio__content__expectation-container__salary-title">Oczekiwane wynagrodzenie miesięczne netto</p>
                                    <p className="cv__main-bio__content__expectation-container__salary__content">
                                        {tempData.salary} zł
                                    </p>
                                </div>
                                <div className="cv__main-bio__content__expectation-container__agreement">
                                    <p className="cv__main-bio__content__expectation-container__agreement-title">Zgoda na odbycie bezpłatnych praktyk/stażu na początek</p>
                                    <p className="cv__main-bio__content__expectation-container__agreement__content">
                                        {tempData.agreement ? 'TAK' : 'NIE'}
                                    </p>
                                </div>
                                <div className="cv__main-bio__content__expectation-container__experience">
                                    <p className="cv__main-bio__content__expectation-container__experience-title">Komercyjne doświadczenie w programowaniu</p>
                                    <p className="cv__main-bio__content__expectation-container__experience__content">
                                        {tempData.experience}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="cv__main-bio__title-container">
                            <p className="cv__main-bio__title-container__title">Edukacja</p>
                        </div>
                        <div className="cv__main-bio__content">
                            <p className="cv__main-bio__content__education">{tempData.education}</p>
                        </div>
                        <div className="cv__main-bio__title-container">
                            <p className="cv__main-bio__title-container__title">Kursy</p>
                        </div>
                        <div className="cv__main-bio__content">
                            <p className="cv__main-bio__content__courses">{tempData.courses}</p>
                        </div>
                        <div className="cv__main-bio__title-container">
                            <p className="cv__main-bio__title-container__title">Doświadczenie zawodowe</p>
                        </div>
                        <div className="cv__main-bio__content">
                            <p className="cv__main-bio__content__profExp">{tempData.profExperience}</p>
                        </div>
                        <div className="cv__main-bio__title-container">
                            <p className="cv__main-bio__title-container__title">Portfolio</p>
                        </div>
                        <div className="cv__main-bio__content">
                            <div className="cv__main-bio__content__portfolio">
                                <a href="" className="cv__main-bio__content__portfolio__link">
                                    <span className="cv__main-bio__content__portfolio__icon"><FontAwesomeIcon icon={paperClipIconDefinition}/></span>
                                    {tempData.portfolioLink}
                                </a>
                            </div>
                        </div>
                    <div className="cv__main-bio__segment">
                        <div className="cv__main-bio__title-container">
                            <p className="cv__main-bio__title-container__title">Projekt w zespole Scrumowym</p>
                        </div>
                        <div className="cv__main-bio__content">
                            <div className="cv__main-bio__content__scrum">
                                {tempData.scrumLinks.map((link: string, i: number) => (
                                    <a href="" className="cv__main-bio__content__scrum__link" key={i}>
                                        <span className="cv__main-bio__content__scrum__icon"><FontAwesomeIcon icon={paperClipIconDefinition}/></span>
                                        {link}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="cv__main-bio__segment">
                        <div className="cv__main-bio__title-container">
                            <p className="cv__main-bio__title-container__title">Projekt na zaliczenie</p>
                        </div>
                        <div className="cv__main-bio__content">
                            <div className="cv__main-bio__content__pass">
                                {tempData.passLinks.map((link: string, i: number) => (
                                        <a href="" className="cv__main-bio__content__pass__link" key={i}>
                                        <span className="cv__main-bio__content__pass__icon"><FontAwesomeIcon icon={paperClipIconDefinition}/></span>
                                {link}
                                        </a>
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </WrapperLoggedView>
    )
}