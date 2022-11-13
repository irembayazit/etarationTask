import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSelector, useDispatch} from 'react-redux';
import {addItems, listItems} from '../../redux/actions/itemAction'
import { keyBy } from 'lodash';

const Record = ({navigation}) => {
  const nameRef = useRef();
  const jobRef = useRef();
  const aboutRef = useRef();
  const imageRef = useRef();

  const [name, setName] = useState();
  const [job, setJob] = useState();
  const [about, setAbout] = useState();
  const [image, setImage] = useState();

  //redux-persist buna bak async storage i baya kolay kullanmımlı hale getiriyor
  const dispatch = useDispatch();

  const addRecord = async () => {
    const data = {id:1, name: name, job: job, about: about, avatar: image};
    dispatch(addItems(data))
    await navigation.navigate('Simpsons')
  };

  return (
    <View style={styles.container}>
      <Text style={styles.name}>Name Surname:</Text>
      <TextInput
        ref={nameRef}
        onChangeText={value => setName(value)}
        style={styles.input}
      />
      <Text style={styles.name}>Job Title:</Text>
      <TextInput
        ref={jobRef}
        onChangeText={value => setJob(value)}
        style={styles.input}
      />
      <Text style={styles.name}>About Him/Her:</Text>
      <TextInput
        ref={aboutRef}
        onChangeText={value => setAbout(value)}
        style={styles.inputAbout}
      />
      <Text style={styles.name}>Image Link:</Text>
      <TextInput
        ref={imageRef}
        onChangeText={value => setImage(value)}
        style={styles.input}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText} onPress={() => addRecord()}>
          Add Character
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    marginLeft: 5,
  },
  name: {
    marginLeft: 10,
  },
  input: {
    backgroundColor: 'white',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    marginBottom: 20,
    height: 40,
    borderStyle: 1,
    borderRadius: 5,
  },
  inputAbout: {
    backgroundColor: 'white',
    height: 100,
    margin: 10,
    marginTop: 5,
    marginBottom: 20,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#2d86de',
    padding: 15,
    borderRadius: 5,
    margin: 10,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
  },
});

export default Record;
