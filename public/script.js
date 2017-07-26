// prewritten
const itemsList = document.querySelector('.itemsList');

function addListener(selector, eventName, callback) {
  document.querySelector(selector).addEventListener(eventName, callback)
}

function fetchData(url, callback) {
  var xhr = new XMLHttpRequest();

  xhr.addEventListener('load', function() {
    if (xhr.status === 200) {
      var response = JSON.parse(xhr.responseText);
      return callback(response);
    }
  });

  xhr.open('Post', url);
  xhr.send();
}

// specific

addListener('.inputSearchForm', 'keyup', function(event) {
  var initialSearch = event.target.value;
  console.log(initialSearch);
  var url = `search=${initialSearch}`;

  fetchData(url, function(response) {
    console.log(response)
    itemsList.innerHTML = response.map((itemOfResponse) => {
      return `
    <li>
      ${itemOfResponse}
    </li>
    `
    }).join('');
  });
});