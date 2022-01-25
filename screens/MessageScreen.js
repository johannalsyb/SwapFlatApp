import React, { useState } from "react";
import { FlatList, View, StyleSheet } from "react-native";
import ListItems from "../components/ListItems";
import ItemSeparator from "../components/ItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

const initialMessages = [
  {
    id: 1,
    title: "T1",
    description: "d1",
    image: require("../assets/johann.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "d2",
    image: require("../assets/johann.jpg"),
  },
  {
    id: 3,
    title: "T3",
    description: "d3",
    image: require("../assets/johann.jpg"),
  },
];

function MessageScreen(props) {
 const [refreshing, setRefreshing] = useState(false);
  const [messages, setMessages] = useState(initialMessages);
  const handleDelete = message => {
    const newMessages = messages.filter(m=> m.id !== message.id);
    setMessages(newMessages);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItems
            title={item.title}
            subTitle={item.subTitle}
            image={item.image}
            onPress={() => console.log("tapped")}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
            setMessages([
                {
    id: 2,
    title: "T2",
    description: "d2",
    image: require("../assets/johann.jpg"),
  },
            ]) 
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
  },
});


export default MessageScreen;
