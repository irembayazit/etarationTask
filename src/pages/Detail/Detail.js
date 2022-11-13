import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Detail = ({route}) => {
  const item = route.params;
  console.log(JSON.stringify(item) + ' item');
  return (
    <View style={styles.container}>
      <Image source={{uri: item.avatar}} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.job}>{item.job}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
  },
  image: {
    resizeMode: 'cover',
    marginTop:10,
    width: 150,
    height: 300,
  },
  name: {
    fontSize: 30,
  },
  job: {
    fontSize: 20,
    color: '#888888',
    marginTop: 5,
  },
  description: {
    marginTop: 25,
    color: '#888888',
    marginLeft:15,
    marginRight:15,
  },
});

export default Detail;
