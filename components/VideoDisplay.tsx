import { useRef, useState } from "react";
import { Image, ImageProps, StyleSheet, TouchableOpacity, View, ViewStyle } from "react-native";
import Video, { VideoRef } from "react-native-video";
import { ThemedView } from "./ThemedView";

export function VideoDisplay() {
  const videoRef = useRef<VideoRef>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause(); // Pause the video
      } else {
        videoRef.current.resume(); // Play the video
      }
      setIsPlaying(!isPlaying); // Toggle the play/pause state
    }
  };

  return (
    <ThemedView style={styles.videoWrapper}>
      <Video
        source={{ uri: 'https://www.w3schools.com/html/mov_bbb.mp4' }}
        ref={videoRef}              
        onError={() => {console.log("error while loading the video")}}               
        style={styles.video}
      />

      <View style={{flexDirection: "row", gap: 8, marginLeft: 16}}>
        <VideoButtonView 
          onPress={togglePlayPause}
          source={require('@/assets/recruitment_task_assets/icons/leftarrow-icon.svg')} 
        />

        <VideoButtonView 
          onPress={togglePlayPause}
          buttonStyle={{marginLeft: "auto"}}
          source={require('@/assets/recruitment_task_assets/icons/volume-icon.svg')} 
        />

        <VideoButtonView 
          onPress={togglePlayPause}
          source={require('@/assets/recruitment_task_assets/icons/airplay-icon.svg')} 
        />
      </View>

      <View style={{flexDirection: "row", alignItems: "center", gap: 8, marginLeft: 16}}>
        
      </View>

      <View style={{flexDirection: "row", gap: 8, marginLeft: 16}}>
        <VideoButtonView 
          onPress={togglePlayPause}
          buttonStyle={{marginLeft: "auto"}}
          source={require('@/assets/recruitment_task_assets/icons/fullscreen-icon.svg')} 
        />
      </View>
    </ThemedView> 
  )
}

interface VideoButtonProps {
  onPress: () => void;
  source: ImageProps;
  buttonStyle?: ViewStyle;
}

function VideoButtonView({onPress, source, buttonStyle}: VideoButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
        <ThemedView style={{backgroundColor: "#00000040", padding: 6, borderRadius: 16}}>
        <Image
            style={{tintColor:"white", width: 20, height: 20}}
            source={source}
        />
        </ThemedView>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  videoWrapper: {
    width: '100%',
    height: 215,
    marginBottom: 20,
    paddingTop: 18,
    justifyContent: "space-between",
    flexDirection: "column"
  },
  video: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  }
});