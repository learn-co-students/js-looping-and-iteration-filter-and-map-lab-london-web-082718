function driversWithRevenueOver(driver, revenue){
    return driver.filter(function(driver){
        return driver.revenue > revenue;
    });
}

function driverNamesWithRevenueOver (drivers, revenue) {
    return driversWithRevenueOver(drivers, revenue)
      .map(function (driver) {
        return driver.name;
      });
  }

function exactMatch(driver, attribute){
    return driver.filter(function(driver){
        let matches;
        for(const key in attribute){
            matches = driver[key] === attribute[key];
        }
        return matches;
    });
}

function exactMatchToList (drivers, matcher) {
    return exactMatch(drivers, matcher)
      .map(n => n.name);
  }