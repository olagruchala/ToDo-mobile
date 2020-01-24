import React from 'react';
import { StyleSheet, Text } from 'react-native';

const GoalItem = props => {
  return <Text style={styles.goalOutput}>{props.goal}</Text>;
};

const styles = StyleSheet.create({
  goalOutput: {
    margin: 10
  }
});

export default GoalItem;
