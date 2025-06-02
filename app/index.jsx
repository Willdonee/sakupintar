import { useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { useRouter } from "expo-router";  // Hook untuk navigasi
import logo from "../assets/img/logo.png";

const SplashScreen = () => {
  const router = useRouter();  // Mengambil hook router

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/Login"); // Menavigasi ke Login setelah 5 detik
    }, 5000);

    return () => clearTimeout(timer); // Membersihkan timer saat komponen di-unmount
  }, [router]);

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.text}>Saku Pintar</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4E71FF", // Blue background for splash screen
  },
  text: {
    fontFamily: "Poppins",
    marginVertical: 10,
    fontSize: 52,
    color: "#ffffff",
    fontWeight: "bold",
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
});
