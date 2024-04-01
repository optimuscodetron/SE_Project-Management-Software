import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const ChartComponent = () => {
  const barChartRef = useRef(null);
  const pieChartRef = useRef(null);
  let barChartInstance = null;
  let pieChartInstance = null;

  useEffect(() => {
    // Bar Chart Data
    const barData = {
      labels: ["January", "February", "March", "April", "May"],
      datasets: [
        {
          label: "Sales",
          data: [65, 59, 80, 81, 56],
          backgroundColor: "#4F46E5",
        },
      ],
    };

    // Pie Chart Data
    const pieData = {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple"],
      datasets: [
        {
          data: [12, 19, 3, 5, 2],
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
            "#2ECC71",
            "#9B59B6",
          ],
        },
      ],
    };

    // Bar Chart Options
    const barOptions = {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    };

    // Pie Chart Options
    const pieOptions = {
      responsive: true,
    };

    // Destroy previous instances of charts
    if (barChartInstance) {
      barChartInstance.destroy();
    }
    if (pieChartInstance) {
      pieChartInstance.destroy();
    }

    // Render Bar Chart
    if (barChartRef.current) {
      barChartInstance = new Chart(barChartRef.current, {
        type: "bar",
        data: barData,
        options: barOptions,
      });
    }

    // Render Pie Chart
    if (pieChartRef.current) {
      pieChartInstance = new Chart(pieChartRef.current, {
        type: "pie",
        data: pieData,
        options: pieOptions,
      });
    }

    // Cleanup function
    return () => {
      if (barChartInstance) {
        barChartInstance.destroy();
      }
      if (pieChartInstance) {
        pieChartInstance.destroy();
      }
    };
  }, []);

  return (
    <div className="flex justify-around mt-8">
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
