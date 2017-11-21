// Code your solution here:
function driversWithRevenueOver(driver, revenue) {
  greaterRevenue = []
  for (const element of driver) {
    if (element.revenue > revenue) {
      greaterRevenue.push(element);
    }
  }
  return greaterRevenue;
}

function driverNamesWithRevenueOver(driver, revenue) {
  greaterRevenue = []
  for (const element of driver) {
    if (element.revenue > revenue) {
      greaterRevenue.push(element.name);
    }
  }
  return greaterRevenue;
}

function exactMatch (drivers, matcher) {
  return drivers.filter(function (driver) {
    let matches = false;

    for (const key in matcher) {
      matches = driver[key] === matcher[key];
    }

    return matches;
  });
}

function exactMatchToList (drivers, matcher) {
  return exactMatch(drivers, matcher)
    .map(function (driver) {
      return driver.name;
    });
}
//
// exactMatchToList() - This function works the same way as the exactMatch() function, except that instead of returning an array of driver objects, it returns an array of strings with each element in the array corresponding to the matching driver's name. For example, exactMatchToList(drivers, { revenue: 2000 }) will return ['Sammy'], as Sammy is the name of the matching driver object.
