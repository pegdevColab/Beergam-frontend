const ctx = document.getElementById('firstChart').getContext('2d');

const generateDays = (month, year) => {
  const daysInMonth = new Date(year, month, 0).getDate();
  return Array.from({ length: daysInMonth }, (_, i) => `${i + 1}/${month}`);
};

document.getElementById('curDate').valueAsDate = new Date(); // Deixar o input com a data atual

function updateChart() {
    const selectedDate = new Date(document.getElementById('curDate').value);
    const month = selectedDate.getMonth() + 1;
    const year = selectedDate.getFullYear();
    
    myChart.data.labels = generateDays(month, year);
    myChart.update();
}

const curMonth = new Date().getMonth() + 1;
const curYear = new Date().getFullYear();

const data = {
  labels: generateDays(curMonth, curYear),
  datasets: [
    {
      label: 'Líquido',
      data: [/* dados líquidos */],
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1
    },
    {
      label: 'Bruto',
      data: [/* dados brutos */],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1
    }
  ]
};

const config = {
  type: 'bar',
  data: data,
  options: {
    scales: {
      x: {
        beginAtZero: true
      },
      y: {
        beginAtZero: true
      }
    },
    plugins: {
        title: {
          display: true,
          text: 'Faturamento diário'
        },
      },
  }
};

const myChart = new Chart(ctx, config);
Chart.defaults.font.size = 16;
updateChart();