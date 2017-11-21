// Code your solution here:
function driversWithRevenueOver (collection, revenue) {
  return collection.filter(function (employee) {
    return employee.revenue >= revenue
  })
}

function driverNamesWithRevenueOver(collection, revenue) {
  let newCollection
  newCollection = driversWithRevenueOver(collection, revenue)
  return newCollection.map(function (highRollers) {
    return highRollers.name
  })
}

function exactMatch (collection, attribute) {
  let attr = Object.keys(attribute)
  // debugger
  return collection.filter(function (driverName) {
    return driverName[attr] === attribute[attr]
  })
}


function exactMatchToList (collection, attribute) {
  let matches = exactMatch(collection, attribute)
  return matches.map(function (driver) {
    return driver.name
  })

}
