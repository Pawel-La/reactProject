import { Image, ImageProps, TouchableOpacity, ViewStyle } from "react-native";
import { ThemedView } from "./ThemedView";

export interface VideoButtonProps {
    onPress: () => void;
    source: ImageProps;
    buttonStyle?: ViewStyle;
}

export function VideoButtonView({onPress, source, buttonStyle}: VideoButtonProps) {
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