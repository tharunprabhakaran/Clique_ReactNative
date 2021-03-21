/**
 * Data PreProcess
 * @description Data Preprocessing for the Attendance Serivce
 * @author tharunp
 */

let AttendanceDataProcessor = (attendanceRawData) => {


    attendanceRawData.payLoad.forEach(element => {
        element.type = element.type.toString()

        /* 1. Make the First Character Upper Case - reason */
        element.type = element.type.substr(0, 1).toUpperCase() + element.type.substr(1)

        /* 2. Append Leave to the String - reason */
        element.type = element.type + " Leave"

        /* 3. Convert Date format - DD-MM-YYYY*/
        element.date = new Date(element.date).toLocaleDateString().replaceAll('/', '-')
    });

    return attendanceRawData

}

let UnitTest = {
    payLoad: [
        { "reason": "tharun", "date": "2020-12-12T00:00:00.000Z" }, { "reason": "tharun" }
    ]
}

//console.log(AttendanceDataProcessor(UnitTest))

module.exports = AttendanceDataProcessor