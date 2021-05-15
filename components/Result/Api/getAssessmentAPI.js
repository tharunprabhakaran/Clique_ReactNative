/**
 * Get Task Data API
 * @description Fetch the Task data for the Student
 * @author tharunp
 */

/* Import */
let APIUtility = require('../../APIUtility/APIUtility')
let ResultDataProcessor = require('../Utils/ResultDataProcessor')


let getResultData = async ( updateStateHandle ) => {
    try {

        let requestStrucuture = {
            "endpoint": "getResult",
            "method": "GET",
            "headers": []
        }

        let taskFetch = await APIUtility.fireAPI(requestStrucuture)
        taskFetch = ResultDataProcessor(taskFetch)
        updateStateHandle(taskFetch.payLoad)

    } catch (error) {
        console.log("Error in Data Fetch -> ", error)
        throw error
    }
}

module.exports = getResultData