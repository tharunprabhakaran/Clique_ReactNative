/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */

/* Timetable Component */

/* Global React Imports */
import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

/* Custom Imports */
let TimeTableElement = require('./TimeTableElement');
let DataSelector = require('./DateSelector');
let TimeTableAPI = require('./Api/TimeTableAPI');

/* Constants */
const daysNameMap = {
  0: 'sunday',
  1: 'monday',
  2: 'tuesday',
  3: 'wednesday',
  4: 'thursday',
  5: 'friday',
  6: 'saturday',
};

let TimeTable = () => {
  /* Timetable State  */
  let [timeTableData, updateTimeTableData] = useState({
    fullTimeTable: [],
    todayTimeTable: [],
  });

  /* Component Startup */
  useEffect(() => {
    let getTimeTable = async () => {
      try {
        let timeTableResponse = await TimeTableAPI.getTimeTable();
        if (timeTableResponse.error || timeTableResponse.data.length === 0) {
          throw 'Error in Data Fetch : ' + timeTableResponse.error;
        } else {
          /* Update Full Timetable */
          updateTimeTableData({
            fullTimeTable: timeTableResponse.data,
            todayTimeTable:
              timeTableResponse.data[0].timeTable[
                daysNameMap[new Date().getDay()]
              ],
          });
        }
      } catch (error) {
        updateTimeTableData([]);
      }
    };
    getTimeTable();
  }, []);

  const renderItem = ({item}) => {
    return (
      <TimeTableElement
        timeTableObject={item}
        timeTable={timeTableData}
        updateTimeTable={updateTimeTableData}
      />
    );
  };

  /* Timeline Generation */
  return (
    <View
      style={{
        justifyContent: 'center',
        alignContent: 'center',
        flex: 1,
        flexDirection: 'column',
      }}>
      <DataSelector
        timeTable={timeTableData}
        updateTimeTable={updateTimeTableData}
      />
      <View
        style={{
          marginHorizontal: '5%',
          flex: 8,
        }}>
        <View>
          <Text
            style={{
              fontFamily: 'AvenirNext-UltraLight',
              fontSize: 20,
              fontWeight: '200',
              padding: '3%',
              color: '#F68E61',
            }}>
            Today's TimeTable
          </Text>
        </View>

        <FlatList
          data={timeTableData.todayTimeTable}
          renderItem={renderItem}
          keyExtractor={(item) => item._id}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

module.exports = TimeTable;
