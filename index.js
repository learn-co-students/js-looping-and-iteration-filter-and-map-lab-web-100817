// Code your solution here:
function driversWithRevenueOver(ar, r) {
  return ar.filter(function (d) {return d.revenue > r})
  }

function driverNamesWithRevenueOver(ar, r) {
  return driversWithRevenueOver(ar, r).map(function (d) {
      return d.name;
  })
}

function exactMatch(ar, o) {
  return ar.filter(function (d) {return d[Object.keys(o)[0]] == Object.values(o)[0]})
}

function exactMatchToList(ar, o) {
  return exactMatch(ar, o).map(function (d) {
      return d.name;
    })
}
