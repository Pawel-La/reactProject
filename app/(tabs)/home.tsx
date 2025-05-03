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

        <ScrollView 
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.videosScrollable}
        >
            <ThemedView style={styles.singleVideo}>
                <Image
                    source={require('@/assets/recruitment_task_assets/app-icon.svg')}
                    style={{width: 180, height: 112, borderRadius: 16}}
                />
                <ThemedView style={{width: 180}}>
                    <ThemedText type='verySmall'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                    </ThemedText>
                </ThemedView>
                
                <ThemedText style={{marginLeft: "auto", color: "#2B2D42", fontSize: 10, lineHeight: 24}}>
                    12.08.2024
                </ThemedText>
            </ThemedView>

            <ThemedView style={styles.singleVideo}>
                <Image
                    source={require('@/assets/recruitment_task_assets/app-icon.svg')}
                    style={{width: 180, height: 112, borderRadius: 16}}
                />
                <ThemedView style={{width: 180}}>
                    <ThemedText type='verySmall'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                    </ThemedText>
                </ThemedView>
                
                <ThemedText style={{marginLeft: "auto", color: "#2B2D42", fontSize: 10, lineHeight: 24}}>
                    12.08.2024
                </ThemedText>
            </ThemedView>

            <ThemedView style={styles.singleVideo}>
                <Image
                    source={require('@/assets/recruitment_task_assets/app-icon.svg')}
                    style={{width: 180, height: 112, borderRadius: 16}}
                />
                <ThemedView style={{width: 180}}>
                    <ThemedText type='verySmall'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                    </ThemedText>
                </ThemedView>
                
                <ThemedText style={{marginLeft: "auto", color: "#2B2D42", fontSize: 10, lineHeight: 24}}>
                    12.08.2024
                </ThemedText>
            </ThemedView>

            <ThemedView style={styles.singleVideo}>
                <Image
                    source={require('@/assets/recruitment_task_assets/app-icon.svg')}
                    style={{width: 180, height: 112, borderRadius: 16}}
                />
                <ThemedView style={{width: 180}}>
                    <ThemedText type='verySmall'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                    </ThemedText>
                </ThemedView>
                
                <ThemedText style={{marginLeft: "auto", color: "#2B2D42", fontSize: 10, lineHeight: 24}}>
                    12.08.2024
                </ThemedText>
            </ThemedView>
            
        </ScrollView>
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
  },
  singleVideo: {
    flexDirection: "column",
    flexGrow: 0
  }
});
