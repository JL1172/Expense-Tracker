import { connect } from "react-redux";
import { ArrowTrendingDownIcon, ArrowTrendingUpIcon, CurrencyDollarIcon, CreditCardIcon, TrashIcon, PencilSquareIcon, ArrowSmallLeftIcon, XMarkIcon, ArrowSmallRightIcon, AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";
import { useCurrent } from "./customHooks/useCurrent";
import { finalizeDelete, firstStepDelete, renderExpensesCall } from "../redux/actions/user-actions";
import { StyledFin } from "../styles/StyledFin";
import { useEffect } from "react";
import { AnalyticsContext } from "../contexts/AnalyticsContext";
import { initiateFetchAnalytics } from "../redux/actions/fin-actions";
import CategoryChart, { addIcon } from "./CategoryChart";

function FinancialActivity(props) {
    const [current, change] = useCurrent("");
    const advancedDelete = async (activity_id) => {
        await props.finalizeDelete(activity_id);
        change("");
    }
    useEffect(() => {
        props.renderExpensesCall();
        props.initiateFetchAnalytics();
    }, []);
    const advancedFilter = (query) => {
        const insertion = `filter=${query}`;
        props.initiateFetchAnalytics(insertion);
    }
    const reset = () => {
        props.renderExpensesCall();
        props.initiateFetchAnalytics();
    }
    return (
        <StyledFin>
            <div className="container first-container">
                <div className="heading-box">Categories</div>
                <div id="category-rows">
                    {props.analytics.analytics.map((n, i) => {
                        return <a onClick={() => advancedFilter(n.sub_category_name)} key={i} href="#transactions"><div className="category-analytics">{addIcon(n.sub_category_name)}{n.sub_category_name}</div></a>
                    })}
                </div>
                <AnalyticsContext.Provider value={{ data: props.analytics }}><CategoryChart /></AnalyticsContext.Provider>

            </div>
            <div id="transactions" className="container last">
                <div className="heading-box-two" ><span>Latest Activity <CurrencyDollarIcon style={{ width: "1.5rem", height: "1.5rem" }} /></span>
                    {!props.analytics.filterOn ? <span className="unactive-filter" id="showAll"><AdjustmentsHorizontalIcon style={{ width: "1.5rem", height: "1.5rem" }} />Add Filter</span> 
                    : <span onClick={reset} id="showAll" className="active-filter"><XMarkIcon style={{ width: "1.5rem", height: "1.5rem" }} />Remove Filter</span>}
                    </div>
                {props.data.activities[0] && props.data.activities[0].map((n, i) => {
                    if (i < Infinity) {
                        return <div onClick={() => change(i)} id={current === i ? "focused" : props.data.firstDelete === i ? "focused" : "notFocused"} className={props.data.firstDelete === i ? "activities removal" : "activities non-removal"} key={i}>
                            <div className="shown-section marked" ><CreditCardIcon style={{ width: "1.5rem", height: "1.5rem", color: "#4f46e5" }} /><span>Description</span> : {n.activity_description}
                                <div style={{ marginLeft: "2rem" }} className="hidden-section marked"><span>Time </span>: {n.created_at.slice(0, 10)}</div>
                            </div>
                            <div className="shown-section" > ${n.category_name === "expenses" ?
                                n.activity_amount.toString().split("").reverse().map((n, i) => {
                                    if (i % 3 === 0 && i !== 0) {
                                        return `${n},`
                                    } return n;
                                }).reverse().join("")
                                : ""
                            }{n.category_name === "expenses" ?
                                <ArrowTrendingDownIcon style={{ width: "1.5rem", height: "1.5rem", color: "#7171bd" }} /> : <ArrowTrendingUpIcon style={{ width: "1.5rem", height: "1.5rem", color: "green" }} />
                                }</div>
                            <div className=" unmarked"><span>Time </span>: {n.created_at.slice(0, 10)}</div>
                            {props.data.firstDelete === i && <div id="confirm"
                            ><span onClick={() => props.firstStepDelete()} className={props.data.firstDelete === i ? "seen-confirm" : ""} >< ArrowSmallLeftIcon id="xMark" />No</span>
                                <div className={props.data.firstDelete === i ? "seen-confirm" : ""}>Confirm Deletion?</div>
                                <span onClick={() => advancedDelete(n.activity_id)} className={props.data.firstDelete === i ? "seen-confirm" : ""} id="button">Yes<ArrowSmallRightIcon id="xMark2" /></span></div>}
                            {current === i && <TrashIcon onClick={() => props.firstStepDelete(i)} id="trash" />}
                            {current === i && <PencilSquareIcon id="pencil" />}
                        </div>
                    }
                })}
                <div></div>
            </div>
        </StyledFin>
    )
}

const mapStateToProps = state => {
    return {
        data: state.user_state,
        analytics: state.fin_state
    }
}

export default connect(mapStateToProps, { renderExpensesCall, firstStepDelete, finalizeDelete, initiateFetchAnalytics })(FinancialActivity);