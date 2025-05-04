import React, { useState } from 'react';

import SearchBar from '@/components/SearchBar';
import { ThemedView } from '@/components/ThemedView';
import { VideoSection } from '@/components/VideoSection';
import { Image, ScrollView, StyleSheet } from 'react-native';

export default function HomeScreen() {
  const [searchText, setSearchText] = useState(''); 

  const videos = [
    {
      thumbnail: require('@/assets/recruitment_task_assets/app-icon.svg'),
      description: 'Movie 1 Description',
      date: '12.08.2024',
    },
    {
      thumbnail: require('@/assets/recruitment_task_assets/app-icon.svg'),
      description: 'Movie 2 Description',
      date: '13.08.2024',
    },
    {
      thumbnail: require('@/assets/recruitment_task_assets/app-icon.svg'),
      description: 'Movie 3 Description',
      date: '14.08.2024',
    },
  ];

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

      <VideoSection
        title="Top Picks for You"
        videos={videos}
      />

      <VideoSection
        title="Nice to have"
        videos={videos}
      />
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
    flexDirection: "column",
    marginVertical: 8,
    gap: 16,
    borderTopColor: "#2B2D42",
    borderTopWidth: 2
  },
  videosTopBar: {
    flexDirection: "row",
    marginHorizontal: 24,
  },
  videosScrollable: {
    flexDirection: "row",
    marginLeft: 24,
    gap: 18,
    flexWrap: "nowrap"
  }
});
