import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

const StaticChart = () => {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    setChartData({
      labels: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'],
      datasets: [
        {
          label: 'level of thickness',
          data: [32, 45, 12, 76, 69],
          backgroundColor: ['rgba(75,192,192,0.6)'],
          borderWidth: 4
        }
      ]
    });
  };

  useEffect(() => {
    chart();
  }, []);

  return (
    <div>
      <Line
        data={chartData}
        options={{
          responsive: true,
          title: { text: 'THICCNESS SCALE', display: true },
          scales: {
            yAxes: [
              {
                ticks: {
                  autoSkip: true,
                  maxTicksLimit: 10,
                  beginAtZero: true
                },
                gridLines: {
                  display: false
                }
              }
            ],
            xAxes: [
              {
                gridLines: {
                  display: false
                }
              }
            ]
          }
        }}
      />
    </div>
  );
};

export default StaticChart;
