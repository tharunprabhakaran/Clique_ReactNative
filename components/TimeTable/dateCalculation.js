
/* Dates */

// 0 - Sunday
// 1 - Monday
// 2 - Tuesday
// 3 - Wednesday
// 4 - Thursday
// 5 - Friday
// 6 - Saturday

// 1. Find Starting Data
//     1. Starting Date = currentDate - currentDate.getDay()

// 2. Find Ending Date
//     2. Ending Date = currentDate + (6 - currentDate)

/* Date to Day */
// let days = new Array(6)
// days[0]
let days = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
}

/* Simulate Today - Sunday */
orgi = new Date()
currentDate = new Date() 
//currentDate.setDate(orgi.getDate()-2)//Saturday
startingDate = new Date()
startingDate.setDate(currentDate.getDate() - currentDate.getDay())
endingDate = new Date()
endingDate.setDate(currentDate.getDate() + (6 - currentDate.getDay()))

