import { FlatList, SafeAreaView, StyleSheet, TextInput } from 'react-native';
import { Text, View } from '@/components/Themed';
import { tracks } from "../../assets/data/tracks"
import TrackListItem from '@/components/TrackListItem';
import { FontAwesome } from '@expo/vector-icons';
import { useState } from 'react';

export default function SearchScreen() {
  const [search, setSearch] = useState("");
  return (
    <SafeAreaView>
      <View style={styles.header}>
        {/* Header */}
        <FontAwesome name="search" size={16} color={'gray'} />
        <TextInput
          value={search}
          onChangeText={setSearch}
          placeholder="What do you want to listen to?"
          style={styles.input}
        />
        <Text onPress={() => setSearch("")} style={{ color: 'gray' }}>Cancel</Text>
      </View>
      <FlatList
        data={tracks}
        renderItem={({ item }) => <TrackListItem track={item} />}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10
  },
  input: {
    flex: 1,
    //backgroundColor: '',
    padding: 8,
    marginHorizontal: 10,
    borderRadius: 5,

  },


});
