var request = new XMLHttpRequest();

request.open('GET', 'https://coronavirus-tracker-api.herokuapp.com/all', true)

request.onload = function() {
  let data = JSON.parse(this.response);
  
  function optionsRender(data){
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

    return options
  }

  appendCountryInfo(optionsRender(data.confirmed), 'description_confirmed');
  appendCountryInfo(optionsRender(data.deaths), 'description_deaths');

  let cases = new ApexCharts(document.querySelector("#confirmed"), optionsRender(data.confirmed));
  let deaths = new ApexCharts(document.querySelector("#deaths"), optionsRender(data.deaths));

  cases.render();
  deaths.render();
}

request.send()
