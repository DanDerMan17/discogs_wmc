import {StatusBar} from 'expo-status-bar';
import {ActivityIndicator, FlatList, Image, Text, View} from 'react-native';
import {useEffect, useState} from "react";
import {IRecords} from "./src/models/IRecord";
import axios from "axios";
import {API_URL} from "./src/app.config";
import {styles} from "./src/styles/styles";

export default function App() {
    const [records, setRecords] = useState<IRecords[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        axios.get(API_URL)
            .then(res => setRecords(res.data))
            .catch(error => setError(error.message))
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <View style={styles.container}><ActivityIndicator/></View>;
    if (error) return <View style={styles.container}><ActivityIndicator/></View>;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Discogs HTL Kaindorf</Text>
            <FlatList
                data={records}
                keyExtractor={(item) => item.title}
                numColumns={4}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Image
                            source={{uri: item.coverUrl}}
                            style={styles.image}
                        />
                        <Text style={styles.label}>{item.artist} - {item.title} ({item.year})</Text>
                    </View>
                )}
            />
            <StatusBar style="auto"/>
        </View>
    );
}