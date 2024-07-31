//Gráfico de linha
const ctx1 = document.getElementById('firstChart');

new Chart(ctx1, {
  type: 'line', 
  data: {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set','Out','Nov','Dec'],
    datasets: [{
      label: 'Acos', 
      data: [12, 19, 3, 5, 2, 3, 8, 3, 6, 4, 5, 7],
      borderWidth: 2,
      tension: .5,
      fill: true,
      backgroundColor: '#0075FF',
      responsive: false,
    }]
  },
  options: {
    aspectRatio: 2.5,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
            color: '#FFF'
        }
      },
      x: {
        ticks: {
            color: '#FFF'
        }
      }
    }
  }
});

Chart.defaults.color = '#FFF';
Chart.defaults.font.size = 16;
//------------------------------------------------