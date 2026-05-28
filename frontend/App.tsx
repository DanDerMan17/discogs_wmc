import {StatusBar} from 'expo-status-bar';
import {ActivityIndicator, FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {useEffect, useState} from "react";
import {IRecords} from "./src/models/IRecord";
import axios from "axios";
import {API_URL} from "./src/app.config";
import {styles} from "./src/styles/styles";
import {Picker} from "@react-native-picker/picker";
import {Genre} from "./src/models/enums";

export default function App() {
    const [records, setRecords] = useState<IRecords[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [genre, setGenre] = useState<Genre | 'all'>('all');
    const [sortedByYear, setSortedByYear] = useState(false);

    useEffect(() => {
        axios.get(API_URL)
            .then(res => setRecords(res.data))
            .catch(error => setError(error.message))
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <View style={styles.container}><ActivityIndicator/></View>;
    if (error) return <View style={styles.container}><Text>{error}</Text></View>;

    const filteredRecords = genre === 'all'
        ? records
        : records.filter(r => r.genre === genre);

    const displayedRecords = sortedByYear
        ? [...filteredRecords].sort((a, b) => a.year - b.year)
        : filteredRecords;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Discogs HTL Kaindorf</Text>

            <TouchableOpacity
                style={styles.button}
                onPress={() => setSortedByYear(prev => !prev)}>
                <Text style={styles.buttonText}>{sortedByYear ? 'Unsort' : 'Sort by year'}</Text>
            </TouchableOpacity>

            <Text style={styles.text}>filter:</Text>
            <Picker
                style={{width: '15%', marginLeft: 15}}
                selectedValue={genre}
                onValueChange={(value) => setGenre(value as Genre | 'all')}
            >
                <Picker.Item label="All Genres" value="all"/>
                {Object.values(Genre).map((g) => (
                    <Picker.Item key={g} label={g.replace("_", " ")} value={g}/>
                ))}
            </Picker>

            <FlatList
                data={displayedRecords}
                keyExtractor={(item) => item.title}
                numColumns={4}
                renderItem={({item}) => (
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