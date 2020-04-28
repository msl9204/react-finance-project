import Axios from "axios";

export function getRelatedSymbol(symbol) {
    const endpoint = `https://finnhub.io/api/v1/stock/peers?symbol=${symbol}&token=bq8njs7rh5rc96c0jpt0`;

    const request = Axios.get(endpoint).then((response) => response.data);

    return {
        type: "SELECTED_REL_SYMBOL",
        payload: request,
    };
}

export function getRating(symbol) {
    const endpoint =
        "https://financialmodelingprep.com/api/v3/company/rating/" + symbol;

    const request = Axios.get(endpoint).then((response) => response.data);

    return {
        type: "SELECTED_RATING",
        payload: request,
    };
}

export function getKeyMetric(symbol) {
    const endpoint =
        "https://financialmodelingprep.com/api/v3/company-key-metrics/" +
        symbol;

    const request = Axios.get(endpoint).then((response) => response.data);

    return {
        type: "SELECTED_KEY_METRIC",
        payload: request,
    };
}

export function getSearchValue(value) {
    return {
        type: "USER_SEARCH_VALUE",
        payload: value,
    };
}

export function getInfo(value) {
    const endpoint =
        "https://financialmodelingprep.com/api/v3/company/profile/" +
        value.symbol;

    const request = Axios.get(endpoint).then((response) => response.data);

    return {
        type: "SELECTED_VALUE",
        payload: request,
    };
}

export function fetchCompanyList() {
    const request = Axios.get(
        "https://finnhub.io/api/v1/stock/symbol?exchange=US&token=bq8njs7rh5rc96c0jpt0",
        { json: true }
    ).then((response) => response.data);

    return {
        type: "COMPANY_SYMBOLS",
        payload: request,
    };
}

export function fetchNewsList() {
    const request = Axios.get(
        "https://finnhub.io/api/v1/news?category=general&token=bq8njs7rh5rc96c0jpt0",
        { json: true }
    ).then((response) => response.data);

    return {
        type: "COMPANY_NEWS",
        payload: request,
    };
}
