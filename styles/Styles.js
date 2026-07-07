import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    margin: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    elevation: 3,
  },

  titulo: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },

  descripcion: {
    fontSize: 15,
    color: "#666",
    marginBottom: 10,
  },

  botones: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});