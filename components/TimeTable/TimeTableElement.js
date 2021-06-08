/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';

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

let TimeTableElement = ({timeTableObject}) => {
  let startDate = new Date(timeTableObject.start);
  let endDate = new Date(timeTableObject.end);

  /* Return Element */
  return (
    <>
      <View
        style={{
          margin: 5,
          flex: 1,
          flexDirection: 'row',
          backgroundColor: '#F9F9F9',
          borderRadius: 10,
          padding: '5%',
        }}>
        <View
          style={{
            flex: 2,
          }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '300',
              fontFamily: 'Avenir Next',
              color: '#3B3B3B',
            }}>
            {timeTableObject.subject}
          </Text>
        </View>

        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '300',
              fontFamily: 'Avenir Next',
              color: '#3B3B3B',
            }}>
            {startDate.toTimeString().slice(0, 5)} -{' '}
            {endDate.toTimeString().slice(0, 5)}
          </Text>
        </View>
      </View>
    </>
  );
};

module.exports = TimeTableElement;
