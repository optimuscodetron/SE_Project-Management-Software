import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";

const ChartComponent = () => {
  const barChartRef = useRef(null);
  const pieChartRef = useRef(null);
  const [isLandscape, setIsLandscape] = useState(
    window.innerWidth > window.innerHeight
  );

  useEffect(() => {
    const handleResize = () => {
      setIsLandscape(window.innerWidth > window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const barChartCtx = barChartRef.current.getContext("2d");
    const pieChartCtx = pieChartRef.current.getContext("2d");
    let barChartInstance = null;
    let pieChartInstance = null;

    // Bar chart data
    const barChartData = {
      labels: [
        "Backlog",
        "Todo",
        "In Progress",
        "Done",
        "Cancelled",
        "Forwarded",
      ],
      datasets: [
        {
          label: "Number of Issues",
          data: [10, 20, 15, 30, 5, 8],
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 1,
        },
      ],
    };

    // Pie chart data
    const pieChartData = {
      labels: [
        "Backlog",
        "Todo",
        "In Progress",
        "Done",
        "Cancelled",
        "Forwarded",
      ],
      datasets: [
        {
          data: [10, 20, 15, 30, 5, 8],
          backgroundColor: [
            "red",
            "blue",
            "yellow",
            "green",
            "purple",
            "orange",
          ],
          borderWidth: 1,
        },
      ],
    };

    const drawBarChart = () => {
      // Destroy previous chart instance if exists
      if (barChartInstance) {
        barChartInstance.destroy();
      }

      // Draw new bar chart
      barChartInstance = new Chart(barChartCtx, {
        type: "bar",
        data: barChartData,
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    };

    const drawPieChart = () => {
      // Destroy previous chart instance if exists
      if (pieChartInstance) {
        pieChartInstance.destroy();
      }

      // Draw new pie chart
      pieChartInstance = new Chart(pieChartCtx, {
        type: "pie",
        data: pieChartData,
      });
    };

    const updateChartSize = () => {
      // Update canvas size based on landscape/portrait orientation
      const newSize = isLandscape ? window.innerWidth / 2 : window.innerWidth;
      barChartRef.current.width = newSize;
      pieChartRef.current.width = newSize;
      drawBarChart();
      drawPieChart();
    };

    // Initial drawing of charts
    updateChartSize();

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
  }, [isLandscape]);

  return (
    <div
      className={`flex flex-col lg:flex-row justify-center space-y-4 lg:space-y-0 lg:space-x-4 ${
        isLandscape ? "lg:flex-1" : ""
      }`}
    >
      <div className={`w-full ${isLandscape ? "lg:w-1/2" : ""}`}>
        <canvas ref={barChartRef}></canvas>
      </div>
      <div className={`w-full ${isLandscape ? "lg:w-1/2" : ""}`}>
        <canvas ref={pieChartRef}></canvas>
      </div>
    </div>
  );
};

export default ChartComponent;
