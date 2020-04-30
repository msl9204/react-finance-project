import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Grid from "@material-ui/core/Grid";
import BasicInfo from "./Info_Module/InfoContainer";
import StockHistory from "./Stock_Module/StockHistory";
import KeyMetric from "./Info_Module/KeyMetricContainer";
import CompanyRating from "./Info_Module/CompanyRating";
import RenderRelated from "./Related_Module/RenderRelated";
import NewsData from "../Main/News_Module/NewsData";

import {
    getKeyMetric,
    getRating,
    getRelatedSymbol,
} from "../../_actions/CompanyFetch_action";

// 지금 문제점 : symbol 선택안했음에도 이 컴포넌트가 실행되서, symbol 값이 있을 때, 이 컴포넌트가 작동하도록 추가 조건달아줘야함

export default function SelectedCompany() {
    const dispatch = useDispatch();

    const selected_company = useSelector(
        (state) => state.search_value.selected_value
    );

    const selected_key_metric = useSelector(
        (state) => state.search_value.selected_key_metric
    );

    const selected_rating = useSelector(
        (state) => state.search_value.selected_rating
    );

    const selected_rel_symbol = useSelector(
        (state) => state.search_value.selected_rel_symbol
    );

    useEffect(() => {
        dispatch(getKeyMetric(selected_company.symbol));
        dispatch(getRating(selected_company.symbol));
        dispatch(getRelatedSymbol(selected_company.symbol));

        dispatch({ type: "ISCHANGE_TOFALSE" });
    }, [selected_company.symbol]);

    // symbol 받아오는거 까지 함. 받아온 props를 component로 주고 api call 한번 더 해서 리스트 띄워줘야함

    if (selected_company.profile) {
        return (
            <React.Fragment>
                <Grid id="infos" item xs={2}>
                    <BasicInfo
                        industry={selected_company.profile.industry}
                        companyName={selected_company.profile.companyName}
                        price={selected_company.profile.price}
                        changes={selected_company.profile.changes}
                        changesPercentage={
                            selected_company.profile.changesPercentage
                        }
                        description={selected_company.profile.description}
                        sector={selected_company.profile.sector}
                    />

                    <KeyMetric data={selected_key_metric} />

                    <CompanyRating data={selected_rating} />
                </Grid>

                <Grid item xs={6}>
                    <StockHistory symbol={selected_company.symbol} />
                    <NewsData />
                </Grid>

                <Grid item xs={2}>
                    <strong>Related</strong>
                    <RenderRelated data={selected_rel_symbol} />
                </Grid>
            </React.Fragment>
        );
    }

    return (
        <Grid item xs={10} style={{ backgroundColor: "#bdbdbd" }}>
            선택해주세요
        </Grid>
    );
}
