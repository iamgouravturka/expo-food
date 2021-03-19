import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    return <View style={styles.background}>
        <Feather name="search" style = { styles.iconStyle } />
        <TextInput
        placeholder={'Search'}
        value={term}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
        style = {styles.inputStyle} />
    </View>
}

const styles = StyleSheet.create({
    background:{
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        marginVertical: 15,
        flexDirection: 'row',
    },
    inputStyle:{
         flex: 1,
         fontSize: 18,
    },
    iconStyle: {
        fontSize: 35,
         alignSelf: 'center',
         marginHorizontal: 15,
    }
})

export default SearchBar