import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { Picker } from "@react-native-picker/picker";
import axios from "axios";

const ChartsScreen = () => {
    const [chartData, setChartData] = useState([]);
    const [selectedAsset, setSelectedAsset] = useState("crypto"); // Default to crypto
    const [timeInterval, setTimeInterval] = useState("5min"); // Default interval
    const [loading, setLoading] = useState(false);

    // API Keys
    const STOCKS_API_KEY = "S887RJC0LM1DZBYI";
    const CRYPTO_API_KEY = "9FTENM4NHOYZBNTE";

    const fetchData = async () => {
        setLoading(true);
        try {
            let response;
            if (selectedAsset === "crypto") {
                response = await axios.get(
                    `https://www.alphavantage.co/query?function=CRYPTO_INTRADAY&symbol=BTC&market=USD&interval=${timeInterval}&apikey=${CRYPTO_API_KEY}`
                );
                const timeSeries = response.data["Time Series Crypto (5min)"] || {};
                const prices = Object.keys(timeSeries).map(time => parseFloat(timeSeries[time]["1. open"]));
                setChartData(prices);
            } else {
                response = await axios.get(
                    `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=TSLA&interval=${timeInterval}&apikey=${STOCKS_API_KEY}`
                );
                const timeSeries = response.data["Time Series (5min)"] || {};
                const prices = Object.keys(timeSeries).map(time => parseFloat(timeSeries[time]["1. open"]));
                setChartData(prices);
            }
        } catch (error) {
            console.error("Error fetching chart data:", error);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchData();
    }, [selectedAsset, timeInterval]);

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Market Charts</Text>

            {/* Asset Selection */}
            <Picker selectedValue={selectedAsset} onValueChange={(value) => setSelectedAsset(value)} style={styles.picker}>
                <Picker.Item label="Crypto" value="crypto" />
                <Picker.Item label="Stocks" value="stocks" />
            </Picker>

            {/* Time Interval Selection */}
            <Picker selectedValue={timeInterval} onValueChange={(value) => setTimeInterval(value)} style={styles.picker}>
                <Picker.Item label="5 Minutes" value="5min" />
                <Picker.Item label="10 Minutes" value="10min" />
                <Picker.Item label="15 Minutes" value="15min" />
                <Picker.Item label="30 Seconds" value="30s" />
                <Picker.Item label="1 Minute" value="1min" />
            </Picker>

            {/* Chart Display */}
            {loading ? (
                <ActivityIndicator size="large" color="#0000ff" />
            ) : (
                <LineChart
                    data={{
                        labels: Array(chartData.length).fill(""),
                        datasets: [{ data: chartData }]
                    }}
                    width={350}
                    height={220}
                    chartConfig={{
                        backgroundColor: "#000",
                        backgroundGradientFrom: "#1E2923",
                        backgroundGradientTo: "#08130D",
                        decimalPlaces: 2,
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`
                    }}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#f0f0f0" },
    header: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
    picker: { height: 50, width: 250, marginBottom: 20 }
});

export default ChartsScreen;
