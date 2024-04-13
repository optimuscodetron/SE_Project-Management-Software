import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import CurrentList from "./ProjectCycles/CurrentCycles/components/currentList";

const PieMem = () => {
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

    // Aggregate data based on assignee
    const memberCounts = CurrentList.reduce((acc, curr) => {
      acc[curr.assignee] = (acc[curr.assignee] || 0) + 1;
      return acc;
    }, {});

    // Prepare data for pie chart
    const pieChartData = {
      labels: Object.keys(memberCounts),
      datasets: [
        {
          data: Object.values(memberCounts),
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
      if (pieChartInstance) {
        pieChartInstance.destroy();
      }

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

    drawPieChart();

    return () => {
      if (pieChartInstance) {
        pieChartInstance.destroy();
      }
    };
  }, [CurrentList]);

  return (
    <div className={`w-full ${isLandscape ? "lg:w-1/2" : ""}`}>
      <canvas ref={pieChartRef}></canvas>
    </div>
  );
};

export default PieMem;
