import React, { useState } from 'react';

import SearchBar from '@/components/SearchBar';
import { ThemedText } from '@/components/ThemedText';
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
        <ThemedView style={styles.videosTopBar}>
            <ThemedText type="title">
                React Native
            </ThemedText>
            <ThemedView style={{marginLeft: "auto", marginVertical: "auto"}}>
                <ThemedText type="link">
                    Show more
                </ThemedText>
            </ThemedView>
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
    flexDirection: "column",
    marginVertical: 8
  },
  videosTopBar: {
    flexDirection: "row",
    marginHorizontal: 24,
    backgroundColor: "yellow"
  }
});
