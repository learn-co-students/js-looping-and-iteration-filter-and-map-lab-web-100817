function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter( function (driver) {
    return driver.revenue > revenue
  })
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map( function (driver) {
    return driver.name
  })
}

function exactMatch(driver, obj) {
  let key = Object.keys(obj)
  return driver.filter( function (elem) {
    return elem[key] === obj[key]
  })
}

function exactMatchToList(driver, obj) {
  return exactMatch(driver, obj).map(function (elem) {
    return elem.name
  })
}
