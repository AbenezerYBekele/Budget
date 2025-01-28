import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "@/app/Style";

export default function App() {
  const [transactions, setTransactions] = useState([]);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [extraBalance, setExtraBalance] = useState(0);

  useEffect(() => {
    const loadData = async () => {
      const savedTransactions = await AsyncStorage.getItem("transactions");
      const savedBalance = await AsyncStorage.getItem("extraBalance");
      if (savedTransactions) {
        setTransactions(JSON.parse(savedTransactions));
      }
      if (savedBalance) {
        setExtraBalance(parseFloat(savedBalance));
      }
    };
    loadData();
  }, []);

  const income = transactions
    .filter((t) => t.amount > 0)
    .reduce((sum, t) => sum + t.amount, 0);
  const expenses = transactions
    .filter((t) => t.amount < 0)
    .reduce((sum, t) => sum + Math.abs(t.amount), 0);
  const balance = income - expenses;

  const saveData = async () => {
    await AsyncStorage.setItem("transactions", JSON.stringify(transactions));
    await AsyncStorage.setItem("extraBalance", extraBalance.toString());
  };

  const addTransaction = () => {
    if (!description || !amount) return;
    const newTransaction = {
      id: Date.now().toString(),
      description,
      amount: parseFloat(amount),
    };
    const newTransactions = [...transactions, newTransaction];
    setTransactions(newTransactions);
    saveData();
    setDescription("");
    setAmount("");
  };

  const deleteTransaction = (id) => {
    const updatedTransactions = transactions.filter((t) => t.id !== id);
    setTransactions(updatedTransactions);
    saveData();
  };

  const addMoney = () => {
    if (!amount) return;
    const newBalance = extraBalance + parseFloat(amount);
    setExtraBalance(newBalance);

    const newTransaction = {
      id: Date.now().toString(),
      description: `+ ${description}`,
      amount: parseFloat(amount),
    };
    setDescription("");

    const newTransactions = [...transactions, newTransaction];
    setTransactions(newTransactions);
    saveData();
    setDescription("");
    setAmount("");
  };

  const subtractMoney = () => {
    if (!amount) return;
    const newBalance = extraBalance - parseFloat(amount);
    setExtraBalance(newBalance);

    const newTransaction = {
      id: Date.now().toString(),
      description: `- ${description}`,
      amount: -parseFloat(amount),
    };

    const newTransactions = [...transactions, newTransaction];
    setTransactions(newTransactions);
    saveData();
    setDescription("");
    setAmount("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.TitleContainer}>
        <Text style={styles.Title}>Budget</Text>
      </View>

      <View style={styles.TitleContainer}>
        <Text style={styles.balance}>Balance: $ {balance.toFixed(2)}</Text>
      </View>

      <View style={styles.overview}>
        <Text style={[{ color: "darkgreen" }, styles.Text]}>
          Income: ${income.toFixed(2)}
        </Text>
        <Text style={[{ color: "darkred" }, styles.Text]}>
          Expenses: ${expenses.toFixed(2)}
        </Text>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      <TextInput
        style={styles.input}
        placeholder="Amount "
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />

      <View style={styles.buttonGroup}>
        <TouchableOpacity
          style={[{ backgroundColor: "green" }, styles.buttonText]}
          onPress={addMoney}
        >
          <Text style={styles.buttonText}>Add Money</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[{ backgroundColor: "red" }, styles.buttonText]}
          onPress={subtractMoney}
        >
          <Text style={styles.buttonText}>Subtract Money</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={[
              styles.transaction,
              item.amount > 0 ? styles.incomeItem : styles.expenseItem,
            ]}
          >
            <Text>{item.description}</Text>
            <Text>{item.amount > 0 ? `+${item.amount}` : item.amount}</Text>
            <TouchableOpacity onPress={() => deleteTransaction(item.id)}>
              <Text style={styles.deleteButton}>X</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
