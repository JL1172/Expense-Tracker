import { useContext } from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ReferenceLine,
    ResponsiveContainer,
  } from 'recharts';
import { ChartContext } from '../contexts/ChartContext';
  
export default function ExpenseChart() {
    const {data} = useContext(ChartContext);
    const newData = [
        {name : "Net Income", profit : data.percentageOfIncome, income : data.user_info_income, expenses : data.expenseTotal}
    ]
    return (
        <ResponsiveContainer width="90%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={newData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <ReferenceLine y={0} stroke="#000" />
          <Bar dataKey="profit" fill="#8884d8" />
          <Bar dataKey="income" fill="dodgerblue" />
          <Bar dataKey="expenses" fill="#4f46e5" />
        </BarChart>
      </ResponsiveContainer>
    )
}
