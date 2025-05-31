import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import React from "react";

// Import the logo image
import logo from "../assets/img/logo.png";

const Home = () => {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.title}>Saku Pintar</Text>
      <Text style={styles.subtitle}>
        Manage your finances so you have savings in the future
      </Text>
      <TouchableOpacity style={styles.button}>
        <Link href="/" style={styles.buttonText}>
          Log In
        </Link>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Link href="/" style={styles.buttonText}>
          Sign Up
        </Link>
      </TouchableOpacity>
      <Link href="/" style={styles.forgotPassword}>
        Forgot Password?
      </Link>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E9F4F1", // Light green background
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#5A74E2", // Blue color for the title
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#A0A0A0", // Light grey for the subtitle
    textAlign: "center",
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#5A74E2", // Blue color for buttons
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginBottom: 15,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    color: "white",
    fontWeight: "600",
  },
  forgotPassword: {
    fontSize: 14,
    color: "#5A74E2", // Blue color for the forgot password link
    textDecorationLine: "underline",
  },
});
