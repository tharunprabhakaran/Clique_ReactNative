/**
 * API Probe 
 * @description 
 * @author tharunp
 */

/* Import */
let APIUtility = require('./APIUtility')

let APIFacade = async (componentName, dataState, setDataState) => {

    let API = APIUtility.Initiate()

    switch (componentName) {

        case "Home":
            console.log("Internal Home")
            break

        case "Task":
           console.log("Internal Task")
           break

        case "Result":
           console.log("Internal Result")
           break

        case "Attendance": 
            console.log("Internal Attendance")
            let Req = {
                'endpoint': "getAttendance",
                'method': "get",
                'headers': [],
                'body': {}
            }

            let attendanceData = await API.fireAPI(Req)
            console.log(attendanceData)
            return attendanceData
            //setDataState(await attendanceData)
            break;


    }

}

module.exports = APIFacade