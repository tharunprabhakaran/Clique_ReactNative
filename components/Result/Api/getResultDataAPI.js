/**
 * Get Task Data API
 * @description Fetch the Task data for the Student
 * @author tharunp
 */

/* Import */
let APIUtility = require('../../APIUtility/APIUtility')
let ResultDataProcessor = require('../Utils/ResultDataProcessor')


let getResultData = async (updateStateHandle) => {
    try {

        let requestStrucuture = {
            "endpoint": "getResult",
            "method": "GET",
            "headers": []
        }

        var resultFetch = await APIUtility.fireAPI(requestStrucuture)

        /* Check for API Respons Status */
        if (resultFetch.status != "success" || resultFetch.payLoadType != "array") {
            throw "Failure response from server"
        }

        /* Process Data */
        resultFetch = await ResultDataProcessor(resultFetch)

        //console.log(resultFetch.payLoad[0].result)

        /* Update State */
        updateStateHandle(resultFetch.payLoad)

    } catch (error) {
        console.log("Error in Data Fetch -> ", error)
        throw error
    }
}

module.exports = getResultData