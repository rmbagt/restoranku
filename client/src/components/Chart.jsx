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

export const options = {
  responsive: true,
  tension: 0.4,
  plugins: {
    legend: {
      position: "top",
    },
  },
};

const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Revenue",
      data: [
        15000000, 10000000, 14000000, 11000000, 16000000, 12000000, 8000000,
        14000000, 11000000, 12000000, 23000000, 12000000,
      ],
      borderColor: "rgb(71 85 105)",
      backgroundColor: "rgb(71 85 105)",
    },
  ],
};

export default function App() {
  return <Line options={options} data={data} />;
}
