// Code your solution here:
function driversWithRevenueOver(driver, revenue){
     const array = driver.filter(d => d.revenue > revenue)
     return array
}

function driverNamesWithRevenueOver(driver, revenue){
    const arr2 = driversWithRevenueOver(driver, revenue)
    return arr2.map(d => d.name)
}

function exactMatch(driver, obj ){
    
    return driver.filter(function(d){
        let arr
        for (const key in obj) {
        arr =  d[key] === obj[key]
    }
    return arr
})
}

function exactMatchToList (driver, obj) {
   const list = exactMatch(driver, obj)
   return list.map(d => d.name)
}

