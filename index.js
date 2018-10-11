// Code your solution here:


function driversWithRevenueOver(array, rev) {
    return array.filter(function(x) {
        return x.revenue > rev;
    });
}

//  x here reps the new argument for the callback function

// in below functions, the argument is referred to as driver

function driverNamesWithRevenueOver(array, rev) {
    // apply function within a function - then uses map on a callback func
    return driversWithRevenueOver(array, rev).map(function(driver) {
        return driver.name;
    });
}

function exactMatch(array, jsObj) {
    return array.filter(function(driver) {
        //  key needs to be defined here - best via for loop
        for (const key in jsObj) {
            return driver[key] === jsObj[key];
        }
    }); 
}


function exactMatchToList(array, jsObj) {
    return exactMatch(array, jsObj).map(driver => driver.name)
} 
