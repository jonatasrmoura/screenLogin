import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import{ createStackNavigator } from '@react-navigation/stack';

import Login from '../screens/Login';

const { Navigator, Screen } = createStackNavigator();

function AppStack () {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }}>
                <Screen name="Login" component={Login} />
            </Navigator>
        </NavigationContainer>
    );
}

export default AppStack;
