import React from 'react';
import { Text, StyleSheet, FlatList, View } from 'react-native';

const ListScreen = () => {
  const friends = [
    { name: "Friend # 1", age: 20, key: "1" },
    { name: "Friend # 2", age: 22, key: "2" },
    { name: "Friend # 3", age: 25, key: "3" },
    { name: "Friend # 4", age: 26, key: "4" },
    { name: "Friend # 5", age: 24, key: "5" },
    { name: "Friend # 6", age: 28, key: "6" },
    { name: "Friend # 7", age: 24, key: "7" },
  ];
  return (
    // <FlatList
    //   // keyExatactor={(friend) => friend.name} // recommanded
    //   horizontal // horizontal scrolling
    //   // showsHorizontalScrollIndicator={false} // hide scrollbar when no in use
    //   data={friends}
    //   renderItem={({ item }) => <Text style={styles.textStyle}>{item.name}</Text>}
    // />
    <FlatList
      data={friends}
      renderItem={({ item }) => (
        <View>
          <Text>{item.name}</Text>
          <Text>{item.age}</Text>
        </View>
      )}
    />
  );
};

//Keys are used by the react native just for performance perspective
// If we do not use keys when rendering list of record and we try to remove
// an item then what happen the react native first remove all the record and see
// what removed then render all the other. but if we use the keys then
// react just remove the item that we delete and that's it.

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50
  }
});

export default ListScreen;
