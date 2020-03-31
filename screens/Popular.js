import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

import PopularContent from './article-list-4/index';
import ArticleContent from './article-2/index';

const Stack = createStackNavigator();

export const Popular = ({ route, navigation }) => {

    return (
        <>
            <Stack.Navigator headerMode="none">
                <Stack.Screen
                    name="Popular"
                    initialParams={route.params?.category ? { category: route.params.category } : null}
                    component={PopularContent} />
                <Stack.Screen name="Article" component={ArticleContent} />
            </Stack.Navigator>
        </>
    );
};

