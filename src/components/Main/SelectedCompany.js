import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Grid from "@material-ui/core/Grid";
import BasicInfo from "./Info_Module/InfoContainer";
import StockHistory from "./Stock_Module/StockHistory";
import KeyMetric from "./Info_Module/KeyMetricContainer";
import CompanyRating from "./Info_Module/CompanyRating";
import RenderRelated from "./Related_Module/RenderRelated";
import RenderNews from "./News_Module/RenderNews";
import WarnningBanner from "../commons/Warning/WarningBanner";
import styled from "styled-components";
import {
    getInfo,
    getKeyMetric,
    getRating,
    getRelatedSymbol,
    fetchNewsList,
} from "../../_actions/CompanyFetch_action";

// 지금 문제점 : symbol 선택안했음에도 이 컴포넌트가 실행되서, symbol 값이 있을 때, 이 컴포넌트가 작동하도록 추가 조건달아줘야함

const StyledDiv = styled.div`
    max-width: 75vw;
    margin-bottom: 20px;
`;

export default function SelectedCompany({ companySymbol }) {
    const dispatch = useDispatch();

    const selected_info = useSelector(
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

    const selected_news_data = useSelector(
        (state) => state.company_news.company_news
    );

    useEffect(() => {
        dispatch(getInfo(companySymbol));
        dispatch(getKeyMetric(companySymbol));
        dispatch(getRating(companySymbol));
        dispatch(getRelatedSymbol(companySymbol));
        dispatch(fetchNewsList(companySymbol));
    }, [companySymbol, dispatch]);

    // TODO :: 에러메세지 component 유무에 따라 띄워주는거 만들기

    return (
        <Grid item xs={10}>
            {!selected_info.profile && (
                <StyledDiv>
                    <WarnningBanner />
                </StyledDiv>
            )}

            {!selected_rating && (
                <StyledDiv>
                    <WarnningBanner message={"레이팅정보"} />
                </StyledDiv>
            )}

            {!selected_news_data && (
                <StyledDiv>
                    <WarnningBanner message={"뉴스데이터"} />
                </StyledDiv>
            )}

            <Grid container spacing={3}>
                <Grid id="infos" item xs={3}>
                    {selected_info.profile && (
                        <BasicInfo
                            industry={selected_info.profile.industry}
                            companyName={selected_info.profile.companyName}
                            price={selected_info.profile.price}
                            changes={selected_info.profile.changes}
                            changesPercentage={
                                selected_info.profile.changesPercentage
                            }
                            description={selected_info.profile.description}
                            sector={selected_info.profile.sector}
                        />
                    )}
                    {selected_key_metric && (
                        <KeyMetric data={selected_key_metric} />
                    )}
                    {selected_rating && (
                        <CompanyRating data={selected_rating} />
                    )}
                </Grid>

                <Grid item xs={7}>
                    <StockHistory symbol={companySymbol} />
                    <RenderNews data={selected_news_data} />
                </Grid>
                <Grid item xs={2}>
                    <strong>Related</strong>
                    {selected_rel_symbol && (
                        <RenderRelated data={selected_rel_symbol} />
                    )}
                </Grid>
            </Grid>
        </Grid>
    );
}
