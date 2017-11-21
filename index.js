// Code your solution here:
function driversWithRevenueOver(array,revenue){
  drivers = array.filter(function(driver){
    return driver['revenue']>parseInt(revenue)
  })
  return drivers
}

function driverNamesWithRevenueOver(array,revenue){
  drivers=[]
  array.filter(function(driver){
    if (driver['revenue']>parseInt(revenue)){
      return drivers.push(driver['name'])
    }
  })
  return drivers
}

function exactMatch(array,object){
  drivers = []
  if (Object.keys(object)=='revenue'){
    array.filter(function(driver){
      if (driver['revenue']===object['revenue']){
        return drivers.push(driver)
      }
    })
  } else {
      array.filter(function(driver){
      if (driver['name']===object['name']){
        return drivers.push(driver)
      }
    })
  }
  return drivers
}

function exactMatchToList(array,object){
  drivers = []
  if (Object.keys(object)=='revenue'){
    array.filter(function(driver){
      if (driver['revenue']===object['revenue']){
        return drivers.push(driver['name'])
      }
    })
  } else {
      array.filter(function(driver){
      if (driver['name']===object['name']){
        return drivers.push(driver['name'])
      }
    })
  }
  return drivers
}
