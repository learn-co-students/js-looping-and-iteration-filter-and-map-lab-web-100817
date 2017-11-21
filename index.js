function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver) {
    return driver["revenue"] > revenue
 })
}

function driverNamesWithRevenueOver(drivers, revenue) {
  driverArray = driversWithRevenueOver(drivers, revenue)
  return driverArray.map(function(driver){
    return driver.name
  })
}

function exactMatch(drivers, attributes) {
  return drivers.filter(function(driver){
    let driverList = []
    for (const key in attributes) {
      driverList = driver[key] === attributes[key]
    }
    return driverList
  })
}

function exactMatchToList(drivers, attributes){
  driverList = exactMatch(drivers, attributes)
  return driverList.map(function(driver){
    return driver.name
  })
}
