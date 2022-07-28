import React, { useReducer, createContext, Reducer } from 'react';

export type GlobalState = {
    user: {
        role: '' |  'student' | "admin"| 'hr',
        name: string,
        surname: string
    }
};

export const initialState:GlobalState = {
    user: {
        role: '',
        name: '',
        surname: ''
    }
};

export enum ActionKind {
    SET_USER = 'SET_USER',
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
                    user:  {
                        role: '',
                        name: '',
                        surname: ''
                    }
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
