import React from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, Up, Down } from '../../redux/actions/itemAction';

const SimpsonsList = ({item, index, navigation}) => {
  const dispatch = useDispatch();

  const remove = index => {
    dispatch(removeItem(index))
  };

  const up = index => {
    dispatch(Up(index))
  };

  const down = index => {
    dispatch(Down(index))
  };

  const Detail = (item) => {
    navigation.navigate('Details',item)
  }

  return (
    <TouchableOpacity style={styles.container} onPress={() => Detail(item)}>
      <View style={styles.items}>
        <Text>{index + 1}</Text>
        <Image source={{uri: item.avatar}} style={styles.image}/>
        <Text style={styles.name}>{item.name}</Text>
      </View>
      <View style={styles.icons}>
        <TouchableOpacity onPress={() => up(index)}>
          <Icon name="arrow-up-circle-outline" size={20} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => down(index)}>
          <Icon name="arrow-down-circle-outline" size={20} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => remove(item.id)}>
          <Icon name="trash-can-outline" size={20} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    height: 60,
  },
  items: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  icons: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  image: {
    width: 20,
    height: 40,
    borderRadius: 10,
    marginLeft: 10,
    resizeMode: 'cover',
  },
  name: {
    marginLeft: 15,
  },
});
export default SimpsonsList;
