import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import RenderNews from "./RenderNews";
import { fetchNewsList } from "../../../_actions/CompanyFetch_action";

export default function NewsData({ symbol }) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchNewsList(symbol));
    }, [symbol, dispatch]);

    const news_data = useSelector(
        (state) => state.company_news.company_news,
        []
    );
    return <RenderNews data={news_data} />;
}

// selectedCompany 모듈에서 선택한 symbol값 props로 보내는거 생각해보기
