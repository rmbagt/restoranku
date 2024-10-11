import { useMemo } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  tension: 0.4,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Monthly Revenue",
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      title: {
        display: true,
        text: "Revenue",
      },
      ticks: {
        callback: function (value) {
          return "Rp" + value.toLocaleString("id-ID");
        },
      },
    },
    x: {
      title: {
        display: true,
        text: "Month",
      },
    },
  },
};

const MonthlyRevenueChart = ({ historyQueries = [] }) => {
  const monthlyData = useMemo(() => {
    const monthlyRevenue = Array(12).fill(0);

    if (Array.isArray(historyQueries)) {
      historyQueries.forEach((query) => {
        if (query && query.created_at && query.price) {
          const date = new Date(query.created_at);
          const month = date.getMonth();
          monthlyRevenue[month] += query.price;
        }
      });
    }

    return monthlyRevenue;
  }, [historyQueries]);

  const chartData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Revenue",
        data: monthlyData,
        borderColor: "rgb(71, 85, 105)",
        backgroundColor: "rgba(71, 85, 105, 0.5)",
      },
    ],
  };

  return <Line options={options} data={chartData} />;
};

export default MonthlyRevenueChart;
