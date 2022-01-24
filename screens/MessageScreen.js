import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import ListItems from '../components/ListItems';
import ItemSeparator from '../components/ItemSeparator';

const message = [
    {
        id: 1,
        title: "T1",
        description: "d1",
        image: require("../assets/johann.jpg")
    },
    {
        id: 2,
        title: "T2",
        description: "d2",
        image: require("../assets/johann.jpg")
    },
    {
        id: 3,
        title: "T3",
        description: "d3",
        image: require("../assets/johann.jpg")
    },
]

function MessageScreen() {
    return (
        <View style={styles.container}>
            <FlatList
                data={message}
                keyExtractor={(message) => message.id.toString()}
                renderItem={({ item }) => (
                    <ListItems
                        title={item.title}
                        subTitle={item.subTitle}
                        image={item.image}
                        onPress={()=> console.log(item.description)}
                    />
                )}
                ItemSeparatorComponent={ItemSeparator}
                />
    </View>

);
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flex: 1, 
    }
})

export default MessageScreen;