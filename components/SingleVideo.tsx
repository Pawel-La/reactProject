import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import React from 'react';
import { Image, ImageSourcePropType, ImageStyle, StyleSheet, ViewStyle } from 'react-native';

interface SingleVideoProps {
    thumbnail: ImageSourcePropType;
    description: string;
    date: string;
    containerStyle?: ViewStyle;
    thumbnailStyle?: ImageStyle;
    descriptionStyle?: ViewStyle;
}

export function SingleVideo({ thumbnail, description, date, containerStyle, thumbnailStyle, descriptionStyle }: SingleVideoProps) {
  return (
    <ThemedView style={[styles.mainContainer, containerStyle]}>
      <Image
        source={thumbnail}
        style={[styles.thumbnail, thumbnailStyle]}
      />

      <ThemedView style={descriptionStyle}>
        <ThemedText type="verySmall">
          {description}
        </ThemedText>
      </ThemedView>

      <ThemedText
        style={{
          marginLeft: 'auto',
          color: '#2B2D42',
          fontSize: 10,
          lineHeight: 24,
        }}
      >
        {date}
      </ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: "column",
        flexGrow: 0,
        gap: 2
    },
    thumbnail: {
        borderRadius: 16 
    }
});