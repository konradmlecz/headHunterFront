import React, { useState } from 'react';

import './FilterPopUp.css';
import { starIconDefinition } from '../../../helpers/fontAwsomeIcons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FilterManager, KeysOfRate, KeysOfEx } from './FilterManager';
interface Props {
    setIsPopUpVisible: (bool: boolean) => void;
}

interface QueryInterface {
    courseCompletion: number[];
    courseEngagment: number[];
    projectDegree: number[];
    teamProjectDegree: number[];
    expectedTypeWork: string[];
    expectedContractType: string[];
    remote: boolean;
    office: boolean;
    employmentContract: boolean;
    b2b: boolean;
    mandatoryContract: boolean;
    contract: boolean;
    salaryFrom: number | string;
    salaryTo: number | string;
    apprenticeship: boolean;
    experience: number;
}

export const FilterPopUp = ({ setIsPopUpVisible }: Props) => {
    const [state, setState] = useState<QueryInterface>({
        courseCompletion: [],
        courseEngagment: [],
        projectDegree: [],
        teamProjectDegree: [],
        expectedTypeWork: [],
        expectedContractType: [],
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
    console.log(state);
    const setRate = (key: KeysOfRate, num: number) => {
        const stateToUbdate = new FilterManager({ state }).setRate(key, num);
        setState(stateToUbdate);
    };

    const setExpected = (key: KeysOfEx, str: string) => {
        const stateToUbdate = new FilterManager({ state }).setExpected(
            key,
            str
        );
        setState(stateToUbdate);
    };

    const updateForm = (key: string, value: any) => {
        // setForm(form => ({
        //     ...form,
        //     [key]: value,
        // }));
    };

    const handleCancelButton = () => {
        setIsPopUpVisible(false);
    };

    // const handleClearButton = () => {
    //     setForm({
    //         courseRate: 0,
    //         activityRate: 0,
    //         codeRate: 0,
    //         scrumRate: 0,
    //         remote: false,
    //         office: false,
    //         employmentContract: false,
    //         b2b: false,
    //         mandatoryContract: false,
    //         contract: false,
    //         salaryFrom: '',
    //         salaryTo: '',
    //         apprenticeship: false,
    //         experience: 0,
    //     });
    // }

    const handleSubmitForm = async (e: any) => {
        e.preventDefault();

        // console.table(form);
    };

    return (
        <>
            <div className="popup-outer-wrapper"></div>
            <div className="popup-inner-wrapper">
                <form
                    action=""
                    className="popup-inner-wrapper__form"
                    onSubmit={handleSubmitForm}
                >
                    <div className="popup-inner-wrapper__form__top-segment">
                        <p className="popup-inner-wrapper__form__top-segment__title">
                            Filtrowanie
                        </p>
                        <button
                            className="popup-inner-wrapper__form__top-segment__button"
                            type="button"
                            // onClick={handleClearButton}
                        >
                            Wyczyść wszystkie
                        </button>
                    </div>
                    <div className="popup-inner-wrapper__form__course-rate-segment">
                        <p className="popup-inner-wrapper__form__course-rate-segment__title">
                            Ocena przejścia kursu
                        </p>
                        <div className="popup-inner-wrapper__form__star-container">
                            <label className="popup-inner-wrapper__form__star">
                                5
                                <input
                                    type="checkbox"
                                    value="5"
                                    checked={new FilterManager({
                                        state,
                                    }).ifIsChecked('courseCompletion', 5)}
                                    onChange={(e) =>
                                        setRate(
                                            'courseCompletion',
                                            Number(e.target.value)
                                        )
                                    }
                                />
                                <span>
                                    <FontAwesomeIcon
                                        icon={starIconDefinition}
                                    />
                                </span>
                            </label>
                            <label className="popup-inner-wrapper__form__star">
                                4
                                <input
                                    type="checkbox"
                                    value="4"
                                    checked={new FilterManager({
                                        state,
                                    }).ifIsChecked('courseCompletion', 4)}
                                    onChange={(e) =>
                                        setRate(
                                            'courseCompletion',
                                            Number(e.target.value)
                                        )
                                    }
                                />
                                <span>
                                    <FontAwesomeIcon
                                        icon={starIconDefinition}
                                    />
                                </span>
                            </label>
                            <label className="popup-inner-wrapper__form__star">
                                3
                                <input
                                    type="checkbox"
                                    value="3"
                                    checked={new FilterManager({
                                        state,
                                    }).ifIsChecked('courseCompletion', 3)}
                                    onChange={(e) =>
                                        setRate(
                                            'courseCompletion',
                                            Number(e.target.value)
                                        )
                                    }
                                />
                                <span>
                                    <FontAwesomeIcon
                                        icon={starIconDefinition}
                                    />
                                </span>
                            </label>
                            <label className="popup-inner-wrapper__form__star">
                                2
                                <input
                                    type="checkbox"
                                    value="2"
                                    checked={new FilterManager({
                                        state,
                                    }).ifIsChecked('courseCompletion', 2)}
                                    onChange={(e) =>
                                        setRate(
                                            'courseCompletion',
                                            Number(e.target.value)
                                        )
                                    }
                                />
                                <span>
                                    <FontAwesomeIcon
                                        icon={starIconDefinition}
                                    />
                                </span>
                            </label>
                            <label className="popup-inner-wrapper__form__star">
                                1
                                <input
                                    type="checkbox"
                                    value="1"
                                    checked={new FilterManager({
                                        state,
                                    }).ifIsChecked('courseCompletion', 1)}
                                    onChange={(e) =>
                                        setRate(
                                            'courseCompletion',
                                            Number(e.target.value)
                                        )
                                    }
                                />
                                <span>
                                    <FontAwesomeIcon
                                        icon={starIconDefinition}
                                    />
                                </span>
                            </label>
                        </div>
                    </div>
                    <div className="popup-inner-wrapper__form__activity-rate-segment">
                        <p className="popup-inner-wrapper__form__activity-rate-segment__title">
                            Ocena aktywności i zangażowania na kursie
                        </p>
                        <div className="popup-inner-wrapper__form__star-container">
                            <label className="popup-inner-wrapper__form__star">
                                5
                                <input
                                    type="checkbox"
                                    value="5"
                                    checked={new FilterManager({
                                        state,
                                    }).ifIsChecked('courseEngagment', 5)}
                                    onChange={(e) =>
                                        setRate(
                                            'courseEngagment',
                                            Number(e.target.value)
                                        )
                                    }
                                />
                                <span>
                                    <FontAwesomeIcon
                                        icon={starIconDefinition}
                                    />
                                </span>
                            </label>
                            <label className="popup-inner-wrapper__form__star">
                                4
                                <input
                                    type="checkbox"
                                    value="4"
                                    checked={new FilterManager({
                                        state,
                                    }).ifIsChecked('courseEngagment', 4)}
                                    onChange={(e) =>
                                        setRate(
                                            'courseEngagment',
                                            Number(e.target.value)
                                        )
                                    }
                                />
                                <span>
                                    <FontAwesomeIcon
                                        icon={starIconDefinition}
                                    />
                                </span>
                            </label>
                            <label className="popup-inner-wrapper__form__star">
                                3
                                <input
                                    type="checkbox"
                                    value="3"
                                    checked={new FilterManager({
                                        state,
                                    }).ifIsChecked('courseEngagment', 3)}
                                    onChange={(e) =>
                                        setRate(
                                            'courseEngagment',
                                            Number(e.target.value)
                                        )
                                    }
                                />
                                <span>
                                    <FontAwesomeIcon
                                        icon={starIconDefinition}
                                    />
                                </span>
                            </label>
                            <label className="popup-inner-wrapper__form__star">
                                2
                                <input
                                    type="checkbox"
                                    value="2"
                                    checked={new FilterManager({
                                        state,
                                    }).ifIsChecked('courseEngagment', 2)}
                                    onChange={(e) =>
                                        setRate(
                                            'courseEngagment',
                                            Number(e.target.value)
                                        )
                                    }
                                />
                                <span>
                                    <FontAwesomeIcon
                                        icon={starIconDefinition}
                                    />
                                </span>
                            </label>
                            <label className="popup-inner-wrapper__form__star">
                                1
                                <input
                                    type="checkbox"
                                    value="1"
                                    checked={new FilterManager({
                                        state,
                                    }).ifIsChecked('courseEngagment', 1)}
                                    onChange={(e) =>
                                        setRate(
                                            'courseEngagment',
                                            Number(e.target.value)
                                        )
                                    }
                                />
                                <span>
                                    <FontAwesomeIcon
                                        icon={starIconDefinition}
                                    />
                                </span>
                            </label>
                        </div>
                    </div>
                    <div className="popup-inner-wrapper__form__code-rate-segment">
                        <p className="popup-inner-wrapper__form__code-rate-segment__title">
                            Ocena kodu w projekcie własnym
                        </p>
                        <div className="popup-inner-wrapper__form__star-container">
                            <label className="popup-inner-wrapper__form__star">
                                5
                                <input
                                    type="checkbox"
                                    value="5"
                                    checked={new FilterManager({
                                        state,
                                    }).ifIsChecked('projectDegree', 5)}
                                    onChange={(e) =>
                                        setRate(
                                            'projectDegree',
                                            Number(e.target.value)
                                        )
                                    }
                                />
                                <span>
                                    <FontAwesomeIcon
                                        icon={starIconDefinition}
                                    />
                                </span>
                            </label>
                            <label className="popup-inner-wrapper__form__star">
                                4
                                <input
                                    type="checkbox"
                                    value="4"
                                    checked={new FilterManager({
                                        state,
                                    }).ifIsChecked('projectDegree', 4)}
                                    onChange={(e) =>
                                        setRate(
                                            'projectDegree',
                                            Number(e.target.value)
                                        )
                                    }
                                />
                                <span>
                                    <FontAwesomeIcon
                                        icon={starIconDefinition}
                                    />
                                </span>
                            </label>
                            <label className="popup-inner-wrapper__form__star">
                                3
                                <input
                                    type="checkbox"
                                    value="3"
                                    checked={new FilterManager({
                                        state,
                                    }).ifIsChecked('projectDegree', 3)}
                                    onChange={(e) =>
                                        setRate(
                                            'projectDegree',
                                            Number(e.target.value)
                                        )
                                    }
                                />
                                <span>
                                    <FontAwesomeIcon
                                        icon={starIconDefinition}
                                    />
                                </span>
                            </label>
                            <label className="popup-inner-wrapper__form__star">
                                2
                                <input
                                    type="checkbox"
                                    value="2"
                                    checked={new FilterManager({
                                        state,
                                    }).ifIsChecked('projectDegree', 2)}
                                    onChange={(e) =>
                                        setRate(
                                            'projectDegree',
                                            Number(e.target.value)
                                        )
                                    }
                                />
                                <span>
                                    <FontAwesomeIcon
                                        icon={starIconDefinition}
                                    />
                                </span>
                            </label>
                            <label className="popup-inner-wrapper__form__star">
                                1
                                <input
                                    type="checkbox"
                                    value="1"
                                    checked={new FilterManager({
                                        state,
                                    }).ifIsChecked('projectDegree', 1)}
                                    onChange={(e) =>
                                        setRate(
                                            'projectDegree',
                                            Number(e.target.value)
                                        )
                                    }
                                />
                                <span>
                                    <FontAwesomeIcon
                                        icon={starIconDefinition}
                                    />
                                </span>
                            </label>
                        </div>
                    </div>
                    <div className="popup-inner-wrapper__form__scrum-rate-segment">
                        <p className="popup-inner-wrapper__form__scrum-rate-segment__title">
                            Ocena pracy w zespole w Scrum
                        </p>
                        <div className="popup-inner-wrapper__form__star-container">
                            <label className="popup-inner-wrapper__form__star">
                                5
                                <input
                                    type="checkbox"
                                    value="5"
                                    checked={new FilterManager({
                                        state,
                                    }).ifIsChecked('teamProjectDegree', 5)}
                                    onChange={(e) =>
                                        setRate(
                                            'teamProjectDegree',
                                            Number(e.target.value)
                                        )
                                    }
                                />
                                <span>
                                    <FontAwesomeIcon
                                        icon={starIconDefinition}
                                    />
                                </span>
                            </label>
                            <label className="popup-inner-wrapper__form__star">
                                4
                                <input
                                    type="checkbox"
                                    value="4"
                                    checked={new FilterManager({
                                        state,
                                    }).ifIsChecked('teamProjectDegree', 4)}
                                    onChange={(e) =>
                                        setRate(
                                            'teamProjectDegree',
                                            Number(e.target.value)
                                        )
                                    }
                                />
                                <span>
                                    <FontAwesomeIcon
                                        icon={starIconDefinition}
                                    />
                                </span>
                            </label>
                            <label className="popup-inner-wrapper__form__star">
                                3
                                <input
                                    type="checkbox"
                                    value="3"
                                    checked={new FilterManager({
                                        state,
                                    }).ifIsChecked('teamProjectDegree', 3)}
                                    onChange={(e) =>
                                        setRate(
                                            'teamProjectDegree',
                                            Number(e.target.value)
                                        )
                                    }
                                />
                                <span>
                                    <FontAwesomeIcon
                                        icon={starIconDefinition}
                                    />
                                </span>
                            </label>
                            <label className="popup-inner-wrapper__form__star">
                                2
                                <input
                                    type="checkbox"
                                    value="2"
                                    checked={new FilterManager({
                                        state,
                                    }).ifIsChecked('teamProjectDegree', 2)}
                                    onChange={(e) =>
                                        setRate(
                                            'teamProjectDegree',
                                            Number(e.target.value)
                                        )
                                    }
                                />
                                <span>
                                    <FontAwesomeIcon
                                        icon={starIconDefinition}
                                    />
                                </span>
                            </label>
                            <label className="popup-inner-wrapper__form__star">
                                1
                                <input
                                    type="checkbox"
                                    value="1"
                                    checked={new FilterManager({
                                        state,
                                    }).ifIsChecked('teamProjectDegree', 1)}
                                    onChange={(e) =>
                                        setRate(
                                            'teamProjectDegree',
                                            Number(e.target.value)
                                        )
                                    }
                                />
                                <span>
                                    <FontAwesomeIcon
                                        icon={starIconDefinition}
                                    />
                                </span>
                            </label>
                        </div>
                    </div>
                    <div className="popup-inner-wrapper__form__place-segment">
                        <p className="popup-inner-wrapper__form__place-segment__title">
                            Preferowane miejsce pracy
                        </p>
                        <input
                            type="checkbox"
                            id="remote"
                            name="jobPlace"
                            value="remote"
                            checked={new FilterManager({
                                state,
                            }).ifIsCheckedEx('expectedTypeWork', 'remote')}
                            onChange={(e) =>
                                setExpected('expectedTypeWork', 'remote')
                            }
                        />
                        <label htmlFor="remote">Praca zdalna</label>
                        <input
                            type="checkbox"
                            id="office"
                            name="jobPlace"
                            value="office"
                            checked={new FilterManager({
                                state,
                            }).ifIsCheckedEx('expectedTypeWork', 'office')}
                            onChange={(e) =>
                                setExpected('expectedTypeWork', 'office')
                            }
                        />
                        <label htmlFor="office">Praca w biurze</label>
                    </div>
                    <div className="popup-inner-wrapper__form__contract-segment">
                        <p className="popup-inner-wrapper__form__contract-segment__title">
                            Oczekiwany tryb kontraktu
                        </p>
                        <input
                            type="checkbox"
                            id="employment"
                            name="jobContract"
                            value="employmentContract"
                            checked={new FilterManager({
                                state,
                            }).ifIsCheckedEx(
                                'expectedContractType',
                                'employmentContract'
                            )}
                            onChange={(e) =>
                                setExpected(
                                    'expectedContractType',
                                    'employmentContract'
                                )
                            }
                        />
                        <label htmlFor="employment">Umowa o pracę</label>
                        <input
                            type="checkbox"
                            id="b2b"
                            name="jobContract"
                            value="b2b"
                            checked={new FilterManager({
                                state,
                            }).ifIsCheckedEx('expectedContractType', 'b2b')}
                            onChange={(e) =>
                                setExpected('expectedContractType', 'b2b')
                            }
                        />
                        <label htmlFor="b2b">B2B</label>
                        <input
                            type="checkbox"
                            id="mandate"
                            name="jobContract"
                            value="mandatoryContract"
                            checked={new FilterManager({
                                state,
                            }).ifIsCheckedEx(
                                'expectedContractType',
                                'mandatoryContract'
                            )}
                            onChange={(e) =>
                                setExpected(
                                    'expectedContractType',
                                    'mandatoryContract'
                                )
                            }
                        />
                        <label htmlFor="mandate">Umowa zlecenie</label>
                        <input
                            type="checkbox"
                            id="contract"
                            name="jobContract"
                            value="contract"
                            checked={new FilterManager({
                                state,
                            }).ifIsCheckedEx(
                                'expectedContractType',
                                'contract'
                            )}
                            onChange={(e) =>
                                setExpected('expectedContractType', 'contract')
                            }
                        />
                        <label htmlFor="contract">Umowa o dzieło</label>
                    </div>
                    <div className="popup-inner-wrapper__form__salary-segment">
                        <p className="popup-inner-wrapper__form__salary-segment__title">
                            Oczekiwane wynagrodzenie miesięczne
                        </p>
                        <label htmlFor="from">Od</label>
                        <input
                            type="number"
                            id="from"
                            name="jobSalary"
                            value={state.salaryFrom}
                            placeholder="zł"
                            onChange={(e) =>
                                updateForm('salaryFrom', Number(e.target.value))
                            }
                        />
                        <label htmlFor="to">Do</label>
                        <input
                            type="number"
                            id="to"
                            name="jobSalary"
                            value={state.salaryTo}
                            placeholder="zł"
                            onChange={(e) =>
                                updateForm('salaryTo', Number(e.target.value))
                            }
                        />
                    </div>
                    <div className="popup-inner-wrapper__form__intern-segment">
                        <p className="popup-inner-wrapper__form__intern-segment__title">
                            Zgoda na odbycie bezpłatnych praktyk/stażu na
                            początek
                        </p>
                        <div className="popup-inner-wrapper__form__intern-segment__radio-inputs">
                            <label htmlFor="intern-yes">
                                <input
                                    className="popup-inner-wrapper__form__intern-segment__radio"
                                    type="radio"
                                    checked={state.apprenticeship}
                                    id="intern-yes"
                                    name="internship"
                                    value="1"
                                    onChange={(e) =>
                                        updateForm(
                                            'apprenticeship',
                                            Boolean(e.target.value)
                                        )
                                    }
                                />
                                <span></span>
                                Tak
                            </label>
                            <label htmlFor="intern-no">
                                <input
                                    className="popup-inner-wrapper__form__intern-segment__radio"
                                    type="radio"
                                    checked={!state.apprenticeship}
                                    id="intern-no"
                                    name="internship"
                                    value=""
                                    onChange={(e) =>
                                        updateForm(
                                            'apprenticeship',
                                            Boolean(e.target.value)
                                        )
                                    }
                                />
                                <span></span>
                                Nie
                            </label>
                        </div>
                    </div>
                    <div className="popup-inner-wrapper__form__experience-segment">
                        <p className="popup-inner-wrapper__form__experience-segment__title">
                            Ilość miesięcy doświadczenia komercyjnego kandydata
                            w programowaniu
                        </p>
                        <input
                            type="number"
                            name="experience"
                            value={state.experience}
                            onChange={(e) =>
                                updateForm('experience', Number(e.target.value))
                            }
                        />
                    </div>
                    <div className="popup-inner-wrapper__form__bottom-segment">
                        <button
                            className="popup-inner-wrapper__form__bottom-segment__cancel-button"
                            onClick={handleCancelButton}
                        >
                            Anuluj
                        </button>
                        <input
                            className="popup-inner-wrapper__form__bottom-segment__submit-button"
                            type="submit"
                            value="Pokaż wyniki"
                        />
                    </div>
                </form>
            </div>
        </>
    );
};
