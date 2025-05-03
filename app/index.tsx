import { ExternalLink } from '@/components/ExternalLink';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useRouter } from 'expo-router';
import { Button, Image, ScrollView, StyleSheet, Text } from 'react-native';

export default function LoginScreen() {
  const router = useRouter();

  return (
    <ScrollView style={styles.mainContainer} contentContainerStyle={styles.mainWrapper}>
      <ThemedView style={{marginTop: 80, overflow: 'hidden'}}>
        <Image
          source={require('@/assets/recruitment_task_assets/logo.png')}
          style={styles.image}
          resizeMode="cover"
        />
      </ThemedView>

      <ThemedView>
        <Image
          source={require('@/assets/recruitment_task_assets/app-icon.png')}
          style={styles.image}
          resizeMode="cover"
        />
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="title" style={{fontSize: 22, color: 'white'}}>
          Welcome to the best<Text numberOfLines={1}> YouTube-based </Text>learning application.
        </ThemedText>

        <Button
          title="Log in as guest"
          color="#2B2D42"
          onPress={() => router.replace('/(tabs)/home')}
        />

        <ThemedView style={styles.innerContainer}>
          <ThemedText type="small" style={{ color: 'white' }}>By continuing you agree with </ThemedText>
          <ThemedText>
            <ExternalLink href="https://reactnative.dev/docs/images">
              <ThemedText type="linkSmall">Terms and Conditions</ThemedText>
            </ExternalLink>
            
            <ThemedText type="small" style={{ color: 'white' }}> and </ThemedText>
            <ExternalLink href="https://reactnative.dev/docs/images">
              <ThemedText type="linkSmall">Privacy Policy</ThemedText>
            </ExternalLink>
            
          </ThemedText>
        </ThemedView>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#8D99AE',
  },
  mainWrapper: {
    flexDirection: "column",
    alignItems: "center",
    gap: 120,
    marginHorizontal: 32,
  },
  image: {
    backgroundColor: '#8D99AE'
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
});
