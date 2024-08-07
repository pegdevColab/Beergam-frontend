//Gráfico de linha
const ctx1 = document.getElementById('firstChart');
const ctx2 = document.getElementById('secondChart');

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
      responsive: true,
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
//------------------------------------------------

new Chart(ctx2, {
  type: 'bar',
  data: {
    labels: ['20/07 00:00', '21/07 00:00', '22/07 00:00', '22/07 00:00', '22/07 00:00'],
    datasets: [{
      label: 'Parte1',
      backgroundColor: '#284277',
      data: [7,8,9,10,11],
    },
    {
      label: 'Parte2',
      backgroundColor: '#487AF9',
      data: [1,2,3,4,5],
    },
    ]
  },
  options: {
    plugins: {
      title: {
        display: true,
        text: 'Desempenho dos anúncios',
      }
    },
    indexAxis: 'y',
    aspectRatio: 1.55,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
            color: '#000'
        }
      },
      x: {
        ticks: {
            color: '#000'
        }
      }
    }
  }
});

Chart.defaults.font.size = 16;