import React, { useState } from 'react';

import { ThemedView } from '@/components/ThemedView';
import { Image, ScrollView, StyleSheet, TextInput } from 'react-native';

export default function HomeScreen() {
  const [searchText, setSearchText] = useState('');   

  return (
    <ScrollView style={styles.mainContainer} contentContainerStyle={styles.mainWrapper}>
      <ThemedView style={styles.topBar}>
        <ThemedView style={styles.borderBox}>
            <ThemedView style={styles.searchBar}>
                <Image
                    source={require('@/assets/recruitment_task_assets/icons/search-icon.svg')}
                    style={{width: 18, height: 18, margin: 3}}
                />
                <TextInput
                    style={{marginVertical:"auto"}}
                    value={searchText}
                    onChangeText={setSearchText}
                    placeholder="Search Videos"
                    placeholderTextColor="#2B2D4299" 
                />
            </ThemedView>
        </ThemedView>

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
  borderBox: {
    flex: 1,
    borderColor: "#2B2D42",
    borderWidth: 2,
    borderRadius: 16
  },
  searchBar: {
    flexDirection: "row",
    flex: 1,
    marginHorizontal: 12,
    marginVertical: 10,
    gap: 12
  },
  videos: {
    backgroundColor: 'red',
    flexDirection: "row",
    gap: 26,
    marginTop: 40
  },
  stepContainer: {
    flexDirection: "column",
    gap: 20,
    backgroundColor: '#8D99AE',
    // flex: 1,
    // alignItems: "center",
    // marginTop: 80
  },
  innerContainer: {
    alignItems: "center",
    backgroundColor: '#8D99AE',
  },
  button: {

  },
  underlinedText: {
    textDecorationLine: 'underline'
  }
});
