import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import CategoriesContent from './article-list-3/index';
import { Popular } from './Popular';

const Stack = createStackNavigator();

export const ArticleList3Screen = ({ route, navigation }) => {

  return (
    <>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Categories"
          component={CategoriesContent} />
        <Stack.Screen
          name="CategoryList"
          component={Popular}
        />
      </Stack.Navigator>
    </>
  );
};

