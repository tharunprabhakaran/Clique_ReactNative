/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useState} from 'react/cjs/react.development';

/* Custom Imports */
let DateElement = require('./DateElement');

function DateSelector({timeTable, updateTimeTable}) {
  /* Date Calculation */
  let currentDate = new Date();
  let startingDate = new Date();
  let endingDate = new Date();

  startingDate.setDate(currentDate.getDate() - currentDate.getDay());
  endingDate.setDate(currentDate.getDate() + (6 - currentDate.getDay()));

  /* Selected Date Button */
  let [selectedDate, updateSelectedDate] = useState(currentDate.getDay());

  let dates = [];
  let temporaryDate = startingDate;
  for (let dateCount = 0; dateCount < 7; dateCount++) {
    /* Add Date Element to the dates array */
    dates.push(
      <DateElement
        key={dateCount}
        day={dateCount}
        date={temporaryDate.getDate()}
        selectedDate={selectedDate}
        updateSelectedDay={updateSelectedDate}
        timeTable={timeTable}
        updateTimeTable={updateTimeTable}
      />,
    );

    /* Increment Date */
    temporaryDate.setDate(temporaryDate.getDate() + 1);
  }

  /* Return JSX */
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={['#F775AD', '#F67EAC', '#F6859E', '#F68A88', '#F68E61']}
      style={{
        flex: 1,
        flexDirection: 'row',
        margin: '5%',
        borderRadius: 10,
        padding: '3%',
      }}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignContent: 'center',
          justifyContent: 'center',
        }}>
        {dates}
      </View>
    </LinearGradient>
  );
}

module.exports = DateSelector;
