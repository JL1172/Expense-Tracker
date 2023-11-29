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
import { CakeIcon, TruckIcon, HomeModernIcon, HeartIcon ,UserCircleIcon, BoltIcon } from "@heroicons/react/24/outline";
import { connect } from "react-redux";


export const addIcon = (name) => {
  switch(name) {
    case("Entertainment") :
      return <CakeIcon className = "cat-icons"  />;
    case("Transportation") :
      return <TruckIcon className = "cat-icons"  />;
    case("Housing") :
      return <HomeModernIcon className = "cat-icons"  />;
    case("Health") :
      return <HeartIcon className = "cat-icons"  />;
    case("Personal") :
      return <UserCircleIcon className = "cat-icons"  />;
    case("Utilities") :
      return <BoltIcon className = "cat-icons"  />
    default :
      return "";
  }
} 

function CategoryChart(props) {
  return (
    <ResponsiveContainer width="90%" height="100%">
    <BarChart
      width={500}
      height={300}
      data={props.data.analytics}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="sub_category_name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <ReferenceLine y={0} stroke="#000" />
      <Bar dataKey = "total" fill="dodgerblue" />
    </BarChart>
  </ResponsiveContainer>
  )
}

const mapStateToProps = state => {
  return {
    data: state.fin_state,
  }
}


export default connect(mapStateToProps, {})(CategoryChart);