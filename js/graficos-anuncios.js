const colors = {
    green: {
      default: "#87DE72",
      quarter: "rgba(255, 255, 255, 0.5)",
      zero: "rgba(255, 255, 255, 0)"
    },
    blue: {
      default: "#487AF9",
      quarter: "rgba(255, 255, 255, 0.5)",
      zero: "rgba(255, 255, 255, 0)"
    }
};

const ctx1 = document.getElementById('firstChart').getContext('2d');
const ctx2 = document.getElementById('secondChart').getContext('2d');

const gradient1 = ctx1.createLinearGradient(0, 0, 0, 400);
gradient1.addColorStop(0, colors.green.default);
gradient1.addColorStop(1, colors.green.zero);

new Chart(ctx1, {
  type: 'line',
  data: {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dec'],
    datasets: [{
      label: 'Acos',
      data: [12, 19, 3, 5, 2, 3, 8, 3, 6, 4, 5, 7],
      borderWidth: 2,
      tension: .5,
      backgroundColor: gradient1,
      fill: true,
    }]
  },
  options: {
    aspectRatio: 3,
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

const gradient2 = ctx2.createLinearGradient(0, 0, 0, 400);
gradient2.addColorStop(0, colors.blue.default); 
gradient2.addColorStop(1, colors.blue.zero); 

new Chart(ctx2, {
  type: 'line',
  data: {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dec'],
    datasets: [{
      label: 'Acos',
      data: [12, 19, 3, 5, 2, 3, 8, 3, 6, 4, 5, 7],
      borderWidth: 2,
      tension: .5,
      backgroundColor: gradient2, 
      fill: true,
    }]
  },
  options: {
    aspectRatio: 3,
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
