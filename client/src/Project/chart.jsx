import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const ChartComponent = () => {
  const barChartRef = useRef(null);
  const pieChartRef = useRef(null);

  useEffect(() => {
    const barChartCtx = barChartRef.current.getContext('2d');
    const pieChartCtx = pieChartRef.current.getContext('2d');
    let barChartInstance = null;
    let pieChartInstance = null;

    // Dummy data
    const barChartData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [{
        label: 'Sales',
        data: [65, 59, 80, 81, 56, 55],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
      }]
    };

    const pieChartData = {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'red',
          'blue',
          'yellow',
          'green',
          'purple',
          'orange'
        ],
        borderWidth: 1
      }]
    };

    const drawBarChart = () => {
      // Destroy previous chart instance if exists
      if (barChartInstance) {
        barChartInstance.destroy();
      }
      
      // Draw new bar chart
      barChartInstance = new Chart(barChartCtx, {
        type: 'bar',
        data: barChartData,
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    };

    const drawPieChart = () => {
      // Destroy previous chart instance if exists
      if (pieChartInstance) {
        pieChartInstance.destroy();
      }
      
      // Draw new pie chart
      pieChartInstance = new Chart(pieChartCtx, {
        type: 'pie',
        data: pieChartData
      });
    };

    // Initial drawing of charts
    drawBarChart();
    drawPieChart();

    // Cleanup function
    return () => {
      // Ensure proper cleanup by destroying chart instances
      if (barChartInstance) {
        barChartInstance.destroy();
      }
      if (pieChartInstance) {
        pieChartInstance.destroy();
      }
    };
  }, []);

  return (
    <div className="flex justify-center space-x-4">
      <div className="w-1/2">
        <canvas ref={barChartRef}></canvas>
      </div>
      <div className="w-1/2">
        <canvas ref={pieChartRef}></canvas>
      </div>
    </div>
  );
};

export default ChartComponent;
