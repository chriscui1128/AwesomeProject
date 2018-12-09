import React  from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export class FlatListBasics extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={[
                        {key: 'Devin'},
                        {key: 'Jackson'},
                        {key: 'James'},
                        {key: 'Joel'},
                        {key: 'John'},
                        {key: 'Jillian'},
                        {key: 'Jimmy'},
                        {key: 'Julie'},
                    ]}
                    renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
                />
            </View>
        );
    }
}

/*the data props should have 'key' for reordering use, otherwise to setup keyExtractor */
export default class FlatListBasics1 extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={['Jackson', 'James', 'Jilliam', 'Jimmy', 'Joelsdf', 'John', 'Julie']}
                    renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
                    keyExtractor={(item, index) => index}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 40,
    },
})