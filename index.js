// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

function findMatching(drivers, name) {
  return drivers.filter(driver => driver.toUpperCase() === name.toUpperCase());
}

console.log(findMatching(drivers, 'Bobby'));

function fuzzyMatch(drivers, name) {
    return drivers.filter(driver => driver.slice(0,2) === name.slice(0,2))
}

function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name)
  }