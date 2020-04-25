const initialState = {
    search_value: null,
    selected_value: {
        symbol: undefined,
        profile: undefined,
        selected_key_metric: undefined,
    },
};

export default function (state = initialState, action) {
    switch (action.type) {
        case "USER_SEARCH_VALUE":
            return { ...state, search_value: action.payload };

        case "SELECTED_VALUE":
            return {
                ...state,
                selected_value: action.payload,
            };
        case "SELECTED_KEY_METRIC":
            return {
                ...state,
                selected_key_metric: action.payload,
            };

        default:
            return state;
    }
}
