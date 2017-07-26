// prewritten

function addListener(selector, eventName, callback) {
  document.querySelector(selector).addEventListener(eventName, callback)
}

function fetchData(url, callback){
  var xhr = new XMLHttpRequest();

  xhr.addEventListener('load', function() {
    if (xhr.status === 200) {
      var response = JSON.parse(xhr.responseText);
      return callback(response);
    }
  });

  xhr.open('GET', url);
  xhr.send();
}

// specific

addListener('.inputSearchForm', 'submit', function(event){
  event.preventDefault();
	// var initialSearch = event.target[0].value;
	var worldCup2014 = 'http://localhost:3000/worldCup2014notathing';

	fetchData(worldCup2014, function(response) {
		console.log(response);
    
	});
});