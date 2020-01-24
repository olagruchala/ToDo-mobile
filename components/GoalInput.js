import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

const GoalInput = props => {
  const [goal, setGoal] = useState('');

  const goalInputHandler = value => {
    setGoal(value);
  };

  return (
    <View style={styles.addGoalContainer}>
      <TextInput
        placeholder="Your goal"
        style={styles.goalInput}
        value={goal}
        onChangeText={goalInputHandler}
      />
      <Button title="Add" onPress={() => props.addGoalHandler(goal)} />
    </View>
  );
};

const styles = StyleSheet.create({
  addGoalContainer: {
    margin: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  goalInput: {
    padding: 10,
    height: 60,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1
  }
});

export default GoalInput;
