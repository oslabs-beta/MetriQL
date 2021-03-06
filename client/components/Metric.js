import { useContext } from 'react';
import { GraphContext } from '../context/global-context';

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
import { Chart, Line } from 'react-chartjs-2';

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



//what is attached to main page rendering 
function Metric() {
  const { speedState } = useContext(GraphContext)

  const labels = speedState.speed.map((el, index) => { return index + 1 });


  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Speed per Fetch'
      },
      toolTip: {
        display: true,
      }
    },
    scales: {
      yAxes: [
        {
          gridLines: {
            zeroLineColor: "white"
          }
        }
      ],
      xAxes: [
        {
          gridLines: {
            zeroLinecolor: "white"
          }
        }
      ]
    }
  }

  //create data parameters object 
  const data = {
    labels,
    datasets: [
      {
        label: 'ms',
        lineTension: 0.40,
        data: speedState.speed,
        borderColor: 'rgb(258, 34, 12)',
        backgroundColor: 'rgba(253, 99, 132, 0.5)',
      }
    ]
  }
  return (
    <div className='pb-3'>
      <Line height='20vw' width='35vw' options={options} data={data} />
    </div>
  )
}

export default Metric;