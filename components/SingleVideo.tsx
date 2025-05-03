import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import React from 'react';
import { Image, ImageSourcePropType, StyleSheet, ViewStyle } from 'react-native';

interface SingleVideoProps {
    image: ImageSourcePropType;
    description: string;
    date: string;
    containerStyle?: ViewStyle;
}

export default function singleVideo({ image, description, date, containerStyle }: SingleVideoProps) {
  return (
    <ThemedView style={[{ flexDirection: 'column', gap: 8 }, containerStyle]}>
      <Image
        source={image}
        style={{ width: 180, height: 112, borderRadius: 16 }}
      />

      <ThemedView style={{ width: 180 }}>
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
    singleVideo: {
        flexDirection: "column",
        flexGrow: 0
    }
});