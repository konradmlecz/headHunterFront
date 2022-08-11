import React, { useEffect, useState } from 'react';
import temp_photo from '../../images/temp_photo.jpg';
import defaultUser from '../../images/default_user_icon_4_by_karmaanddestiny_de7834s.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import WrapperLoggedView from '../../components/wrapperLoggedView/WrapperLoggedView';
import arrow from '../../images/icons/Group 29.png';
import githubIco from '../../images/icons/GitHub-Mark-64px.png';
import {
    phoneReceiverIconDefinition,
    envelopeIconDefinition,
    starIconDefinition,
    paperClipIconDefinition,
} from '../../helpers/fontAwsomeIcons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { Global } from '../../context/store';
import { ContextManager } from '../../context/ContextManager';
import { useNavigate, useLocation, Navigate, Link } from 'react-router-dom';
import { AuthRouter } from '../../utils/AuthRouter';
import './CVView.css';
import { Typography } from '@mui/material';

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
    education:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consectetur doloremque eos et ex excepturi ipsam laudantium maxime nam perferendis porro Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consectetur doloremque eos et ex excepturi ipsam laudantium maxime nam perferendis porro Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consectetur doloremque eos et ex excepturi ipsam laudantium maxime nam perferendis porro',
    courses:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consectetur doloremque eos et ex excepturi ipsam laudantium maxime nam perferendis porro, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consectetur doloremque eos et ex excepturi ipsam laudantium maxime nam perferendis porro',
    profExperience:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consectetur doloremque eos et ex excepturi ipsam laudantium maxime nam perferendis porro, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consectetur doloremque eos et ex excepturi ipsam laudantium maxime nam perferendis porro, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consectetur doloremque eos et ex excepturi ipsam laudantium maxime nam perferendis porro, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consectetur doloremque eos et ex excepturi ipsam laudantium maxime nam perferendis porro',
    portfolioLink: 'https://loremipsum/dolor/sit/ament',
    scrumLinks: [
        'https://loremipsum/scrum/sit/ament/front',
        'https://loremipsum/scrum/sit/ament/back',
    ],
    passLinks: [
        'https://loremipsum/dolor/sit/ament/front',
        'https://loremipsum/dolor/sit/ament/back',
    ],
};

// function to color stars relates to rating
const colorStars = (rate: number) => {
    return [...Array(5)].map((icon: IconDefinition, i: number) => {
        if (i < rate) {
            return (
                <FontAwesomeIcon
                    icon={starIconDefinition}
                    key={i}
                    className="red"
                />
            );
        } else {
            return <FontAwesomeIcon icon={starIconDefinition} key={i} />;
        }
    });
};

