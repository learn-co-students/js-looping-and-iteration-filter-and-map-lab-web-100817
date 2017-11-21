// Code your solution here:
function driversWithRevenueOver(arr, str){
  return arr.filter(function(driver){
    return driver.revenue > str;
  });
}

function driverNamesWithRevenueOver(arr, str){
  let newDrivers = []
  for (const driver of arr){
    if (driver.revenue > str){
      newDrivers.push(driver.name);
    }
  }
  return newDrivers;
}

function exactMatch(arr, attr){
  let key = Object.keys(attr)[0]
  let val = Object.values(attr)[0]
  return arr.filter(function(driver){
    return driver[key] === val;
  });
}

function exactMatchToList(arr, attr){
  let newDrivers = []
  let key = Object.keys(attr)[0]
  let val = Object.values(attr)[0]
  for (const driver of arr){
    if (driver[key] === val) {
      newDrivers.push(driver.name);
    }
  }
  return newDrivers;
}
