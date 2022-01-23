import React from 'react';
import { FlatList } from 'react-native';
import ListItems from '../components/ListItems';

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

function MessageScreen(props) {
    return (
      <FlatList
          data={message}
          keyExtractor={message => message.id.toString()}
          renderItem={({item}) => <ListItems title={item.title}
          subTitle={item.subTitle}
          image={item.image} />  }  /> 
    );
}

export default MessageScreen;