import React from 'react';
import {SafeAreaView} from 'react-native';
import {Button, Divider, Layout, TopNavigation} from '@ui-kitten/components';

export const HomeScreen = ({navigation}) => {
  const navigateDetails = () => {
    navigation.navigate('Details');
  };

  const navigateLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <TopNavigation title="Login" alignment="center" />
      <Divider />
      <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Button onPress={navigateDetails}>OPEN DETAILS</Button>
        <Divider />
        <Button onPress={navigateLogin}>Login Screen</Button>
      </Layout>
    </SafeAreaView>
  );
};
