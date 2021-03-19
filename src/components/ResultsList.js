import React from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import ResultsDetails from './ResultDetails'
import { withNavigation } from 'react-navigation'

const ResultsList = ({title, results, navigation }) => {

    if(!results.length) {
        return null;
    }

    return <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <FlatList
            horizontal
            data={results}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(result) => result.id}
            renderItem={({ item }) => {
                return <TouchableOpacity onPress={() => navigation.navigate('ResultShow', { id: item.id })}>
                    <ResultsDetails results={item} />
                </TouchableOpacity>
            }}
        />
    </View>
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15
    },
    container: {
        marginBottom: 10
    }
})

export default withNavigation(ResultsList)