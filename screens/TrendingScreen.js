import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Linking } from "react-native";
import { Picker } from "@react-native-picker/picker";
import axios from "axios";

const TrendingScreen = () => {
    const [news, setNews] = useState([]);
    const [category, setCategory] = useState("crypto"); // Default to crypto

    const fetchNews = async () => {
        try {
            const API_KEY = "810b7c1e43a84bf68c448f74acf07f4e";
            const query = category === "crypto" ? "cryptocurrency" : "stocks";
            const response = await axios.get(`https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`);
            setNews(response.data.articles);
        } catch (error) {
            console.error("Error fetching news:", error);
        }
    };

    useEffect(() => {
        fetchNews();
    }, [category]);

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Trending News</Text>

            {/* News Category Filter */}
            <Picker selectedValue={category} onValueChange={(value) => setCategory(value)} style={styles.picker}>
                <Picker.Item label="Crypto" value="crypto" />
                <Picker.Item label="Stocks" value="stocks" />
            </Picker>

            {/* Twitter-style News Feed */}
            <FlatList
                data={news}
                keyExtractor={(item) => item.url}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => Linking.openURL(item.url)} style={styles.newsItem}>
                        <Text style={styles.newsTitle}>{item.title}</Text>
                        <Text style={styles.newsSource}>{item.source.name}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 10, backgroundColor: "#f8f8f8" },
    header: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
    picker: { height: 50, width: 200, marginBottom: 20 },
    newsItem: { backgroundColor: "#fff", padding: 15, marginBottom: 10, borderRadius: 5, elevation: 2 },
    newsTitle: { fontSize: 16, fontWeight: "bold" },
    newsSource: { fontSize: 12, color: "gray", marginTop: 5 }
});

export default TrendingScreen;
