import { combineReducers } from "redux";
import company_reducer from "./company_reducer";
import company_news from "./news_reducer";
import search_value from "./search_value_reducer";

export default combineReducers({
    company_reducer,
    company_news,
    search_value,
});
