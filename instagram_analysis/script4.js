const ctx = document.getElementById('followersChart').getContext('2d');

new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'Followers',
      data: [8000, 8500, 9000, 9800, 11000, 12340],
      borderColor: '#3b82f6',
      backgroundColor: 'rgba(59, 130, 246, 0.2)',
      tension: 0.3,
      fill: true,
      pointRadius: 4,
      pointBackgroundColor: '#3b82f6'
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: false
      }
    }
  }
});
