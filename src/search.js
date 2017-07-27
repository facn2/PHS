const worldCup2014 = require(`./worldCup2014.json`);

const searchfunc = (partialSearch) => {
  //console.log("We are looking for: " + partialSearch);
  var resultArr = [];
  var resultObj = {};
  var counter = 0;
  food.forEach(function(obj) {
    let name = obj.nm.toLowerCase();
    if ((name.indexOf(partialSearch.toLowerCase()) === 0) && counter < 10 ) {
      //console.log(JSON.stringify(name));
      resultArr.push(name);
      //resultObj. = JSON.stringify(name);
      counter ++;
    }
  });
  return resultArr;
}

module.exports = {searchfunc};
