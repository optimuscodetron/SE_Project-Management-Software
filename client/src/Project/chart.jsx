import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import Header from "./Header";

const ChartComponent = () => {
  const barChartRef = useRef(null);
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
    let barChartInstance = null;

    // Dummy data
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
          backgroundColor: [
            "rgba(255, 99, 132, 0.5)",
            "rgba(54, 162, 235, 0.5)",
            "rgba(255, 206, 86, 0.5)",
            "rgba(75, 192, 192, 0.5)",
            "rgba(153, 102, 255, 0.5)",
            "rgba(255, 159, 64, 0.5)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
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
          plugins: {
            legend: {
              display: true,
              position: "top",
            },
          },
          responsive: true,
          maintainAspectRatio: false,
          // Adjust the bar thickness here
          barThickness: isLandscape ? 40 : 20, // Decrease the size of bars as per your requirement
        },
      });
    };

    const updateChartSize = () => {
      // Update canvas size based on landscape/portrait orientation
      const newSize = isLandscape
        ? window.innerHeight / 2
        : window.innerWidth / 2;
      barChartRef.current.width = newSize;
      barChartRef.current.height = newSize;
      drawBarChart();
    };

    // Initial drawing of charts
    updateChartSize();

    // Cleanup function
    return () => {
      // Ensure proper cleanup by destroying chart instances
      if (barChartInstance) {
        barChartInstance.destroy();
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
            <canvas ref={barChartRef}></canvas>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartComponent;
