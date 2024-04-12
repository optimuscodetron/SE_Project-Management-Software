import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import CurrentList from "./ProjectCycles/CurrentCycles/components/currentList";

const BarChartMember = () => {
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

    const drawBarChart = (data) => {
      if (barChartInstance) {
        barChartInstance.destroy();
      }

      barChartInstance = new Chart(barChartCtx, {
        type: "bar",
        data: data,
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
          plugins: {
            legend: {
              display: false,
            },
          },
          responsive: true,
          maintainAspectRatio: false,
          barThickness: isLandscape ? 40 : 20,
        },
      });
    };

    // Aggregate data based on assignee
    const memberCounts = CurrentList.reduce((acc, curr) => {
      acc[curr.assignee] = (acc[curr.assignee] || 0) + 1;
      return acc;
    }, {});

    // Prepare data for bar chart
    const barChartData = {
      labels: Object.keys(memberCounts),
      datasets: [
        {
          label: "Number of Issues",
          data: Object.values(memberCounts),
          backgroundColor: "rgba(54, 162, 235, 0.5)",
          borderColor: "rgba(54, 162, 235, 1)",
          borderWidth: 1,
        },
      ],
    };

    drawBarChart(barChartData);

    return () => {
      if (barChartInstance) {
        barChartInstance.destroy();
      }
    };
  }, [isLandscape]);

  return (
    <div
      className="w-full bg-gray-200 p-4 rounded-md shadow-md"
      style={{ height: "400px" }}
    >
      <canvas ref={barChartRef}></canvas>
    </div>
  );
};

export default BarChartMember;
