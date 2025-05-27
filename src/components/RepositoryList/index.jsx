import { useState } from 'react';
import { FlatList, Pressable, View, StyleSheet } from 'react-native';
import { useNavigate } from 'react-router';
import { Picker } from '@react-native-picker/picker';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../../hooks/useRepositories';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const PressableRepositoryItem = ({ item, onPress }) => (
  <Pressable
    style={styles.button}
    onPress={() => onPress(item.id)}
  >
    <RepositoryItem item={item} />
  </Pressable>
);

export const RepositoryListContainer = ({ repositories, onPress }) => {
  // Get the nodes from the edges array
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <PressableRepositoryItem item={item} onPress={onPress} />}
    />
  );
};

const RepositoryList = () => {
  const [sorting, setSorting] = useState('latest');
  const { repositories } = useRepositories(sorting);
  const navigate = useNavigate();

  const handleItemPress = (id) => {
    try {
      navigate(`/repository/${id}`);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Picker
        selectedValue={sorting}
        onValueChange={(itemValue) => setSorting(itemValue)}
      >
        <Picker.Item label="Latest repositories" value="latest" />
        <Picker.Item label="Highest rated repositories" value="highestRated" />
        <Picker.Item label="Lowest rated repositories" value="lowestRated" />
      </Picker>

      <RepositoryListContainer
        repositories={repositories}
        onPress={handleItemPress}
      />
    </>
  );
};

export default RepositoryList;
