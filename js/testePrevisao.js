Chart.register(ChartDataLabels);

const formatter = function (value, context) {
  const i = context.dataIndex;
  const prev = context.dataset.data[i - 1];
  const diff = value.y - prev.y;
  const percentage = ((diff * 100) / prev.y).toFixed(1);
  return (diff > 0 ? "+ " + percentage : percentage) + " %";
};

const myData = [
  { x: "2018-12-31", y: 918 },
  { x: "2019-12-31", y: 1500 },
  { x: "2020-12-31", y: 421 },
  { x: "2021-12-31", y: 576 },
  { x: "2022-12-31", y: 1291 },
  { x: "2023-12-31", y: 1000 },
];
const myForecast1 = [
  { x: "2023-12-31", y: 1000 },
  { x: "2027-01-01", y: 1890 },
];
const myForecast2 = [
  { x: "2023-12-31", y: 1000 },
  { x: "2027-01-01", y: 1213 },
];
const myForecast3 = [
  { x: "2023-12-31", y: 1000 },
  { x: "2027-01-01", y: 612 },
];

const ctx = document.getElementById("myChart");
const chart = new Chart(ctx, {
  type: "line",
  data: {
    datasets: [
      {
        label: "Actual",
        pointRadius: 0,
        data: myData,
        borderColor: "#506da5",
        backgroundColor: Chart.helpers.color("#506da5").alpha(0.3).rgbString(),
        fill: { value: 1000 },
        order: 1,
        datalabels: {
          display: false
        },
      },
      {
        label: "Bull",
        data: myForecast1,
        pointRadius: 0,
        borderColor: "#0d7213",
        backgroundColor: Chart.helpers.color("#0d7213").alpha(0.3).rgbString(),
        fill: { value: 1000 },
        order: 1,
        datalabels: {
          display: (context) => context.dataIndex > 0,
          formatter,
          align: "right",
          color: "#0d7213",
          font: {
            size: 16,
            weight: "bold"
          }
        },
      },
      {
        label: "Base",
        data: myForecast2,
        pointRadius: 0,
        borderColor: "#cc6c25",
        order: 0,
        datalabels: {
          display: (context) => context.dataIndex > 0,
          formatter,
          align: "right",
          color: "#cc6c25",
          font: {
            size: 16,
            weight: "bold"
          }
        },
      },
      {
        label: "Bear",
        data: myForecast3,
        pointRadius: 0,
        borderColor: "#f01f24",
        backgroundColor: Chart.helpers.color("#f01f24").alpha(0.3).rgbString(),
        fill: "-1",
        order: 1,
        datalabels: {
          display: (context) => context.dataIndex > 0,
          formatter,
          align: "right",
          color: "#f01f24",
          font: {
            size: 16,
            weight: "bold"
          }
        },
      },
    ],
  },
  options: {
    layout: {
      padding: {
        right: 80,
      },
    },
    plugins: {
      legend: {
        labels: {
          pointStyle: "circle",
          usePointStyle: true
        },
      },
    },
    scales: {
      x: {
        type: "time",
        time: {
          unit: "year",
        },
      },
    },
  },
});
