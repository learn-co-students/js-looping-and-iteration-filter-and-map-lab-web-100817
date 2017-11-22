// Code your solution here:

function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter((driver) => {
    return driver.revenue > revenue;
  })
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map((driver) => {
    return driver.name;
  })
}

function exactMatch(drivers, driverOb) {
  return drivers.filter((driver) => {
    for (const key in driverOb) {
      return driver[key] === driverOb[key];
    }
  })
}

function exactMatchToList(drivers, driverOb) {
  obs = exactMatch(drivers, driverOb);
  return obs.map((driver) => {
    return driver.name;
  })
}