/**
 * Navigator App for Fleetbase
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import 'react-native-get-random-values';
import React from 'react';
import type { Node } from 'react';
import { Platform, Text, View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import CoreStack from './src/features/Core/CoreStack';
import { config } from './src/utils';
import Toast from 'react-native-toast-message';
import tailwind from 'tailwind';

const isAndroid = Platform.OS === 'android';
const Stack = createStackNavigator();
const linking = {
    prefixes: [config('APP_LINK_PREFIX'), ...config('app.linkingPrefixes')].filter(Boolean),
    config: {
        screens: {},
    },
};

const App: () => Node = () => {
    return (
        <>
            <NavigationContainer
                linking={linking}
                fallback={
                    <View style={tailwind('bg-gray-800 flex items-center justify-center w-full h-full')}>
                        <View style={tailwind('flex items-center justify-center')}>
                            <ActivityIndicator style={tailwind('mb-4')} />
                            <Text style={tailwind('text-gray-400')}>Loading...</Text>
                        </View>
                    </View>
                }>
                <Stack.Navigator>
                    <Stack.Screen name="CoreStack" component={CoreStack} options={{ headerShown: false, animationEnabled: false, gestureEnabled: false }} />
                </Stack.Navigator>
            </NavigationContainer>
            <Toast />
        </>
    );
};

export default App;
