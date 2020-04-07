var request = new XMLHttpRequest();

request.open('GET', 'https://coronavirus-tracker-api.herokuapp.com/all', true)

request.onload = function() {
  let data = JSON.parse(this.response);
  let options = {
    chart: {
      type: 'line'
    },
    series: [
      { name: 'Brasil', data: seriesBy('Brazil', data)},
      { name: 'Itália', data: seriesBy('Italy', data)},
      { name: 'EUA', data: seriesBy('US', data)},
      { name: 'Alemanha', data: seriesBy('Germany', data)},
      { name: 'Espanha', data: seriesBy('Spain', data)}
    ],
    xaxis: {
      categories: countDays(seriesBy('Brazil', data).length)
    }
  }

  appendCountryInfo(options);

  let chart = new ApexCharts(document.querySelector("#chart"), options);

  chart.render();
}

request.send()
