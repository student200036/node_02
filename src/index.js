const chalk = require('chalk')
const cities = require('cities')

console.log(chalk.bgRed('Hello YSE!!!'))
console.log(chalk.green('Hello YSE!!!'))
console.log(chalk.blue('Hello YSE!!!'))

const lat = process.aray[3]
const lng = process.aray[2]

if(lat && lng) {
    let city = cities.gps_lookup(lat,lng)
    console.log(city)
    //console.log(cities.gps_lookup(lat,lng))
}