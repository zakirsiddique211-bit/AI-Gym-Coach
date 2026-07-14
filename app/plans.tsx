import { Stack, router } from "expo-router";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "../theme/colors";

export default function PlansScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: "Workout Plans",
          headerStyle: {
            backgroundColor: Colors.background,
          },
          headerTintColor: "#FFFFFF",
          headerShadowVisible: false,
        }}
      />

      <ScrollView style={styles.container}>

        <TouchableOpacity
  style={styles.newButton}
  onPress={() => router.push("/create-plan")}
>
  <Text style={styles.newButtonText}>＋ Create New Plan</Text>
</TouchableOpacity>

        <View style={styles.card}>
          <Text style={styles.planTitle}>Push Pull Legs</Text>
          <Text style={styles.planSubtitle}>3 Workout Days</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.planTitle}>Upper Lower</Text>
          <Text style={styles.planSubtitle}>4 Workout Days</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.planTitle}>Bro Split</Text>
          <Text style={styles.planSubtitle}>5 Workout Days</Text>
        </View>

      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 20,
  },

  newButton: {
    backgroundColor: Colors.primary,
    padding: 18,
    borderRadius: 16,
    alignItems: "center",
    marginBottom: 25,
  },

  newButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },

  card: {
    backgroundColor: Colors.surface,
    padding: 20,
    borderRadius: 18,
    marginBottom: 16,
  },

  planTitle: {
    color: Colors.textPrimary,
    fontSize: 22,
    fontWeight: "bold",
  },

  planSubtitle: {
    color: Colors.textSecondary,
    marginTop: 6,
    fontSize: 16,
  },

});