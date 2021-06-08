/**
 * Get Task Data API
 * @description Fetch the Task data for the Student
 * @author tharunp
 */

/* Import */
let APIUtility = require('../../APIUtility/APIUtility');
let ResultDataProcessor = require('../Utils/ResultDataProcessor');

let getResultData = async (updateStateHandle) => {
  try {
    let requestStructure = {
      endpoint: 'getResult',
      method: 'GET',
      headers: [],
    };

    var resultFetch = await APIUtility.fireAPI(requestStructure);

    /* Check for API Response Status */
    if (
      resultFetch.status !== 'success' ||
      resultFetch.payLoadType != 'array'
    ) {
      throw 'Failure response from server';
    }

    /* Process Data */
    resultFetch = await ResultDataProcessor(resultFetch);

    /* Update State */
    updateStateHandle(resultFetch);
  } catch (error) {
    throw error;
  }
};

module.exports = getResultData;
