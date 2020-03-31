
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
    createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {
    Icon,
    useTheme,
} from '@ui-kitten/components';
import { ArticleList3Screen } from '../screens/Categories'
import { Popular } from '../screens/Popular'


const Tab = createBottomTabNavigator();

export const MyTabs = () => {
    const theme = useTheme();
    return (
        <Tab.Navigator
            initialRouteName="Popular"
            tabBarOptions={{
                activeTintColor: theme['color-success-default'],
                labelStyle: {
                    fontSize: 14
                }
            }}
        >
            <Tab.Screen
                name="Categories"
                component={ArticleList3Screen}
                options={{
                    tabBarLabel: 'CATEGORIES',
                    tabBarIcon: ({ color }) => (
                        <Icon name='grid-outline' fill={color} width={24} height={24} />
                    )
                }}
            />
            <Tab.Screen
                name="Popular"
                component={Popular}
                options={{
                    tabBarLabel: 'POPULAR',
                    tabBarIcon: ({ color }) => (
                        <Icon name='heart' fill={color} width={24} height={24} />
                    )
                }}
            />
        </Tab.Navigator>
    );
}