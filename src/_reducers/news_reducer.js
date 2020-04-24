export default function (state = {}, action) {
    switch (action.type) {
        case "COMPANY_NEWS":
            return { ...state, company_news: action.payload };

        default:
            return state;
    }
}
