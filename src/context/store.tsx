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


const StudentData:Student = {
    bio: '',
    bonusProjectUrls: '',
    canTakeApprenticeship: false,
    company: '',
    courseCompletion: 0,
    courseEngagment: 0,
    courses: '',
    education: '',
    email: '',
    expectedContractType: '',
    expectedSalary: '',
    expectedTypeWork: '',
    firstName: '',
    fullName: '',
    githubUsername: '',
    id: '',
    lastName: '',
    maxReservedStudents: 0,
    monthsOfCommercialExp: 0,
    phone: 0,
    portfolioUrls: '',
    projectDegree: 0,
    projectUrls: '',
    targetWorkCity: '',
    teamProjectDegree: 0,
    workExperience: '',
}


export type GlobalState = {
    user: {
        role: '' |  'student' | "admin"| 'hr',
        firstName: string,
        lastName: string
    },
    studentsAvailable:Student[],
    interviewTotalPages:number,
    interviewActualPage:number,
    availableTotalPages:number,
    availableActualPage:number,

    studentsInteview:Student[],
    choosenStudent: Student 
};

export const initialState:GlobalState = {
    user: {
        role: '',
        firstName: '',
        lastName: ''
    },
    interviewTotalPages:1,
    interviewActualPage:1,
    availableTotalPages:1,
    availableActualPage:1,

    studentsAvailable:[],
    studentsInteview:[],
    choosenStudent: StudentData
};

export enum ActionKind {
    SET_USER = 'SET_USER',
    SET_STUDENTS_AVAILABLE = 'SET_STUDENTS_AVAILABLE',
    SET_STUDENTS_INTERVIEW = 'SET_STUDENTS_INTERVIEW',
    SET_STUDENT_CV= 'SET_STUDENT_CV',
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
                        studentsAvailable: action.payload.studentsAvailable,
                        availableTotalPages: action.payload.availableTotalPages,
                        availableActualPage: action.payload.availableActualPage
                    };
                case ActionKind.SET_STUDENTS_INTERVIEW:
                        return {
                            ...state,
                            studentsInteview: action.payload.studentsInteview,
                            interviewTotalPages: action.payload.interviewTotalPages
                        };
                case ActionKind.SET_STUDENT_CV:
                            return {
                                ...state,
                                choosenStudent: action.payload.choosenStudent
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
