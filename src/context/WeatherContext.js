import { useReducer, createContext } from "react";


const AppReducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_CITY':
            return {
                ...state,
                city: action.payload,
            };

        case 'UPDATE_DATA':
            return {
                ...state,
                data: action.payload,
            };

        default:
            return state;
    };

};

const initialState = {
    city: 'New York',
    data: {},

};

export const AppContext = createContext();

export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (
        <AppContext.Provider value={{ city: state.city, data: state.data, dispatch }}>
            {props.children}
        </AppContext.Provider>
    );
};