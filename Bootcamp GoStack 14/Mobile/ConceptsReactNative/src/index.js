import React, {useState, useEffect} from 'react';
import api from './services/api';
import {
  SafeAreaView,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('/projects').then((response) => {
      setProjects(response.data);
    });
  }, []);

  async function handleAddProjects() {
    const response = await api.post('projects', {
      title: `New project ${Date.now()}`,
      owner: 'Leonardo Morais',
    });

    setProjects([...projects, response.data]);
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={projects}
        key={(project) => project.id}
        renderItem={({item}) => (
          <Text style={styles.project}>{item.title}</Text>
        )}
      />
      <TouchableOpacity style={styles.button} onPress={handleAddProjects}>
        <Text style={styles.buttonText}>Adicionar projeto</Text>
      </TouchableOpacity>
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
  button: {
    backgroundColor: '#fff',
    margin: 20,
    height: 50,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: '700',
    fontSize: 16,
  },
});

export default App;
