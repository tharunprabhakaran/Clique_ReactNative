/**
 * Get Attendance Data API
 * @description Fetch the attendance data for the Student
 * @author tharunp
 */

/* Import */
let APIUtility = require('../../APIUtility/APIUtility')
let AttendanceDataProcessor = require('../Utils/AttendanceDataProcessor')


let getAttendanceData = async ( updateStateHandle ) => {
    try {

        let requestStrucuture = {
            "endpoint": "getAttendance",
            "method": "GET",
            "headers": []
        }

        let attendanceFetch = await APIUtility.fireAPI(requestStrucuture)
        attendanceFetch = AttendanceDataProcessor(attendanceFetch)
        updateStateHandle(attendanceFetch.payLoad)

    } catch (error) {
        console.log("Error in Data Fetch -> ", error)
        throw error
    }
}

module.exports = getAttendanceData