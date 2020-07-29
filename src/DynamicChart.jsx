import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

const DynamicChart = () => {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    let movieName = [];
    let movieRating = [];
    axios
      .get('/movies.json')
      .then((res) => {
        console.log(res.data);
        for (const dataObj of res.data) {
          movieName.push(dataObj.title);
          movieRating.push(parseInt(dataObj.rating));
        }
      })
      .catch((err) => {
        console.log(err);
      });

    setChartData({
      labels: movieName,
      datasets: [
        {
          label: 'Level of Rating',
          data: movieRating,
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

export default DynamicChart;
