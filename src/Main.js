import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Detail from './pages/Detail/Detail';
import Simpsons from './pages/Home/Simpsons';
import Record from './pages/Record/Record';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import SplashScreen from 'react-native-splash-screen'
import RNBootSplash from "react-native-bootsplash";
import {store} from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore, persistReducer } from 'redux-persist';

function Main() {
  let persistor = persistStore(store)


  const Stack = createStackNavigator();
  SplashScreen.hide();
  RNBootSplash.hide();

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Simpsons" component={Simpsons} />
            <Stack.Screen name="Details" component={Detail} />
            <Stack.Screen name="Add New Character" component={Record} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default Main;
