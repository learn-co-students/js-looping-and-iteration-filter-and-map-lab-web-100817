// Code your solution here:

function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(driver => driver.revenue > revenue);
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map(driver => driver.name);
}

function exactMatch(drivers, attribute) {
  return drivers.filter(driver => driver[Object.keys(attribute)[0]] === Object.values(attribute)[0]);å
}

function exactMatchToList(drivers, attribute) {
  return exactMatch(drivers, attribute).map(driver => driver.name);
}
