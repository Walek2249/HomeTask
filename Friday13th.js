let startDate = new Date("01/01/2000")
let endDate = new Date()
const getDay = 5
const getDate = 13

let numberOfDates = 0

function getDays() {
    while (startDate < endDate) {
        if (startDate.getDate() === getDate)
        if (startDate.getDay() === getDay) {
          numberOfDates++
        }
        startDate.setDate( startDate.getDate() + 1 )
    }

    return numberOfDates
}

console.log(getDays())