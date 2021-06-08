/* eslint-disable react-native/no-inline-styles */
/**
 * Result Screen Component
 */

import React, {useEffect, useState} from 'react';

import {View, Text, FlatList} from 'react-native';

/* Custom Imports */
let ResultElement = require('./ResultDefault/ResultDefaultElement');
let ResultAPI = require('./Api/ResultAPI');

let Result = (props) => {
  /* Get State */
  let [resultData, updateResultData] = useState([]);

  useEffect(() => {
    ResultAPI.getResultDataAPI(updateResultData).catch((error) => {
      updateResultData([]);
    });
  }, []);

  const renderResultElement = (resultDataProp) => {
    return (
      <ResultElement
        resultData={resultDataProp.item}
        globalNavigator={props.globalNavigator}
      />
    );
  };

  /* Render JSX */
  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
      }}>
      <View
        style={{
          margin: 15,
        }}>
        <Text
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 10,
            margin: '3%',
          }}>
          <Text
            style={{
              color: '#5F5CE6',
            }}>
            Result
          </Text>{' '}
          shows academic results posted by Staff members of repective schools.
          Recent results are displayed first.
        </Text>

        <FlatList
          data={resultData}
          renderItem={renderResultElement}
          keyExtractor={(item) => item._id}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          style={{
            width: '100%',
          }}
        />
      </View>
    </View>
  );
};

module.exports = Result;
