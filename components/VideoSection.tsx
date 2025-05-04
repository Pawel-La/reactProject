import { SingleVideo } from '@/components/SingleVideo';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useRouter } from 'expo-router';
import React from 'react';
import { ImageSourcePropType, ScrollView, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';

export interface Video {
  id: string;
  thumbnail: ImageSourcePropType;
  description: string;
  date: string;
}

export interface VideoSectionProps {
  title: string;
  videos: Video[];
  containerStyle?: ViewStyle;
}

export function VideoSection({ title, videos, containerStyle }: VideoSectionProps) {
  const router = useRouter();
  
  const handlePress = () => {
    router.push({
      pathname: '/search',
      params: { search_query: title },
    });
  };

  return (
    <ThemedView style={[styles.mainContainer, containerStyle]}>
        <ThemedView style={styles.topBar}>
            <ThemedText type="title">
                {title}
            </ThemedText>
            
            <TouchableOpacity onPress={handlePress} style={{marginLeft: "auto", marginVertical: "auto"}}>
              <ThemedText type="link">
                  Show more
              </ThemedText>
            </TouchableOpacity>
        </ThemedView>

        <ScrollView 
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.scrollable}
        >
          {videos.map((video, _index) => (
            <SingleVideo
                id={video.id}
                thumbnail={video.thumbnail}
                description={video.description}
                date={video.date}
                thumbnailStyle={{width: 180, height: 112}}
                descriptionStyle={{width: 180}}
            />
          ))}
        </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
    mainContainer: {
      flexDirection: "column",
      marginVertical: 8,
      gap: 16
    },
    topBar: {
      flexDirection: "row",
      marginHorizontal: 24,
    },
    scrollable: {
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