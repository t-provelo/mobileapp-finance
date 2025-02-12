import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
} from "react-native";

export default function CommunitiesScreen() {
  const [search, setSearch] = useState("");
  const communities = ["Crypto Traders", "Stock Market", "DeFi Enthusiasts"];

  const filteredCommunities = communities.filter((community) =>
    community.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search Communities..."
        placeholderTextColor="#999"
        value={search}
        onChangeText={setSearch}
      />
      <FlatList
        data={filteredCommunities}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <Text style={styles.community}>{item}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    padding: 10,
  },
  searchBar: {
    backgroundColor: "#333",
    color: "white",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  community: {
    color: "white",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#444",
  },
});
