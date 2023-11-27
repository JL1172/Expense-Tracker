import {useLocal2} from "./useLocal2";

export const initialState = [
    { name: 'Dashboard', path: 'content', current: true },
    { name: 'Financial Activity', path: 'fin-activity', current: false },
    { name: 'Add Expense', path: 'add-expense-form', current: false },
    { name: 'Account', path: 'account-information', current: false },
]

export const useNav = (key,state=initialState) => {
    const [data,setData] = useLocal2(key,state);
    const change = (name) => {
        const result = state.map(n => {
            if (n.name === name) {
                return {...n, current : !n.current};
            } return n;
        });
        setData(result);
    }
    return [data,change]; 
}