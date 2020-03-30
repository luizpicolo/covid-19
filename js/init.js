var request = new XMLHttpRequest();

request.open('GET', 'https://corona.lmao.ninja/v2/historical', true)

request.onload = function() {
  let data = JSON.parse(this.response);
  let options = {
    chart: {
      type: 'line'
    },
    series: [
      { name: 'Brasil', data: seriesBy('brazil', data)},
      { name: 'Itália', data: seriesBy('italy', data)},
      { name: 'EUA', data: seriesBy('usa', data)},
      { name: 'Alemanha', data: seriesBy('germany', data)},
      { name: 'Espanha', data: seriesBy('spain', data)}
    ],
    xaxis: {
      categories: countDays(seriesBy('brazil', data).length)
    }
  }

  appendCountryInfo(options);

  let chart = new ApexCharts(document.querySelector("#chart"), options);

  chart.render();
}

request.send()
