import React, { useContext } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import { GameContext } from '../contexts/GameContext';

export default function GameScreen({ navigation }) {
  const { state, dispatch } = useContext(GameContext);

  const allPassed = state.appliedRules.every(rule => rule.check(state.password));

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🔑 비밀번호를 입력하세요</Text>
      <TextInput
        style={styles.input}
        value={state.password}
        onChangeText={(text) => dispatch({ type: 'SET_PASSWORD', payload: text })}
        placeholder="비밀번호 입력"
      />

      <FlatList
        data={state.appliedRules}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text style={{ color: item.check(state.password) ? 'green' : 'red' }}>
            {item.description}
          </Text>
        )}
      />

      <Button
        title="다음 규칙 추가"
        onPress={() => dispatch({ type: 'ADD_RULE' })}
        disabled={!allPassed}
      />

      {allPassed && state.ruleIndex === state.appliedRules.length && (
        <Button title="성공! 결과 보기" onPress={() => navigation.navigate('Result')} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, marginBottom: 20 },
  input: { borderWidth: 1, padding: 10, fontSize: 18, marginBottom: 20 }
});