/**
 * Get Subject Data API
 * @description Fetch the Subject data for the Student
 * @author tharunp
 */

/* Import */
let APIUtility = require('../../APIUtility/APIUtility')

let getSubjectData = async (queryParams, updateStateHandle) => {

    try {

        let requestStrucuture = {
            "endpoint": "getSubject",
            "method": "GET",
            "headers": [],
            "queryParameters": queryParams
        }

        let subjectFetch = await APIUtility.fireAPI(requestStrucuture)

        if (updateStateHandle != null) {
            updateStateHandle(subjectFetch.payLoad)
            return
        } else {
            return subjectFetch
        }

    } catch (error) {
        console.log("Error in Data Fetch -> ", error)
        throw error
    }
}

module.exports = getSubjectData