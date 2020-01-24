import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

function App() {
  const [goalArr, setGoalArr] = useState([]);

  const addGoal = goal => {
    setGoalArr(currentState => [...currentState, goal]);
  };

  return (
    <View style={styles.container}>
      <GoalInput addGoalHandler={addGoal} />
      <ScrollView>
        <View style={styles.viewGoalContainer}>
          {goalArr.map(item => (
            <GoalItem key={item} goal={item} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    backgroundColor: '#fff'
  },
  viewGoalContainer: {
    margin: 30,
    padding: 10
  }
});

export default App;
