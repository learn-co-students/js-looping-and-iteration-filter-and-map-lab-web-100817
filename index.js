// Code your solution here:
function driversWithRevenueOver(array, revenue){
  return array.filter(function (driver) {return driver.revenue > revenue})
}

function driverNamesWithRevenueOver(array, revenue){
  let driver = array.filter(function (driver){
    return driver.revenue > revenue
  })
  return driver.map(function (x) {
    return x.name
  })
}

function exactMatch(array, obj){
  let key = Object.keys(obj)[0]
  let value = Object.values(obj)[0]
  return array.filter(function (driver) {return driver[key] === value})
}

function exactMatchToList(array, obj){
  let key = Object.keys(obj)[0]
  let value = Object.values(obj)[0]
  let list = array.filter(function (driver) {return driver[key] === value})
  return list.map(function (driver){ return driver.name })
}
