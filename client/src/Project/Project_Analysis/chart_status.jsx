import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import CurrentList from "./currentList";

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

    // Aggregate data based on status
    const statusCounts = CurrentList.reduce((acc, curr) => {
      acc[curr.status] = (acc[curr.status] || 0) + 1;
      return acc;
    }, {});

    const barChartData = {
      labels: Object.keys(statusCounts),
      datasets: [
        {
          // label: "Number of Issues",
          data: Object.values(statusCounts),
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

    const pieChartData = {
      labels: Object.keys(statusCounts),
      datasets: [
        {
          data: Object.values(statusCounts),
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

    const drawBarChart = () => {
      if (barChartInstance) {
        barChartInstance.destroy();
      }

      barChartInstance = new Chart(barChartCtx, {
        type: "bar",
        data: barChartData,
        options: {
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                color: "black", 
              },
            },
            x: {
              ticks: {
                color: "black",
              },
            },
          },
          plugins: {
            legend: {
              display: false,
              position: "top",
            },
          },
          responsive: true,
          maintainAspectRatio: false,
          barThickness: isLandscape ? 40 : 20,
        },
      });
    };

    const drawPieChart = () => {
      if (pieChartInstance) {
        pieChartInstance.destroy();
      }

      pieChartInstance = new Chart(pieChartCtx, {
        type: "pie",
        data: pieChartData,
        options: {
          color: "black",
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
      const newSize = isLandscape
        ? window.innerHeight / 2
        : window.innerWidth / 2;
      barChartRef.current.width = newSize;
      barChartRef.current.height = newSize;
      pieChartRef.current.width = newSize;
      pieChartRef.current.height = newSize;
      drawBarChart();
      drawPieChart();
    };

    updateChartSize();

    return () => {
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
  );
};

export default ChartComponent;
