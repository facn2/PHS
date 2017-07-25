var inputSearch = document.querySelector('.inputSearchForm')

inputSearch.addEventListener('submit', searchJSON)

function searchJSON(event){
   event.preventDefault();
   var initialSearch = event.target[0].value;
   
}
