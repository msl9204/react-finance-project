const initialState = {
    search_value: null,
    isChange: false,
    selected_value: {
        symbol: null,
        profile: null,
        selected_key_metric: { matrics: [] },
        selected_rating: null,
        selected_rel_info: null,
    },
};

export default function (state = initialState, action) {
    switch (action.type) {
        case "ISCHANGE_TOFALSE":
            return { ...state, isChange: false };

        case "USER_SEARCH_VALUE":
            return { ...state, search_value: action.payload, isChange: true };

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

        case "SELECTED_RATING":
            return {
                ...state,
                selected_rating: action.payload,
            };

        case "SELECTED_REL_SYMBOL":
            return {
                ...state,
                selected_rel_symbol: action.payload,
            };
        case "SELECTED_REL_INFO":
            return {
                ...state,
                selected_rel_info: action.payload,
            };

        default:
            return state;
    }
}
