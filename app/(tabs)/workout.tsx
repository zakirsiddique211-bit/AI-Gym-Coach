import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "../../theme/colors";

export default function WorkoutScreen() {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Today's Workout</Text>

      <View style={styles.card}>
        <Text style={styles.workoutName}>Chest & Triceps</Text>
        <Text style={styles.duration}>Estimated Time: 45 Minutes</Text>
      </View>

      <Text style={styles.sectionTitle}>Exercises</Text>

      <View style={styles.exerciseCard}>
        <Text style={styles.exercise}>1. Bench Press</Text>
      </View>

      <View style={styles.exerciseCard}>
        <Text style={styles.exercise}>2. Incline Dumbbell Press</Text>
      </View>

      <View style={styles.exerciseCard}>
        <Text style={styles.exercise}>3. Cable Fly</Text>
      </View>

      <View style={styles.exerciseCard}>
        <Text style={styles.exercise}>4. Triceps Pushdown</Text>
      </View>

      <View style={styles.exerciseCard}>
        <Text style={styles.exercise}>5. Skull Crushers</Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>START SESSION</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 20,
    paddingTop: 60,
  },

  title: {
    color: Colors.textPrimary,
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },

  card: {
    backgroundColor: Colors.surface,
    padding: 20,
    borderRadius: 18,
    marginBottom: 25,
  },

  workoutName: {
    color: Colors.textPrimary,
    fontSize: 24,
    fontWeight: "bold",
  },

  duration: {
    color: Colors.textSecondary,
    marginTop: 10,
    fontSize: 16,
  },

  sectionTitle: {
    color: Colors.textPrimary,
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
  },

  exerciseCard: {
    backgroundColor: Colors.surface,
    padding: 18,
    borderRadius: 14,
    marginBottom: 12,
  },

  exercise: {
    color: Colors.textPrimary,
    fontSize: 18,
  },

  button: {
    backgroundColor: Colors.primary,
    padding: 18,
    borderRadius: 16,
    alignItems: "center",
    marginTop: 20,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },

});