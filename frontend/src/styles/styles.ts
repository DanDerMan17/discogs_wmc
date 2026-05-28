import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    title: {
        backgroundColor: '#6F3279',
        fontSize: 48,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 5,
        color: '#fff',
    },
    card: {
        flex: 1,
        margin: 4,
        marginTop: 50
    },
    image: {
        width: '75%',
        aspectRatio: 1,
        alignSelf: 'center',
    },
    label: {
        fontSize: 18,
        textAlign: 'center',
        marginTop: 4,
        fontStyle: 'italic',
    },
    button: {
        backgroundColor: '#6F3279',
        width: '10%',
        marginLeft: 15,
        marginTop: 15,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold',
        padding: 10,
    },
    text: {
        color: 'black',
        fontSize: 18,
        marginTop: 15,
        marginLeft: 15,
    }

})
;