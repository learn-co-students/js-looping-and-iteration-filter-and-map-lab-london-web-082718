// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
    const newArray = drivers.filter(driver => {
        return driver['revenue'] > revenue
    })
    return newArray;
}

function driverNamesWithRevenueOver(drivers, revenue) {
    const newArray = []
    drivers.filter(driver => {
        if (driver['revenue'] > revenue) {
            newArray.push(driver['name']);
        }
    })
    return newArray;
}

function exactMatch(drivers, object) {
    const newArray = [];
    const key = Object.keys(object);
    drivers.filter(driver => {
        if (driver[key] === object[key]) {
            newArray.push(driver);
        }
    })   
    return newArray;  
}

function exactMatchToList(drivers, object) {
    const newArray = [];
    const key = Object.keys(object);
    drivers.filter(driver => {
        if (driver[key] === object[key]) {
            newArray.push(driver['name']);
        }
    })   
    return newArray;  
}




