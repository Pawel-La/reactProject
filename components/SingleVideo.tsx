import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, ImageSourcePropType, ImageStyle, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';

interface SingleVideoProps {
    id: string;
    thumbnail: ImageSourcePropType;
    description: string;
    date: string;
    title?: string;
    containerStyle?: ViewStyle;
    titleStyle?: ViewStyle;
    thumbnailStyle?: ImageStyle;
    descriptionStyle?: ViewStyle;
}

export function SingleVideo({ id, thumbnail, description, date, title, containerStyle, titleStyle, thumbnailStyle, descriptionStyle }: SingleVideoProps) {
  const router = useRouter();

  const handlePress = () => {
    router.push(`/videos/${id}`);
  };
  
  return (
    <TouchableOpacity onPress={handlePress}>
        <ThemedView style={[styles.mainContainer, containerStyle]}>
            <Image
              source={thumbnail}
              style={[styles.thumbnail, thumbnailStyle]}
            />

            {title && (
              <ThemedView style={titleStyle}>
                <ThemedText style={styles.title}>
                  {title}
                </ThemedText>
              </ThemedView>
            )}

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
    </TouchableOpacity>
    
  );
}

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: "column",
        flexGrow: 0,
        gap: 2
    },
    title: {
        fontSize: 12,
        lineHeight: 12,
        fontWeight: "700"
    },
    thumbnail: {
        borderRadius: 16 
    }
});