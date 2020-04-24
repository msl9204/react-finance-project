import { useSelector, useDispatch } from "react-redux";
import { getInfo } from "../../_actions/CompanyFetch_action";
import Axios from "axios";

export default function CompareWithList() {
    const dispatch = useDispatch();
    const company = useSelector((state) => state.search_value.search_value);
    const symbol_list = useSelector(
        (state) => state.company_reducer.company_data
    );

    symbol_list &&
        symbol_list.map((item) => {
            if (item.symbol === company) {
                const infos = {
                    symbol: item.symbol,
                };
                dispatch(getInfo(infos));
            }
        });
}

// TODO: action에서 async하게 받은 symbol을 이용해서 finnhub에서 최대한 정보 받은 후 store에 저장하기
