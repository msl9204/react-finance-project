import React from "react";
import Axios from "axios";

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
