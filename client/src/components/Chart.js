import { useContext } from 'react';
import { PieChart, Pie, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { ChartContext } from '../contexts/ChartContext';



export default function Chart() {
    const { data } = useContext(ChartContext);
    const { user_info_income, expenseTotal } = data;
    const data01 = [
        { name: "Income", value: user_info_income },
        { name: "Expense", value: expenseTotal },
    ];
    const COLORS = ["#4f46e5", "#7171bd"]
    return (
        <ResponsiveContainer style={{position : "relative"}} width="100%" height="100%">
            <PieChart width={400} height={400}>
                <Pie
                    dataKey="value"
                    isAnimationActive={false}
                    data={data01}
                    paddingAngle={1}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#4f46e5"
                >
                    {data01.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip />
            </PieChart>
        </ResponsiveContainer>
    );
}