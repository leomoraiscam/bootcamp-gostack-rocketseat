import React, {useState, useEffect} from 'react';
import api from './services/api';
import {SafeAreaView, Text, FlatList, StyleSheet} from 'react-native';

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('/projects').then((response) => {
      setProjects(response.data);
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={projects}
        key={(project) => project.id}
        renderItem={({item}) => (
          <Text style={styles.project}>{item.title}</Text>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1',
  },
  project: {
    color: 'white',
    fontSize: 20,
  },
});

export default App;
