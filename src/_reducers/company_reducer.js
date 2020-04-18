export default function (state = {}, action) {
    switch (action.type) {
        case "COMPANY_SYMBOLS":
            return { ...state, company_data: action.payload };

        default:
            return state;
    }
}
