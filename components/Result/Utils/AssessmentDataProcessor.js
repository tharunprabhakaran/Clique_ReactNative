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
         *  */ 
        let resultProcessedData =  resultRawData.payLoad.map(  async (resultElement) => {

            
            resultElement["assesmentName"] = "TEST ASSESSEMNT"
            let assessmentData = await getAssessmentData({ "_id": resultElement.assesmentID })
            console.log("-- ASSESSMENT --")
            console.log(assessmentData)
            console.log("------------")
            return resultElement
        //     // let resultObject = resultElements.result.map( async (result) => {
        //     //     //let subjectDataFetch = await getSubjectData({ "_id": result.subjectID })
        //     //     // /* Check Subject Size */
        //     //     // if (subjectDataFetch.payLoad.length == 0) {
        //     //     //     result["subjectName"] = "Undefined Subject"
        //     //     // } else {
        //     //     //     result["subjectName"] = subjectDataFetch.payLoad[0].name
        //     //     // }
        //     //     return result
        //     // })
        //     resultElements["result"] = resultObject
        //     return resultElements
        })

        return resultProcessedData

    } catch (error) {

        return resultProcessedData
    }


}


module.exports = ResultDataProcessor