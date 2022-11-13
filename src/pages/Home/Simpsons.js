import {
  FlatList,
  SafeAreaView,
  SafeAreaViewBase,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import SimpsonsList from './SimpsonsList';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux'; 
import { addItems, listItems } from '../../redux/actions/itemAction'

const Simpsons = ({navigation}) => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.list);

  const RenderItem = ({item, index}) => {
    return <SimpsonsList item={item} index={index} navigation={navigation} />;
  };

  const addRecord = () => {
    navigation.navigate('Add New Character');
  };

  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <FlatList
          data={state} 
          renderItem={RenderItem}
          keyExtractor={item => item.id}
        />
        <TouchableOpacity
          style={{alignItems: 'center'}}
          onPress={() => addRecord()}>
          <Icon name="plus-circle" size={60} style={{color: '#2d86de'}} />
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

export default Simpsons;
