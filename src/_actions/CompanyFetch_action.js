import Axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const FINNHUB_TOKEN = process.env.REACT_APP_FINNHUB_TOKEN;

export function getRelatedInfo(value) {
    if (value) {
        const endpoint = `https://financialmodelingprep.com/api/v3/stock/real-time-price/${value}`;

        const request = Axios.get(endpoint).then((response) => response.data);

        return {
            type: "SELECTED_REL_INFO",
            payload: request,
        };
    } else {
        return {
            type: "SELECTED_REL_INFO",
            payload: null,
        };
    }
}

export function getRelatedSymbol(symbol) {
    const endpoint = `https://finnhub.io/api/v1/stock/peers?symbol=${symbol}&token=${FINNHUB_TOKEN}`;

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

export function getInfo(symbol) {
    const endpoint =
        "https://financialmodelingprep.com/api/v3/company/profile/" + symbol;

    const request = Axios.get(endpoint).then((response) => response.data);

    return {
        type: "SELECTED_VALUE",
        payload: request,
    };
}

export function fetchCompanyList() {
    const request = Axios.get(
        `https://finnhub.io/api/v1/stock/symbol?exchange=US&token=${FINNHUB_TOKEN}`,
        { json: true }
    ).then((response) => response.data);

    return {
        type: "COMPANY_SYMBOLS",
        payload: request,
    };
}

export function fetchNewsList(symbol) {
    if (symbol) {
        const request = Axios.get(
            `https://finnhub.io/api/v1/company-news?symbol=${symbol}&token=${FINNHUB_TOKEN}`,
            { json: true }
        ).then((response) => response.data);

        return {
            type: "COMPANY_NEWS",
            payload: request,
        };
    } else {
        return {
            type: "COMPANY_NEWS",
            payload: null,
        };
    }
}
