const driversWithRevenueOver = (drivers, revenue) => drivers.filter(driver => driver.revenue > revenue)

const driverNamesWithRevenueOver = (drivers, revenue) => driversWithRevenueOver(drivers, revenue).map(driver => driver.name)

const exactMatch = (drivers, condition) =>
    drivers.filter(driver => {
        let matches = false;

        for (const key in condition) {
            matches = driver[key] === condition[key];
        }

        return matches;
    })

const exactMatchToList = (drivers, condition) => exactMatch(drivers, condition).map(driver => driver.name)

// const drivers = [
//     { name: 'Sally',   revenue: 400 },
//     { name: 'Annette', revenue: 200 },
//     { name: 'Jim',     revenue: 150 }
// ]

// exactMatch(drivers, { name: 'Jim'})

// [{ name: 'Jim',     revenue: 150 }]

