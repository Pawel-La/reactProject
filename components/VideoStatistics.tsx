import { Image, ImageProps, StyleSheet } from "react-native";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";

interface VideoStatisticsBoxProps {
    icon: ImageProps;
    text: string;
}

function VideoStatisticsBoxView({icon, text}: VideoStatisticsBoxProps) {
    return (
        <ThemedView style={styles.box}>
            <Image
                style={styles.icon}
                source={icon}
            />

            <ThemedView style={styles.innerContainer}>
                <ThemedText style={styles.details}>
                    {text}
                </ThemedText>
            </ThemedView>
        </ThemedView>
    );
}

export function VideoStatistics() {
  return (
    <ThemedView style={styles.mainContainer}>
        <ThemedText style={styles.title}>
            Statistics
        </ThemedText>

        <ThemedView style={{flexDirection: "row", marginRight: 20, gap: 80}}>
            <VideoStatisticsBoxView 
                icon={require('@/assets/recruitment_task_assets/icons/views-icon.svg')}
                text={'25268952 views'}
            />

            <VideoStatisticsBoxView 
                icon={require('@/assets/recruitment_task_assets/icons/likes-icon.svg')}
                text={'12345 likes'}
            />
        </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
    mainContainer: {
        marginLeft: 20, 
        gap: 12
    },
    title: {
        fontSize: 10, 
        lineHeight: 12, 
        fontWeight: "600", 
        color: "#2B2D42"
    },
    box: {
        flexDirection: "row", 
        flex: 1, 
        backgroundColor: "#2B2D42", 
        borderRadius: 8, 
        padding: 8, 
        alignItems: "center"
    },
    icon: {
        tintColor:"white", 
        backgroundColor: "#2B2D42", 
        width: 15, 
        height: 15
    },
    innerContainer: {
        flexDirection: "column", 
        flex: 1, 
        alignItems: "center", 
        backgroundColor: "#2B2D42"
    },
    details: {
        fontSize: 10, 
        lineHeight: 12, 
        fontWeight: "600", 
        color: "white"
    }
});