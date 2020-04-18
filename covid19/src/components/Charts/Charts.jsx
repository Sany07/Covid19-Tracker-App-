import React , { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api';
import { Line , Bar } from 'react-chartjs-2';


const Charts = ({ data: { confirmed, recovered, deaths } , country }) =>{
    const [ dailyData, setdailyData] = useState([]);

    useEffect(()=>{
        const fetchDailyDataApi = async ()=>{
            const data = await fetchDailyData();
            setdailyData(data);
        }
        fetchDailyDataApi();


        
},[setdailyData]);

const LineChart = (

    dailyData ?( <Line data={{
            labels: dailyData.map(({ date }) => date),
            datasets: [{
                data: dailyData.map(({ confirmed }) => confirmed),
                label: 'Infected' ,
                borderColor : 'blue',
                fill: true
            }, {
                data: dailyData.map(({ deaths }) => deaths),
                label: 'Deaths' ,
                borderColor : 'red',
                backgroundColor : 'rgba(255, 0, 0, 0.5)',
                fill: true
            } ],

    }}/>) : null

)
const barChart = (
    confirmed ? (
      <Bar
        data={{
          labels: ['Infected', 'Recovered', 'Deaths'],
          datasets: [
            {
              label: 'People',
              backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
              data: [confirmed.value, recovered.value, deaths.value],
            },
          ],
        }}
        options={{
          legend: { display: false },
          title: { display: true, text: `Current state in ${country}` },
        }}
      />
    ) : null
  );
    return(
        <div className="">

            { country ? barChart :  LineChart }
        </div>
    )
}

export default Charts