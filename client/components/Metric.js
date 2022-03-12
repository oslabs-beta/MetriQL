//import plug-ins from chart.js 
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

//import line (to be rendered) from react-chartjs-2
import { Line } from 'react-chartjs-2';

//register plugins to be applied globally (to all charts)
ChartJS.register(
  CategoryScale, 
  LinearScale, 
  PointElement,
  LineElement,
  Title,
  Tooltip, 
  Legend
);

//create options parameter object
export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false
    }, 
    title: {
      display: true,
      text: 'Speed per Fetch'
    }, 
    toolTip: {
      display: true, 
    }
  }

}

const labels = [1,2,3,4,5,6];

const requestTime = ({ metrics }) => {
 let time = metrics.queryTime
}


// export function reportWebVitals(metric) {
//   console.log(metric.value)
// }

//create data parameters object 
export const data = {
  labels, 
  datasets: [
    {
      label: 'ms', 
      lineTension: 0.40,
      //data will be dynamic based on important function/variable; hardcoded for now 
      data: [5, 8, 10, 50, 12],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    }
  ]
}

//graphed data coming from result.js speed element
// import speed from './results.js'

//what is attached to main page rendering 
function Metric() {
    return (
      <div>
          <h3>Metric logic here</h3>
            <Line height={20} width={40} options={options} data={data}/>
      </div>
    )
  }
  
  export default Metric;