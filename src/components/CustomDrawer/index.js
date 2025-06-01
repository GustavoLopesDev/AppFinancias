import React, {useContext} from 'react';
import {View, Text, Image} from 'react-native';

import {
  DrawerItemList,
  DrawerContentScrollView,
} from '@react-navigation/drawer';

import {AuthContext} from '../../contexts/auth';

export default function CustomDrarwer(props) {
  const {user} = useContext(AuthContext);

  return (
    <DrawerContentScrollView {...props}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 25,
        }}>
        <Image
          source={require('../../assets/Logo.png')}
          style={{width: 90, height: 90}}
          resizeMode="contain"
        />

        <Text style={{fontSize: 20, marginTop: 14}}>Bem Vindo!</Text>
        <Text
          style={{
            fontSize: 18,
            marginTop: 10,
            fontWeight: 'bold',
            paddingHorizontal: 20,
            textAlign: 'center',
          }}
          numberOfLines={1}>
          {user && user.name}
        </Text>
      </View>

      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}
