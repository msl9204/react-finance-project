import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NewsBox from "./NewsBox";
import renderMainFrame from "../commons/main_ui_frame/renderMainFrame";
import { fetchNewsList } from "../../_actions/CompanyFetch_action";

export default function RenderNews() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchNewsList());
    }, [dispatch]);

    const news_data = useSelector(
        (state) => state.company_news.company_news,
        []
    );

    return renderMainFrame(<NewsBox news_data={news_data} />);
}
