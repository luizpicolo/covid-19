var request = new XMLHttpRequest();

request.open('GET', 'https://corona.lmao.ninja/v2/historical', true)

request.onload = function() {
  let data = JSON.parse(this.response);
  let options = {
    chart: {
      type: 'line'
    },
    series: [
      { name: 'Brasil', data: series_by('brazil', data)}, 
      { name: 'Itália', data: series_by('italy', data)},
      { name: 'Estados Unidos', data: series_by('usa', data)},
      { name: 'Alemanha', data: series_by('germany', data)},
      { name: 'Espanha', data: series_by('spain', data)}
    ],
    xaxis: {
      categories: countDays(series_by('brazil', data).length)
    }
  }
  
  appendCountryInfo(options);
  
  let chart = new ApexCharts(document.querySelector("#chart"), options);
  
  chart.render();
}

request.send()