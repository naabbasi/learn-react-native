import React from 'react';
import * as eva from '@eva-design/eva';
import {
  ApplicationProvider,
  Button,
  Layout,
  Input,
} from '@ui-kitten/components';

import {AppNavigator} from './components/navigation.component';

export const LoginScreen = () => {
  const [value, setValue] = React.useState();
  return (
    <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Input
        placeholder={'Place your Text'}
        value={value}
        onChangeText={(nextValue) => setValue(nextValue)}
      />
      <Button appearance={'outline'} title={value}>
        {value}
      </Button>
    </Layout>
  );
};

export default () => (
  <ApplicationProvider {...eva} theme={eva.dark}>
    <AppNavigator />
  </ApplicationProvider>
);
