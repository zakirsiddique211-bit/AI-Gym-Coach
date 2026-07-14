import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../../theme/colors";
export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>AI Gym Coach 💪</Text>

      <Text style={styles.subtitle}>
        Your Personal AI Fitness Companion
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  title: {
    color: Colors.textPrimary,
    fontSize: 32,
    fontWeight: "bold",
  },

  subtitle: {
    color: Colors.textSecondary,
    fontSize: 18,
    marginTop: 10,
    textAlign: "center",
  },
});