// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
	return drivers.filter (function (driver) {
		return driver.revenue > revenue
	})
}

function driverNamesWithRevenueOver(drivers, revenue) {
	return driversWithRevenueOver(drivers, revenue).map (function (driver) {
		if (driver.revenue > revenue) {
			return driver.name
		}
	})
}

function exactMatch(drivers, attribute) {
	let attributeKey = Object.keys(attribute)[0]
	return drivers.filter(function(driver) {
		return driver[attributeKey] === attribute[attributeKey]
	})
}

function exactMatchToList(drivers, attribute) {
	return exactMatch(drivers, attribute).map (function (driver) {
		return driver.name
	})
}
