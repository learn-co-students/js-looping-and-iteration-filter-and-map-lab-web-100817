// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  const answer = drivers.filter(function(driver) {
    return driver.revenue > revenue;
  })
  return answer;
}

function driverNamesWithRevenueOver(drivers, revenue) {
  const filtered = driversWithRevenueOver(drivers, revenue);
  const names = filtered.map(function(obj) {
    return obj.name;
  })
  return names;
}

function exactMatch(drivers, obj) {
  const key = Object.keys(obj)[0];
  const answer = drivers.filter(function(driver) {
    return driver[key] === obj[key];
  })
  return answer;
}

function exactMatchToList(drivers, obj) {
  const matched = exactMatch(drivers, obj);
  const answer = matched.map(function(driver) {
    return driver.name;
  })
  return answer;
}
