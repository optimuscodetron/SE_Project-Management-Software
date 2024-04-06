import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import Header from "./Header";

const ChartComponent = () => {
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
    const pieChartCtx = pieChartRef.current.getContext("2d");
    let pieChartInstance = null;

    // Dummy data
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
            "#FF6384", // Red
            "#36A2EB", // Blue
            "#FFCE56", // Yellow
            "#4CAF50", // Green
            "#9C27B0", // Purple
            "#FF9800", // Orange
          ],
          borderWidth: 1,
        },
      ],
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
        options: {
          plugins: {
            legend: {
              display: true,
              position: "top",
            },
          },
          responsive: true,
          maintainAspectRatio: false,
        },
      });
    };

    const updateChartSize = () => {
      // Update canvas size based on landscape/portrait orientation
      const newSize = isLandscape
        ? window.innerHeight / 2
        : window.innerWidth / 2;
      pieChartRef.current.width = newSize;
      pieChartRef.current.height = newSize;
      drawPieChart();
    };

    // Initial drawing of charts
    updateChartSize();

    // Cleanup function
    return () => {
      // Ensure proper cleanup by destroying chart instances
      if (pieChartInstance) {
        pieChartInstance.destroy();
      }
    };
  }, [isLandscape]);

  return (
    <div>
      <Header />
      <div
        style={{ backgroundColor: "#171e28", width: "100vw", height: "100vh" }}
      >
        <div
          className={`flex flex-col ${
            isLandscape ? "lg:flex-row" : ""
          } justify-center space-y-4 lg:space-y-0 lg:space-x-4`}
        >
          <div
            className={`w-full ${
              isLandscape ? "lg:w-1/2" : ""
            } bg-gray-200 p-4 rounded-md shadow-md`}
            style={{ height: "400px" }}
          >
            <canvas ref={pieChartRef}></canvas>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartComponent;