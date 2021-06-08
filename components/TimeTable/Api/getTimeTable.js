/**
 * Get TimeTable Data API
 * @description Fetch the TimeTable data for the Student
 * @author tharunp
 */

/* Import */
let APIUtility = require('../../APIUtility/APIUtility');

let getTimeTableData = async (queryParams, updateStateHandle) => {
  try {
    let requestStructure = {
      endpoint: 'getTimeTable',
      method: 'GET',
      headers: [],
      queryParameters: queryParams,
    };

    /* Fire Subject API */
    let TimeTableFetch = await APIUtility.fireAPI(requestStructure);

    /* Process Response */
    let processedTimeTable = timetableProcessor(TimeTableFetch);

    /* Handle Processed Data */
    if (updateStateHandle != null) {
      updateStateHandle(processedTimeTable);
      return;
    } else {
      return processedTimeTable;
    }
  } catch (error) {
    return {data: null, error: error};
  }
};

let timetableProcessor = (timetableResponse) => {
  /**
   * Process TimeTable Data
   * 1. Check for Errors in Timetable Response
   * 2. Add only Payload to the response
   */
  try {
    /* 1. Check for Errors in Subject Response */
    if (timetableResponse.status !== 'success') {
      throw 'TimeTable Fetch Error';
    }

    /* 2. Add only Payload to the response */
    return {data: timetableResponse.payLoad, error: null};
  } catch (error) {
    return {data: null, error: error};
  }
};

module.exports = getTimeTableData;
