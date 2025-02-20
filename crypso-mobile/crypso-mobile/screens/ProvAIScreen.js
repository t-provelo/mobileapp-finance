import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";

export default function ProvAIScreen() {
  const [messages, setMessages] = useState([
    { id: "1", text: "Welcome to ProvAI! Ask me anything." },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = { id: Date.now().toString(), text: input };
    setMessages([...messages, userMessage]);

    setTimeout(() => {
      const aiResponse = {
        id: Date.now().toString() + "-ai",
        text: "I'm still learning! More updates coming soon.",
      };
      setMessages((prevMessages) => [...prevMessages, aiResponse]);
    }, 1000);

    setInput("");
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={styles.message}>{item.text}</Text>
        )}
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type a message..."
          placeholderTextColor="#999"
          value={input}
          onChangeText={setInput}
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Text style={styles.sendText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    padding: 10,
  },
  message: {
    color: "white",
    padding: 10,
    marginVertical: 5,
    backgroundColor: "#222",
    borderRadius: 10,
    alignSelf: "flex-start",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#444",
    padding: 10,
  },
  input: {
    flex: 1,
    backgroundColor: "#333",
    color: "white",
    padding: 10,
    borderRadius: 20,
  },
  sendButton: {
    backgroundColor: "#1e90ff",
    padding: 10,
    borderRadius: 10,
    marginLeft: 10,
  },
  sendText: {
    color: "white",
  },
});
