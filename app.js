(function() {
  //
  const appId = '0a5003614cb77bec468c5d24c5e54036';
  const input = document.querySelector('.weather-input');
  const btn = document.querySelector('.weather-btn');
  const list = document.querySelector('.weather-list');

  // Changes our starting input value
  input.value = "Nashville";

  // Creates a function to run later
  function searchWeather(city) {
    list.innerHTML = '';

    fetch('http://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=' + appId)
      .then(function(response) { return response.json() })
      .then(function(results) {
        // Take our list of DATA and turn it into HTML the user can see
        results.list.forEach(function(result) {
          const humidity = result.main.humidity + '%';
          const element = document.createElement('li');
          // Set HTML class for styling with CSS
          element.classList.add('weather-list-item');
          // Set the height for each individual bar
          element.style.height = humidity;
          // Set the text % for the user to see
          element.innerHTML = humidity;

          // Put the current weather result into our list shown to the user
          list.appendChild(element);
        });
      });
  }

  // Listen for button to be clicked
  btn.addEventListener('click', function() {
    // Look up value of input box
    const city = input.value;

    // Search for new results
    searchWeather(city);
  });

  // Search weather for starting input value
  searchWeather(input.value);
})();
