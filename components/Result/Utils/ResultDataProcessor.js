/**
 * Data PreProcess
 * @description Data Preprocessing for the Result Serivce
 * @author tharunp
 */

/* Imports */
var getSubjectData = require('../Api/getSubjectAPI')
let ResultDataProcessor = async (resultRawData) => {

    try {

        /* Add Result ID */

        let resultProcessedData =  resultRawData.payLoad.map( async (resultElements) => {

            let resultObject = resultElements.result.map( async (result) => {


                //let subjectDataFetch = await getSubjectData({ "_id": result.subjectID })

                // /* Check Subject Size */
                // if (subjectDataFetch.payLoad.length == 0) {
                //     result["subjectName"] = "Undefined Subject"
                // } else {
                //     result["subjectName"] = subjectDataFetch.payLoad[0].name
                // }

                return result

            })

            resultElements["result"] = resultObject
            return resultElements
        })


        return resultProcessedData
    } catch (error) {

        return resultProcessedData
    }


}


module.exports = ResultDataProcessor