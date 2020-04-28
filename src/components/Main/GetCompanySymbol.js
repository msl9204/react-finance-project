import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCompanyList } from "../../_actions/CompanyFetch_action";

export default function GetCompanySymbol() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCompanyList());
    }, [dispatch]);
}
