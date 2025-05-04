import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useLocalSearchParams } from 'expo-router';
import { Image, StyleSheet } from 'react-native';

export default function VideoDetails() {
  const { id } = useLocalSearchParams();

  return (
    <ThemedView style={styles.mainContainer}>
      <ThemedView style={{gap: 10}}>
        <ThemedText numberOfLines={1} style={{marginHorizontal: 16, fontSize: 18, lineHeight: 24, fontWeight: "600", color: "#2B2D42"}}>
          bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        </ThemedText>

        <ThemedView style={{marginLeft: 24, flexDirection: "row", alignItems: "center", gap: 12}}>
          <ThemedView style={{backgroundColor: "#2B2D42", padding: 14, borderRadius: 24}}>
            <Image
              style={{tintColor:"white", backgroundColor: "#2B2D42", width: 20, height: 20}}
              source={require('@/assets/recruitment_task_assets/icons/person-icon.svg')}
            />
          </ThemedView>

          <ThemedText style={{fontSize: 14, lineHeight: 12, fontWeight: "700", color: "#2B2D42"}}>
            Channel Name
          </ThemedText>
        </ThemedView>

        <ThemedView style={{marginHorizontal: 16, flexDirection: "row"}}>
          <ThemedView style={{flexDirection: "column", alignItems: "center", borderBottomColor: "#2B2D42", borderBottomWidth: 2, flex: 1}}>
            <ThemedText style={{fontSize: 12, lineHeight: 12, fontWeight: "600", color: "#2B2D42"}}>
              Details
            </ThemedText>
          </ThemedView>

          <ThemedView style={{flexDirection: "column", alignItems: "center", borderBottomColor: "#C8C8C8", borderBottomWidth: 2, flex: 1}}>
            <ThemedText style={{fontSize: 12, lineHeight: 12, fontWeight: "600", color: "#2B2D42"}}>
              Notes
            </ThemedText>
          </ThemedView>
        </ThemedView>

        <ThemedView style={{marginLeft: 20, gap: 8}}>
          <ThemedText style={{fontSize: 10, lineHeight: 12, fontWeight: "600", color: "#2B2D42"}}>
            Description
          </ThemedText>

          <ThemedText numberOfLines={7} style={{marginRight: 20, fontSize: 12, lineHeight: 12, fontWeight: "400", color: "#2B2D42"}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque venenatis semper purus a accumsan. Donec accumsan pulvinar metus, euismod lacinia libero congue non. Vivamus ut massa finibus, consequat dui commodo, semper magna. Donec nec justo consectetur lacus facilisis tristique eget quis nulla. Cras sodales lacinia nisi, in dictum elit commodo in.
          </ThemedText>
        </ThemedView>

        <ThemedView style={{marginLeft: 20, gap: 12}}>
          <ThemedText style={{fontSize: 10, lineHeight: 12, fontWeight: "600", color: "#2B2D42"}}>
            Statistics
          </ThemedText>

          <ThemedView style={{flexDirection: "row", marginRight: 20, gap: 80}}>
            <ThemedView style={{flexDirection: "row", flex: 1, backgroundColor: "#2B2D42", borderRadius: 8, padding: 8, alignItems: "center"}}>
              <Image
                style={{tintColor:"white", backgroundColor: "#2B2D42", width: 15, height: 15}}
                source={require('@/assets/recruitment_task_assets/icons/views-icon.svg')}
              />

              <ThemedView style={{flexDirection: "column", flex: 1, alignItems: "center", backgroundColor: "#2B2D42"}}>
                <ThemedText style={{fontSize: 10, lineHeight: 12, fontWeight: "600", color: "white"}}>
                  25268952 views
                </ThemedText>
              </ThemedView>
            </ThemedView>

            <ThemedView style={{flexDirection: "row", backgroundColor: "#2B2D42", borderRadius: 8, padding: 8, flex: 1, alignItems: "center"}}>
              <Image
                style={{tintColor:"white", backgroundColor: "#2B2D42", width: 15, height: 15}}
                source={require('@/assets/recruitment_task_assets/icons/likes-icon.svg')}
              />

              <ThemedView style={{flexDirection: "column", flex: 1, alignItems: "center", backgroundColor: "#2B2D42"}}>
                <ThemedText style={{fontSize: 10, lineHeight: 12, fontWeight: "600", color: "white"}}>
                  12345 likes
                </ThemedText>
              </ThemedView>
            </ThemedView>
          </ThemedView>
        </ThemedView>

      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
    flexDirection: "column",
    flex: 1,
  }
});