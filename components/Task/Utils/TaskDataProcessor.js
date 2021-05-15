/**
 * Data PreProcess
 * @description Data Preprocessing for the Attendance Serivce
 * @author tharunp
 */

let TaskDataProcessor = (taskRawData) => {

    taskRawData.payLoad.forEach(element => {
        element.title = element.title.toString()

        /* 1. Make the First Character Upper Case - Title */
        element.title = element.title.substr(0, 1).toUpperCase() + element.title.substr(1)

        /* 2. Convert Date format - DD-MM-YYYY*/
        element.timeStamp = new Date(element.timeStamp).toLocaleDateString().replaceAll('/', '-')

        /* 3. Make the First Character Upper Case - Author */
        element.authorRole = element.authorRole.substr(0, 1).toUpperCase() + element.authorRole.substr(1)
        

    });

    return taskRawData

}


module.exports = TaskDataProcessor