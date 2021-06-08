/**
 * Get Subject Data API
 * @description Fetch the Subject data for the Student
 * @author tharunp
 */

/* Import */
let APIUtility = require('../../APIUtility/APIUtility');

let getSubjectData = async (queryParams, updateStateHandle) => {
  try {
    let requestStrucuture = {
      endpoint: 'getSubject',
      method: 'GET',
      headers: [],
      queryParameters: queryParams,
    };

    /* Fire Subject API */
    let subjectFetch = await APIUtility.fireAPI(requestStrucuture);

    /* Process Response */
    let processedSubject = subjectProcessor(subjectFetch);

    /* Handle Processed Data */
    if (updateStateHandle != null) {
      updateStateHandle(processedSubject);
      return;
    } else {
      return processedSubject;
    }
  } catch (error) {
    return {data: null, error: error};
  }
};

let subjectProcessor = (subjectResponse) => {
  /**
   * Process Subject Data
   * 1. Check for Errors in Subject Response
   * 2. Add only Payload to the response
   */
  try {
    /* 1. Check for Errors in Subject Response */
    if (subjectResponse.status != 'success') {
      throw 'Subject Fetch Error';
    }

    /* 2. Add only Payload to the response */
    return {data: subjectResponse.payLoad, error: null};
  } catch (error) {
    return {data: null, error: error};
  }
};

module.exports = getSubjectData;
