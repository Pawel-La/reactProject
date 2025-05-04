import React, { useState } from 'react';

import SearchBar from '@/components/SearchBar';
import { SingleVideo } from '@/components/SingleVideo';
import { ScrollView, StyleSheet, Text } from 'react-native';

export default function SearchScreen() {
  const [searchText, setSearchText] = useState(''); 

  const videos = [
    {
      id: "1",
      thumbnail: require('@/assets/recruitment_task_assets/app-icon.svg'),
      description: 'Movie 1 Description Movie 1 Description Movie 1 Description',
      date: '12.08.2024',
      channelName: 'Channel 1'
    },
    {
      id: "2",
      thumbnail: require('@/assets/recruitment_task_assets/app-icon.svg'),
      description: 'Movie 2 Description',
      date: '13.08.2024',
      channelName: 'Channel 2'
    },
    {
      id: "3",
      thumbnail: require('@/assets/recruitment_task_assets/app-icon.svg'),
      description: 'Movie 3 Description',
      date: '14.08.2024',
      channelName: 'Channel 3'
    },
    {
      id: "4",
      thumbnail: require('@/assets/recruitment_task_assets/app-icon.svg'),
      description: 'Movie 4 Description',
      date: '15.08.2024',
      channelName: 'Channel 4'
    },
  ];

  return (
    <ScrollView style={styles.mainContainer} contentContainerStyle={styles.mainWrapper}>
      <SearchBar
          value={searchText}
          onChangeText={setSearchText}
          placeholder="Search for videos"
      />

      <Text style={{fontSize: 10, lineHeight: 24, color: "#2B2D42"}}>
        1157 results found for: “{searchText}”
      </Text>

      <Text style={{fontSize: 12, lineHeight: 24, color: "#2B2D42", marginLeft: "auto"}}>
        Sort by: Most popular
      </Text>

      {videos.map((video, _index) => (
        <SingleVideo
            id={video.id}
            thumbnail={video.thumbnail}
            description={video.description}
            date={video.date}
            title={video.channelName}
            containerStyle={{gap: 16}}
            titleStyle={{marginLeft: 8}}
            thumbnailStyle={{width: "auto"}}
            descriptionStyle={{marginLeft: 8}}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
  },
  mainWrapper: {
    flexDirection: "column",
    gap: 10,
    marginHorizontal: 24,
    marginTop: 40
  },
});
