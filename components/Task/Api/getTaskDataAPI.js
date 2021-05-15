/**
 * Get Task Data API
 * @description Fetch the Task data for the Student
 * @author tharunp
 */

/* Import */
let APIUtility = require('../../APIUtility/APIUtility')
let TaskDataProcessor = require('../Utils/TaskDataProcessor')


let getTaskData = async ( updateStateHandle ) => {
    try {

        let requestStrucuture = {
            "endpoint": "getTask",
            "method": "GET",
            "headers": []
        }

        let taskFetch = await APIUtility.fireAPI(requestStrucuture)
        taskFetch = TaskDataProcessor(taskFetch)
        updateStateHandle(taskFetch.payLoad)

    } catch (error) {
        console.log("Error in Data Fetch -> ", error)
        throw error
    }
}

module.exports = getTaskData