Array.prototype.last = function() {
  return this[this.length - 1];
}

function seriesBy(country, data){
  let array = [];

  for (var [key, value] of Object.entries(data.locations)) {
    if(value.country == country){
      for (var [key, value] of Object.entries(value.history)) {
        if (value > 0){
          array.push(value)
        }
      }
    }  
  }

  return array
}

function countDays(data) {
  let array = [];
  for (var index = 1; index <= data; index++) {
    array.push(index)
  }
  
  return array
}


function appendCountryInfo(options, tag_append){
  for (var [key, value] of Object.entries(options.series)) {
    var tag = document.createElement("div");
    var text = document.createTextNode(`
      ${value['name']}: ${options['xaxis']['categories'].length} 
      dias (${value['data'][options['xaxis']['categories'].length - 1]})
    `);
    tag.appendChild(text);
    var element = document.getElementById(tag_append);
    element.appendChild(tag);
  }
}
  