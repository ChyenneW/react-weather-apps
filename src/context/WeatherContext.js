import { useReducer, createContext } from "react";


const AppReducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_CITY':
            return {
                city: action.payload,
            };

        case 'UPDATE_DATA':
            return {
                data: action.payload,
            };

        default:
            return state;
    };

};

const initialState = {
    city: "New York",
    data: {
        city: "Loading",
        temperature: "Loading",
        tempMax: "Loading",
        tempMin: "Loading",
        wind: "Loading",
        humidity: "Loading",
        description: "Loading",
        icon: "Loading",
        lat: "Loading",
        lon: "Loading",
    },

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