// Code your solution here:

function driversWithRevenueOver(array, revenue) {
    return array.filter(driver => driver.revenue > revenue)
}


// This function works the same way as driversWithRevenueOver(). The difference is that it returns an array of strings representing the name of each driver who has a revenue greater than the specified amount.
function driverNamesWithRevenueOver(array, revenue) {
    console.log(array)
    return array.filter(driver => driver.revenue > revenue).map(driver => driver.name)
}

// This function takes an array of driver objects as the first argument and a JavaScript object that specifies an attribute and corresponding value. 
function exactMatch(array, object) {
    return array.filter(function(driver) {
        for (const key in object) {
        return driver[key] == object[key];
        }
    })
}

// This function works the same way as the exactMatch() function, except that instead of returning an array of driver objects, it returns an array of strings with each element in the array corresponding to the matching driver's name.
function exactMatchToList(array, object) {
    return exactMatch(array, object).map(driver => driver.name)
}

