import { ThemedView } from '@/components/ThemedView';
import React from 'react';
import { Image, StyleSheet, TextInput, TextInputProps } from 'react-native';

interface SearchBarProps extends Pick<TextInputProps, 'value' | 'onChangeText' | 'placeholder'> {}

export default function SearchBar({ value, onChangeText, placeholder = 'Search Videos' }: SearchBarProps) {
  return (
    <ThemedView style={styles.borderBox}>
      <ThemedView style={styles.searchBar}>
        <Image
          source={require('@/assets/recruitment_task_assets/icons/search-icon.svg')}
          style={{ width: 18, height: 18, margin: 3 }}
        />
        <TextInput
          style={{ marginVertical: 'auto' }}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor="#2B2D4299"
        />
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
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
});