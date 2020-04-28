const initialState = {
    isLoaded: false,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case "COMPANY_SYMBOLS":
            return {
                ...state,
                company_data: action.payload,
                ...state,
                isLoaded: true,
            };

        default:
            return state;
    }
}
