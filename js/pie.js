new Chart(document.getElementById("pie-chart"), {
    type: 'pie',
    data: {
      labels: ["Dev's Token (10M)", "Pre-sale (30M)", "Liquidity Pool (30M)", "Marketing (15M)", "Development (15M)"],
      datasets: [{
        label: "Percentage (in millions)",
        backgroundColor: ["#062a74", "#0940ae","#0c56e9","#3d7af5","#5188f6"],
        data: [10,30,30,15,15],
        borderColor: "rgba(0,0,0,0)"
      }]
    },
    options: {
      responsive: true,
      title: {
        display: true
      },
      legend: {
        labels: {
            fontColor: "white",
            fontSize: 14
        },
        
    }
    }
});