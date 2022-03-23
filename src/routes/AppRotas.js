import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import ProdutorRotas from './ProdutorRotas';
import MelhoresProdRotas from './MelhoresProdRotas';

import coracao from '../assets/coracao.svg';
import home from '../assets/home.svg';

const Tab = createBottomTabNavigator();

export default function AppRotas() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarIcon: ({color}) => {
            let Icon = home;
            if (route.name === 'Melhores Produtores') {
              Icon = coracao;
            }
            return <Icon color={color} />;
          },
          tabBarActiveTintColor: '#2a9f85',
          tabBarInactiveTintColor: '#C7C7C7',
        })}>
        <Tab.Screen name="Home" component={ProdutorRotas} />
        <Tab.Screen name="Melhores Produtores" component={MelhoresProdRotas} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