export const CVView = () => {
    const { dispatchGlobalContext, globalState } = React.useContext(Global);
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        new AuthRouter({
            navigate: navigate,
            location: location,
            state: globalState,
        }).check();
    }, []);

    const student = new ContextManager({
        dispatch: dispatchGlobalContext,
        state: globalState,
    }).getStudent();

    const back = () => {
        navigate('/hr/interview');
    };

    const handleStatusAv = async () => {
        await new ContextManager({
            dispatch: dispatchGlobalContext,
            state: globalState,
        }).setStatusOfStudentToAvailable(globalState.choosenStudent.id);
        back();
    };

    const handleStatusEm = async () => {
        await new ContextManager({
            dispatch: dispatchGlobalContext,
            state: globalState,
        }).setStatusOfStudentToEmployed(globalState.choosenStudent.id);
        back();
    };

    return (
        <WrapperLoggedView>
            <div className="cv-wrapper">
                <div className="cv">
                    <div
                        className="cv__back"
                        onClick={back}
                        style={{
                            cursor: 'pointer',
                        }}
                    >
                        <img
                            src={arrow}
                            alt="Arrow sign"
                            className="cv__back__img"
                        />
                        Wróć
                    </div>
                    <div className="cv__short-bio">
                        <div className="cv__short-bio__img">
                            <img
                                src={
                                    student.bonusProjectUrls?.split('/')[3]
                                        ? `https://github.com/${
                                              student?.bonusProjectUrls.split(
                                                  '/'
                                              )[3]
                                          }.png `
                                        : defaultUser
                                }
                                className="cv__short-bio__img__temp-photo"
                            />
                        </div>
                        <div className="cv__short-bio__info">
                            <p className="cv__short-bio__info__name">
                                {student?.firstName + ' ' + student?.lastName}
                            </p>
                            <a
                                href={`https://github.com/${student?.githubUsername}`}
                                className="cv__short-bio__info__git"
                            >
                                <img
                                    src={githubIco}
                                    alt="Arrow sign"
                                    className="cv__short-bio__info__git__ico"
                                />
                                {student?.githubUsername}
                            </a>
                            <p className="cv__short-bio__info__phone">
                                <FontAwesomeIcon
                                    icon={phoneReceiverIconDefinition}
                                />{' '}
                                {student.phone}
                            </p>
                            <p className="cv__short-bio__info__email">
                                <FontAwesomeIcon
                                    icon={envelopeIconDefinition}
                                />
                                <a
                                    href={`mailto:{tempData.email}`}
                                    className="cv__short-bio__info__email__link"
                                >
                                    {student.email}
                                </a>
                            </p>
                            <p className="cv__short-bio__info__about-me">
                                O mnie
                            </p>
                            <p className="cv__short-bio__info__about-me-text">
                                {student.bio}
                            </p>
                        </div>
                        <div className="cv__short-bio__controls">
                            <form
                                action=""
                                className="cv__short-bio__controls__form"
                            >
                                <input
                                    className="cv__short-bio__controls__btn"
                                    value="Brak zainteresowania"
                                    onClick={handleStatusAv}
                                />
                                <input
                                    className="cv__short-bio__controls__btn"
                                    value="Zatrudniony"
                                    onClick={handleStatusEm}
                                />
                            </form>
                        </div>
                    </div>
                    <div className="cv__main-bio">
                        <div className="cv__main-bio__title-container">
                            <p className="cv__main-bio__title-container__title">
                                Oceny
                            </p>
                        </div>
                        <div className="cv__main-bio__content">
                            <div className="cv__main-bio__content__stars-container">
                                <div className="cv__main-bio__content__stars-container__title-container">
                                    <p className="cv__main-bio__content__stars-container__title-container-title">
                                        Ocena przejścia kursu
                                    </p>
                                </div>
                                <div className="cv__main-bio__content__stars-container__stars">
                                    <p className="cv__main-bio__content__stars-container__stars__rating">
                                        <span className="cv__main-bio__content__stars-container__stars__rating__rate">
                                            {student.courseCompletion}
                                        </span>
                                        /5
                                    </p>
                                    {colorStars(student.courseCompletion)}
                                </div>
                            </div>
                            <div className="cv__main-bio__content__stars-container">
                                <div className="cv__main-bio__content__stars-container__title-container">
                                    <p className="cv__main-bio__content__stars-container__title-container-title">
                                        Ocena aktywności i zaangażowania na
                                        kursie
                                    </p>
                                </div>
                                <div className="cv__main-bio__content__stars-container__stars">
                                    <p className="cv__main-bio__content__stars-container__stars__rating">
                                        <span className="cv__main-bio__content__stars-container__stars__rating__rate">
                                            {student.courseEngagment}
                                        </span>
                                        /5
                                    </p>
                                    {colorStars(student.courseEngagment)}
                                </div>
                            </div>
                            <div className="cv__main-bio__content__stars-container">
                                <div className="cv__main-bio__content__stars-container__title-container">
                                    <p className="cv__main-bio__content__stars-container__title-container-title">
                                        Ocena kodu w projekcie własnym
                                    </p>
                                </div>
                                <div className="cv__main-bio__content__stars-container__stars">
                                    <p className="cv__main-bio__content__stars-container__stars__rating">
                                        <span className="cv__main-bio__content__stars-container__stars__rating__rate">
                                            {student.projectDegree}
                                        </span>
                                        /5
                                    </p>
                                    {colorStars(student.projectDegree)}
                                </div>
                            </div>
                            <div className="cv__main-bio__content__stars-container">
                                <div className="cv__main-bio__content__stars-container__title-container">
                                    <p className="cv__main-bio__content__stars-container__title-container-title">
                                        Ocena pracy w zespole w Scrum
                                    </p>
                                </div>
                                <div className="cv__main-bio__content__stars-container__stars">
                                    <p className="cv__main-bio__content__stars-container__stars__rating">
                                        <span className="cv__main-bio__content__stars-container__stars__rating__rate">
                                            {student.teamProjectDegree}
                                        </span>
                                        /5
                                    </p>
                                    {colorStars(student.teamProjectDegree)}
                                </div>
                            </div>
                        </div>
                        <div className="cv__main-bio__title-container">
                            <p className="cv__main-bio__title-container__title">
                                Oczekiwanie w stosunku do zatrudnienia
                            </p>
                        </div>
                        <div className="cv__main-bio__content">
                            <div className="cv__main-bio__content__expectation-container">
                                <div className="cv__main-bio__content__expectation-container__place">
                                    <p className="cv__main-bio__content__expectation-container__place-title">
                                        Preferowane miejsce pracy
                                    </p>
                                    <p className="cv__main-bio__content__expectation-container__place__content">
                                        {student.expectedTypeWork}
                                    </p>
                                </div>
                                <div className="cv__main-bio__content__expectation-container__city">
                                    <p className="cv__main-bio__content__expectation-container__city-title">
                                        Docelowe miasto gdzie chce pracować
                                        kandydat
                                    </p>
                                    <p className="cv__main-bio__content__expectation-container__city-title__content">
                                        {student.targetWorkCity}
                                    </p>
                                </div>
                                <div className="cv__main-bio__content__expectation-container__contract">
                                    <p className="cv__main-bio__content__expectation-container__contract-title">
                                        Oczekiwany typ kontaktu
                                    </p>
                                    <p className="cv__main-bio__content__expectation-container__contract__content">
                                        {student.expectedContractType}
                                    </p>
                                </div>
                                <div className="cv__main-bio__content__expectation-container__salary">
                                    <p className="cv__main-bio__content__expectation-container__salary-title">
                                        Oczekiwane wynagrodzenie miesięczne
                                        netto
                                    </p>
                                    <p className="cv__main-bio__content__expectation-container__salary__content">
                                        {student.expectedSalary} zł
                                    </p>
                                </div>
                                <div className="cv__main-bio__content__expectation-container__agreement">
                                    <p className="cv__main-bio__content__expectation-container__agreement-title">
                                        Zgoda na odbycie bezpłatnych
                                        praktyk/stażu na początek
                                    </p>
                                    <p className="cv__main-bio__content__expectation-container__agreement__content">
                                        {student.canTakeApprenticeship
                                            ? 'TAK'
                                            : 'NIE'}
                                    </p>
                                </div>
                                <div className="cv__main-bio__content__expectation-container__experience">
                                    <p className="cv__main-bio__content__expectation-container__experience-title">
                                        Komercyjne miesiące doświadczenia w
                                        programowaniu
                                    </p>
                                    <p className="cv__main-bio__content__expectation-container__experience__content">
                                        {student.monthsOfCommercialExp}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="cv__main-bio__title-container">
                            <p className="cv__main-bio__title-container__title">
                                Edukacja
                            </p>
                        </div>
                        <div className="cv__main-bio__content">
                            <p className="cv__main-bio__content__education">
                                {student.education}
                            </p>
                        </div>
                        <div className="cv__main-bio__title-container">
                            <p className="cv__main-bio__title-container__title">
                                Kursy
                            </p>
                        </div>
                        <div className="cv__main-bio__content">
                            <p className="cv__main-bio__content__courses">
                                {student.courses}
                            </p>
                        </div>
                        <div className="cv__main-bio__title-container">
                            <p className="cv__main-bio__title-container__title">
                                Doświadczenie zawodowe
                            </p>
                        </div>
                        <div className="cv__main-bio__content">
                            <p className="cv__main-bio__content__profExp">
                                {student.workExperience}
                            </p>
                        </div>
                        <div className="cv__main-bio__title-container">
                            <p className="cv__main-bio__title-container__title">
                                Portfolio
                            </p>
                        </div>
                        <div className="cv__main-bio__content">
                            <div className="cv__main-bio__content__portfolio">
                                <a
                                    href=""
                                    className="cv__main-bio__content__portfolio__link"
                                >
                                    <span className="cv__main-bio__content__portfolio__icon">
                                        <FontAwesomeIcon
                                            icon={paperClipIconDefinition}
                                        />
                                    </span>
                                    {student.portfolioUrls}
                                </a>
                            </div>
                        </div>
                        <div className="cv__main-bio__segment">
                            <div className="cv__main-bio__title-container">
                                <p className="cv__main-bio__title-container__title">
                                    Projekt w zespole Scrumowym
                                </p>
                            </div>
                            <div className="cv__main-bio__content">
                                <div className="cv__main-bio__content__scrum">
                                    {tempData.scrumLinks.map(
                                        (link: string, i: number) => (
                                            <a
                                                href=""
                                                className="cv__main-bio__content__scrum__link"
                                                key={i}
                                            >
                                                <span className="cv__main-bio__content__scrum__icon">
                                                    <FontAwesomeIcon
                                                        icon={
                                                            paperClipIconDefinition
                                                        }
                                                    />
                                                </span>
                                                {link}
                                            </a>
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="cv__main-bio__segment">
                            <div className="cv__main-bio__title-container">
                                <p className="cv__main-bio__title-container__title">
                                    Projekt na zaliczenie
                                </p>
                            </div>
                            <div className="cv__main-bio__content">
                                <div className="cv__main-bio__content__pass">
                                    {tempData.passLinks.map(
                                        (link: string, i: number) => (
                                            <a
                                                href=""
                                                className="cv__main-bio__content__pass__link"
                                                key={i}
                                            >
                                                <span className="cv__main-bio__content__pass__icon">
                                                    <FontAwesomeIcon
                                                        icon={
                                                            paperClipIconDefinition
                                                        }
                                                    />
                                                </span>
                                                {link}
                                            </a>
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </WrapperLoggedView>
    );
};
