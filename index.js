
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function (object) {
    return object['revenue'] >= revenue;
  })
}


function driverNamesWithRevenueOver(drivers, revenue) {
  return drivers.filter(function (driver) {
    return driver['revenue'] >= revenue;
  }).map(function(driver) { return driver.name; });
}


function exactMatch(drivers, object) {
  return drivers.filter(function (driver) {
    for (const key in object) {
        if (object[key] === driver[key]) {
          return driver;
        }
      }
  });
}

function exactMatchToList(drivers, object) {
  return drivers.filter(function (driver) {
    for (const key in object) {
      return object[key] === driver[key]
    }
  }).map(function(driver) { return driver.name; });
}
