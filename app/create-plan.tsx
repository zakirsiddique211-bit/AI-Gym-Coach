import { Stack } from "expo-router";
import { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Colors } from "../theme/colors";

export default function CreatePlanScreen() {
    const [planName, setPlanName] = useState("");
  return (
    <>
      <Stack.Screen
        options={{
          title: "Create Workout Plan",
          headerStyle: {
            backgroundColor: Colors.background,
          },
          headerTintColor: "#FFFFFF",
          headerShadowVisible: false,
        }}
      />

      <View style={styles.container}>

        <Text style={styles.label}>Workout Plan Name</Text>

        <TextInput
  placeholder="Example: Push Pull Legs"
  placeholderTextColor="#777"
  style={styles.input}
  value={planName}
  onChangeText={setPlanName}
/>

        <TouchableOpacity
  style={styles.button}
  onPress={() => {
    if (planName.trim() === "") {
      Alert.alert("Missing Name", "Please enter a workout plan name.");
      return;
    }

    Alert.alert("Success", `Workout Plan "${planName}" created!`);
  }}
>
          <Text style={styles.buttonText}>CREATE PLAN</Text>
        </TouchableOpacity>

      </View>
    </>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 20,
    paddingTop: 40,
  },

  label: {
    color: Colors.textPrimary,
    fontSize: 18,
    marginBottom: 10,
  },

  input: {
    backgroundColor: Colors.surface,
    color: Colors.textPrimary,
    borderRadius: 14,
    padding: 18,
    fontSize: 18,
    marginBottom: 25,
  },

  button: {
    backgroundColor: Colors.primary,
    padding: 18,
    borderRadius: 16,
    alignItems: "center",
  },

  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 18,
  },

});