const initialState = {};

export default function (state = initialState, action) {
    switch (action.type) {
        case "MAJOR_INDEX":
            return {
                ...state,
                company_data: action.payload,
            };

        default:
            return state;
    }
}
