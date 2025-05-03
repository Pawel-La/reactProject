import React, { useState } from 'react';

import SearchBar from '@/components/SearchBar';
import { ThemedView } from '@/components/ThemedView';
import { Image, ScrollView, StyleSheet } from 'react-native';

export default function HomeScreen() {
  const [searchText, setSearchText] = useState(''); 

  return (
    <ScrollView style={styles.mainContainer} contentContainerStyle={styles.mainWrapper}>
      <ThemedView style={styles.topBar}>
        <SearchBar
            value={searchText}
            onChangeText={setSearchText}
            placeholder="Search for videos"
        />
        <Image
            source={require('@/assets/recruitment_task_assets/icons/settings-icon.svg')}
        />
      </ThemedView>

      <ThemedView style={styles.videos}>
        <ThemedView>
            111
        </ThemedView>
        <ThemedView>
            111
        </ThemedView>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
  },
  mainWrapper: {
    flexDirection: "column",
    gap: 13
  },
  topBar: {
    flexDirection: "row",
    gap: 26,
    marginTop: 40,
    alignItems: "center",
    marginHorizontal: 24,
  },
  videos: {
    backgroundColor: 'red',
    flexDirection: "row",
    gap: 26,
    marginTop: 40
  }
});
