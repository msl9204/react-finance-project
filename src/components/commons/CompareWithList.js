import { useSelector, useDispatch } from "react-redux";
import { getInfo } from "../../_actions/CompanyFetch_action";

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
                return dispatch(getInfo(infos));
            } else {
                return undefined;
            }
        });
}
