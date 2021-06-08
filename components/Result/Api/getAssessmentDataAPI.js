/**
 * Get Assessment Data API
 * @description Fetch the Assessment data
 * @author tharunp
 */

/* Import */
let APIUtility = require('../../APIUtility/APIUtility')

let getAssessmentData = async (queryParams, updateStateHandle) => {

    try {

        let requestStrucuture = {
            "endpoint": "getAssessment",
            "method": "GET",
            "headers": [],
            "queryParameters": queryParams
        }

        let assessmentFetch = await APIUtility.fireAPI(requestStrucuture)
        let assessmentProcessed = assessmentProcessor(assessmentFetch)
        
        
        if (updateStateHandle != null) {
            updateStateHandle(assessmentProcessed)
            return
        } else {
            return assessmentProcessed
        }

    } catch (error) {

        return { "data": null, "error": error }
    }
}

let assessmentProcessor = (assessmentResponse) => {
    
    /**
     * Process Assessment Data
     * 1. Check for Errors in Assessment Response
     * 2. Add only Payload to the response
     */

    try {

        /* 1. Check for Errors in Assessment Response */
        if (assessmentResponse.status != "success") {
            throw "Assessment Fetch Error"
        }

        /* 2. Add only Payload to the response */
        return { "data": assessmentResponse.payLoad, "error": null }

    } catch (error) {

        return { "data": null, "error": error }
    }
}

module.exports = getAssessmentData