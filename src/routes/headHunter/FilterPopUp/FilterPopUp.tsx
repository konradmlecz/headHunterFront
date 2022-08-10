import React, { useState } from 'react';
import { ContextManager } from '../../../context/ContextManager';
import './FilterPopUp.css';
import { starIconDefinition } from '../../../helpers/fontAwsomeIcons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Global } from '../../../context/store';
import {
    FilterManager,
    KeysOfRate,
    KeysOfEx,
    KeysOfNormal,
} from './FilterManager';
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
    expectedSalary: string[];
    canTakeApprenticeship: boolean[];
    monthsOfCommercialExp: number[];
}

export const FilterPopUp = ({ setIsPopUpVisible }: Props) => {
    const { dispatchGlobalContext, globalState } = React.useContext(Global);

    const [state, setState] = useState<QueryInterface>({
        courseCompletion: [],
        courseEngagment: [],
        projectDegree: [],
        teamProjectDegree: [],
        expectedTypeWork: [],
        expectedContractType: [],
        expectedSalary: [],
        canTakeApprenticeship: [],
        monthsOfCommercialExp: [],
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

    const setNormal = (key: KeysOfNormal, val: string | boolean | number) => {
        const stateToUbdate = new FilterManager({ state }).setNormal(key, val);
        setState(stateToUbdate);
    };

    const handleCancelButton = () => {
        setIsPopUpVisible(false);
    };

    const handleSubmitForm = async (e: any) => {
        e.preventDefault();
        const data = new FilterManager({ state }).prepareState();
        new ContextManager({
            state: globalState,
            dispatch: dispatchGlobalContext,
        }).setFilter(data);
        console.log(data);
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
                        <label htmlFor="to">Do</label>
                        <input
                            type="number"
                            id="to"
                            name="jobSalary"
                            value={state.expectedSalary[0]}
                            placeholder="zł"
                            onChange={(e) =>
                                setNormal(
                                    'expectedSalary',
                                    Number(e.target.value)
                                )
                            }
                        />
                    </div>
                    <div className="popup-inner-wrapper__form__intern-segment">
                        <p className="popup-inner-wrapper__form__intern-segment__title">
                            Zgoda na odbycie bezpłatnych praktyk/stażu na
                            początek
                        </p>
                        <div className="popup-inner-wrapper__form__intern-segment__radio-inputs">
                            <label>
                                <input
                                    className="popup-inner-wrapper__form__intern-segment__radio"
                                    type="checkbox"
                                    checked={
                                        state.canTakeApprenticeship.length
                                            ? state.canTakeApprenticeship[0]
                                            : false
                                    }
                                    onChange={(e) =>
                                        setNormal(
                                            'canTakeApprenticeship',
                                            !state.canTakeApprenticeship[0]
                                        )
                                    }
                                />
                                <span></span>
                                Tak
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
                            value={state.monthsOfCommercialExp[0]}
                            onChange={(e) =>
                                setNormal(
                                    'monthsOfCommercialExp',
                                    Number(e.target.value)
                                )
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
