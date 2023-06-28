import { Text, View } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const WelcomeScreen = ({
  route
}) => {
  const user = route?.params?.user || {};
  return <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{
      backgroundColor: "#f0f0f1",
      padding: 10,
      position: "relative",
      flex: 1
    }}>
        <View style={styles.container}>
          <Text style={styles.title}>{"Welcome to Moodji\nMood Tracker!"}</Text>
          <Text style={styles.subtitle}>Track and manage your moods</Text>
          <Text style={styles.user}>Logged in as: {user.email}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f0f0f1"
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ff66ab",
    marginBottom: 10,
    textAlign: "center"
  },
  subtitle: {
    fontSize: 18,
    color: "#ff66ab",
    marginBottom: 20
  },
  user: {
    fontSize: 16,
    color: "#000",
    marginBottom: 10
  }
});
export default WelcomeScreen;