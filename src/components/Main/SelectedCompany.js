import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Grid from "@material-ui/core/Grid";
import BasicInfo from "./InfoContainer";
import CanvasModule from "./Canvas";
import StockHistory from "./StockHistory";
import KeyMetric from "./KeyMetricContainer";
import CompanyRating from "./CompanyRating";
import { getKeyMetric } from "../../_actions/CompanyFetch_action";

// 지금 문제점 : symbol 선택안했음에도 이 컴포넌트가 실행되서, symbol 값이 있을 때, 이 컴포넌트가 작동하도록 추가 조건달아줘야함

export default function SelectedCompany() {
    const [Symbol, setSymbol] = useState("");
    const dispatch = useDispatch();

    const selected_company = useSelector(
        (state) => state.search_value.selected_value
    );

    const selected_key_metric = useSelector(
        (state) => state.search_value.selected_key_metric
    );

    console.log("selector value : ", selected_key_metric);

    useEffect(() => {
        dispatch(getKeyMetric(selected_company.symbol));
    }, [selected_company.symbol]);

    if (selected_company.profile) {
        return (
            <>
                <Grid item xs={2}>
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
                    {selected_key_metric && (
                        <KeyMetric data={selected_key_metric} />
                    )}

                    <CompanyRating />
                </Grid>

                <Grid item xs={6}>
                    <StockHistory symbol={selected_company.symbol} />
                </Grid>

                <Grid item xs={2}>
                    Related
                </Grid>
            </>
        );
    }

    return <div>선택해주세요</div>;
}
