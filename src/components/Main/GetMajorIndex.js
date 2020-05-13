import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getMajorIndex } from "../../_actions/CompanyFetch_action";

export default function GetMajorIndex() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMajorIndex());
    }, [dispatch]);
}
