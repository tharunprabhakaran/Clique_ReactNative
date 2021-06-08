/**
 * Data PreProcess
 * @description Data Preprocessing for the Result Serivce
 * @author tharunp
 */

/* Imports */
let getSubjectData = require('../Api/getSubjectAPI')
let getAssessmentData = require('../Api/getAssessmentDataAPI')
let ResultDataProcessor = async (resultRawData) => {

    try {

        /**
         * Processing Steps
         * 1. Add assessment Name to the Result Elements
         * 2. Convert Date to Human Readable
         * 3. Iterate resultObjects and update Subject ID's
         *  */
        let resultProcessedData = resultRawData.payLoad.map(async (resultElement) => {


            /* 1. Add Assessment Name */
            let assessmentData = await getAssessmentData({ "_id": resultElement.assesmentID })

            /* Handle Assessment Response */
            if (assessmentData.error == null && assessmentData.data.length > 0 ) {
                resultElement["assessmentName"] = assessmentData.data[0].title
            }
            else {
                resultElement["assessmentName"] = "Undefined Subject"
            }

            /* 2. Convert Data to Human Readable format */
            resultElement["postedDate"] = new Date(resultElement["postedDate"]).toLocaleDateString().replaceAll('/', '-')

            /* 3.  Iterate resultObjects and update Subject ID's */
            let resultObjects = resultElement.result.map(async (resultObject) => {

                /* Add Subject Name */
                let subjectDataFetch = await getSubjectData({ "_id": resultObject.subjectID })

                /* Handle Subject Response */
                if (subjectDataFetch.error == null && subjectDataFetch.data.length > 0 ) {
                    resultObject["subjectName"] = subjectDataFetch.data[0].name
                }
                else {
                    resultObject["subjectName"] = "Undefined Subject"
                }

                return resultObject

            })

            return resultElement

        })

        return Promise.all(resultProcessedData)

    } catch (error) {

        return resultProcessedData
    }
    
}


module.exports = ResultDataProcessor