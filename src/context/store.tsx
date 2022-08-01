import React, { useReducer, createContext, Reducer } from 'react';


export type Student = {
    bio: string;
    bonusProjectUrls: string;
    canTakeApprenticeship: boolean;
    company: string;
    courseCompletion: number;
    courseEngagment: number;
    courses: string;
    education: string;
    email: string;
    expectedContractType: string;
    expectedSalary: string;
    expectedTypeWork: string;
    firstName: string;
    fullName: string;
    githubUsername: string;
    id: string;
    lastName: string;
    maxReservedStudents: number;
    monthsOfCommercialExp: number
    phone: number;
    portfolioUrls: string;
    projectDegree: number;
    projectUrls: string;
    targetWorkCity: string;
    teamProjectDegree: number;
    workExperience: string;
}



export type GlobalState = {
    user: {
        role: '' |  'student' | "admin"| 'hr',
        firstName: string,
        lastName: string
    },
    studentsAvailable:Student[],
    studentsInteview:Student[]
};

export const initialState:GlobalState = {
    user: {
        role: '',
        firstName: '',
        lastName: ''
    },
    studentsAvailable:[],
    studentsInteview:[]
};

export enum ActionKind {
    SET_USER = 'SET_USER',
    SET_STUDENTS_AVAILABLE = 'SET_STUDENTS_AVAILABLE',
    SET_STUDENTS_INTERVIEW = 'SET_STUDENTS_INTERVIEW',
    CLEAR_USER = 'CLEAR_USER'
}

export interface Action {
    type: ActionKind;
    payload: GlobalState;
}

export const reducerGlobalState: Reducer<GlobalState, Action> = (state, action) => {
    switch (action.type) {
        case ActionKind.SET_USER:
            return {
                ...state,
                user: action.payload.user
            };
            case ActionKind.CLEAR_USER:
                return {
                    ...state,
                    user: {
                        role: '',
                        firstName: '',
                        lastName: ''
                    },
                };
                case ActionKind.SET_STUDENTS_AVAILABLE:
                    return {
                        ...state,
                        studentsAvailable: action.payload.studentsAvailable
                    };
                    case ActionKind.SET_STUDENTS_INTERVIEW:
                        return {
                            ...state,
                            studentsInteview: action.payload.studentsInteview
                        };
        default:
            return {
                ...state
            };
    }
};

const Global = createContext<{
    globalState: GlobalState;
    dispatchGlobalContext: React.Dispatch<any>;
}>({
    globalState: initialState,
    dispatchGlobalContext: () => null
});

const GlobalProvider: React.FC<any>= ({ children }) => {
    const [globalState, dispatchGlobalContext] = useReducer<Reducer<GlobalState, Action>>(
        reducerGlobalState,
        initialState
    );

    return (
        <Global.Provider value={{ globalState, dispatchGlobalContext }}>
            {children}
        </Global.Provider>
    );
};

export { GlobalProvider, Global };
