import { connect } from "react-redux";
import { StyledContent } from "../styles/StyledContent";
import { useContext, useEffect } from "react";
import { finalizeDelete, firstStepDelete, renderExpensesCall } from "../redux/actions/user-actions";
import Chart from "./Chart";
import { ChartContext } from "../contexts/ChartContext";
import ExpenseChart from "./BarChart";
import { ArrowTrendingDownIcon, ArrowTrendingUpIcon, CurrencyDollarIcon, CreditCardIcon, TrashIcon, PencilSquareIcon, ArrowSmallLeftIcon, XMarkIcon, ArrowSmallRightIcon } from "@heroicons/react/24/outline";
import { useCurrent } from "../components/customHooks/useCurrent";
import { RoutingContext } from "../contexts/RoutingContext";
import { enterEditMode } from "../redux/actions/expenseAdd-actions";

function Content(props) {
    const [current, change] = useCurrent("");
    const {direct} = useContext(RoutingContext);
    let monetary = props.data.user_info_income.toString().split("").reverse().map((n, i) => {
        if (props.data.user_info_income >= 1000 && i % 3 === 0 && i !== 0) {
            return `${n},`
        } return n;
    });
    monetary = monetary.reverse().join("");
    let monetary2 = props.data.expenseTotal.toString().split("").reverse().map((n, i) => {
        if (props.data.expenseTotal >= 1000 && i % 3 === 0 && i !== 0) {
            return `${n},`;
        } return n;
    })

    monetary2 = monetary2.reverse().join("");
    useEffect(() => {
        props.renderExpensesCall();
    }, []);
    const advancedDelete = async(activity_id) => {
        await props.finalizeDelete(activity_id);
        change("");
    }
     
    const advancedEdit = (data) => {
        direct("Add Expense");
        props.enterEditMode(data);
    }
    return (
        <StyledContent>
            <div className="container">
                <div className="heading-box">Income</div>
                <div className="balance">${monetary}.00</div>
                <div id="secondaryIncome" style={{ color: Math.abs(props.data.percentChange).toFixed(2) >= 100 ? "#7171bd" : "#4f46e5" }}>{Math.abs(props.data.percentChange).toFixed(2)}% Of Income Used This Month</div>
                <ChartContext.Provider value={{ data: props.data }}><Chart /></ChartContext.Provider>
            </div>
            <div className="container second">
                <div className="heading-box">Expenses</div>
                <div className="balance">${monetary2}{monetary2.at(-1) === "0" ? ".00" : ""}</div>
                <ChartContext.Provider value={{ data: props.data }}><ExpenseChart /></ChartContext.Provider>
            </div>
            <div className="container last">
                <div className="heading-box-two" >Latest Activity <CurrencyDollarIcon style={{ width: "1.5rem", height: "1.5rem" }} /></div>
                {props.data.activities[0] && props.data.activities[0].map((n, i) => {
                    if (i < 4) {
                        return <div onClick={() => change(i)} id={current === i ? "focused" : props.data.firstDelete === i ? "focused" : "notFocused"} className={props.data.firstDelete === i ? "activities removal" : "activities non-removal"} key={i}>
                            <div className="shown-section marked" ><CreditCardIcon style={{ width: "1.5rem", height: "1.5rem", color: "#4f46e5" }} /><span>Description</span> : {n.activity_description}
                                <div style={{ marginLeft: "2rem" }} className="hidden-section marked"><span>Time </span>: {n.created_at.slice(0, 10)}</div>
                            </div>
                            <div className="shown-section" > ${n.category_name === "expenses" ?
                                n.activity_amount.toString().split("").reverse().map((n, i) => {
                                    if (n >= 1000 && i % 3 === 0 && i !== 0) {
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
                            <span onClick={()=> advancedDelete(n.activity_id)} className={props.data.firstDelete === i ? "seen-confirm" : ""} id="button">Yes<ArrowSmallRightIcon id="xMark2" /></span></div>}
                            {current === i && <TrashIcon onClick={() => props.firstStepDelete(i)} id="trash" />}
                            {current === i && <PencilSquareIcon id="pencil" onClick={()=> advancedEdit(n)}/>}
                        </div>
                    }
                })}
                <div></div>
            </div>
        </StyledContent>
    )
}

const mapStateToProps = state => {
    return {
        data: state.user_state
    }
}

export default connect(mapStateToProps, { renderExpensesCall, firstStepDelete, finalizeDelete, enterEditMode })(Content);