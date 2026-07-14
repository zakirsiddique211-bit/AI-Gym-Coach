import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "../../theme/colors";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>👋 Good Morning</Text>
      <Text style={styles.name}>Zakir</Text>

      <Text style={styles.appName}>AI Gym Coach</Text>
      <Text style={styles.subtitle}>Your AI Fitness Companion</Text>

      <View style={styles.workoutCard}>
        <Text style={styles.cardTitle}>Today's Workout</Text>
        <Text style={styles.workoutName}>Chest & Triceps</Text>
        <Text style={styles.duration}>⏱ 45 Minutes</Text>

        <TouchableOpacity
  style={styles.button}
  onPress={() => router.push("/plans")}
>
  <Text style={styles.buttonText}>START WORKOUT</Text>
</TouchableOpacity>
      </View>

      <View style={styles.statsRow}>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>1850</Text>
          <Text style={styles.statLabel}>Calories</Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statValue}>95 g</Text>
          <Text style={styles.statLabel}>Protein</Text>
        </View>
      </View>

      <View style={styles.statsRow}>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>2.5 L</Text>
          <Text style={styles.statLabel}>Water</Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statValue}>🔥 14</Text>
          <Text style={styles.statLabel}>Day Streak</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingHorizontal: 20,
    paddingTop: 60,
  },

  greeting: {
    color: Colors.textSecondary,
    fontSize: 18,
  },

  name: {
    color: Colors.textPrimary,
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 24,
  },

  appName: {
    color: Colors.textPrimary,
    fontSize: 28,
    fontWeight: "bold",
  },

  subtitle: {
    color: Colors.textSecondary,
    marginTop: 6,
    marginBottom: 24,
  },

  workoutCard: {
    backgroundColor: Colors.surface,
    borderRadius: 18,
    padding: 20,
    marginBottom: 20,
  },

  cardTitle: {
    color: Colors.textSecondary,
    fontSize: 16,
  },

  workoutName: {
    color: Colors.textPrimary,
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 8,
  },

  duration: {
    color: Colors.textSecondary,
    marginVertical: 12,
  },

  button: {
    backgroundColor: Colors.primary,
    padding: 16,
    borderRadius: 14,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },

  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },

  statCard: {
    backgroundColor: Colors.surface,
    width: "48%",
    borderRadius: 18,
    padding: 20,
    alignItems: "center",
  },

  statValue: {
    color: Colors.textPrimary,
    fontSize: 22,
    fontWeight: "bold",
  },

  statLabel: {
    color: Colors.textSecondary,
    marginTop: 8,
  },
});