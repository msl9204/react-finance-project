const initialState = {
    search_value: null,
    selected_value: { symbol: undefined, profile: undefined },
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

        default:
            return state;
    }
}
