document.getElementsByTagName('button')[0].addEventListener('click', function(){
  var xhr = new XMLHttpRequest()

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var result = JSON.parse(xhr.response)
      document.getElementById('demo').innerHTML = 'The population of ' + result.name + ' is ' + result.population
    }
  }

  xhr.open('GET', 'http://swapi.co/api/planets/2/', true)
  xhr.send()
})
