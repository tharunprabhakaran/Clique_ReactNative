/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

/* Constants */
const daysFullNameMap = {
  0: 'sunday',
  1: 'monday',
  2: 'tuesday',
  3: 'wednesday',
  4: 'thursday',
  5: 'friday',
  6: 'saturday',
};

const daysNameMap = {
  0: 'Sun',
  1: 'Mon',
  2: 'Tue',
  3: 'Wed',
  4: 'Thu',
  5: 'Fri',
  6: 'Sat',
};

let dateElement = (props) => {
  /* Selected Prop */
  let selectedDate = props.selectedDate;

  /* Update Selected Day Prop */
  let updateSelectedDay = props.updateSelectedDay;

  /* TimeTable Prop */
  let timeTable = props.timeTable;
  let updateTimeTable = props.updateTimeTable;

  /* Date Prop */
  let date = props.date;
  let day = props.day;

  /* Process Day and Date */
  let dayName = daysNameMap[day];
  if (typeof date === 'object' && date != null) {
    date = date.getDate();
  }

  /* Default Colors */
  let overlayColor = 'rgba(255, 255, 255, 0.2)';
  let dateColor = '#F1F1F1';
  let dayColor = '#F1F1F1';
  let overLaySize = '0%';

  /* Selected Flow */
  if (selectedDate === day) {
    dateColor = '#3B3B3B';
    overlayColor = 'rgba(255, 255, 255, 0.7)';
    overLaySize = '4%';
  }

  /* Return JSX */
  return (
    <TouchableOpacity
      onPress={() => {
        updateSelectedDay(day);
        updateTimeTable({
          fullTimeTable: timeTable.fullTimeTable,
          todayTimeTable:
            timeTable.fullTimeTable[0].timeTable[daysFullNameMap[day]],
        });
      }}
      style={{
        flex: 1,
        flexDirection: 'column',
      }}>
      <View
        style={{
          flex: 2,
          alignContent: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          borderRadius: 100,
          margin: '10%',
          padding: overLaySize,
        }}>
        <View
          style={{
            flex: 1,
            alignContent: 'center',
            justifyContent: 'center',
            backgroundColor: overlayColor,
            borderRadius: 100,
            margin: overLaySize,
          }}>
          <Text
            style={{
              fontSize: 10,
              textAlign: 'center',
              color: dateColor,
            }}>
            {date}
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          alignContent: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontSize: 10,
            textAlign: 'center',
            color: dayColor,
          }}>
          {dayName}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

module.exports = dateElement;
