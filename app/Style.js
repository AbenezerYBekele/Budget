import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "blanchedalmond" },
  Title: {
    flex: 1,
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "center",
  },
  TitleContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 10,
    marginBottom: 20,
    borderRadius: 30,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
  },
  balance: { fontSize: 20, marginBottom: 20, fontWeight: "bold" },
  overview: {
    justifyContent: "space-around",
    marginBottom: 20,
    fontSize: 20,
  },
  Text: {
    fontSize: 20,
  },

  input: {
    backgroundColor: "#fff",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    margin: 5,
    borderRadius: 20,
  },
  transaction: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  incomeItem: { backgroundColor: "#DFF6DD" },
  expenseItem: { backgroundColor: "#FFDDDD" },
  deleteButton: { color: "red", fontWeight: "bold" },
  buttonGroup: { flexDirection: "row", justifyContent: "center" },
});

export default styles;
