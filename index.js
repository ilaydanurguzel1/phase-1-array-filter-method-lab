// Code your solution here

//1
function findMatching(drivers,names) {
    return drivers.filter(function(driver)
    { return driver.toLowerCase() === names.toLowerCase() });
  };

// findMatching(drivers,"Bobby");
// findMatching(drivers,"Sammy");



//2
function fuzzyMatch(drivers,names) {
    return drivers.filter(function(driver)
    { return driver.toLowerCase().substring(0, names.length) === names.toLowerCase() });
  };



//3
function matchName(drivers,arrg) {
    return drivers.filter(function(driver)
    {return driver.name===arrg});
  };



