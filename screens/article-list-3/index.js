import React from 'react';
import { StyleSheet as RNStyleSheet, View } from 'react-native';
import { Button, Card, List, Text } from '@ui-kitten/components';
import { ImageOverlay } from './extra/image-overlay.component';

import { categoriesData } from '../CategoriesData'


export default ({ navigation }) => {

  const onItemPress = (index, category) => {
    navigation && navigation.navigate('CategoryList', { category });
  };

  const renderItem = (info) => (
    <Card
      style={styles.item}
      onPress={() => onItemPress(info.index, info.item.category)}>
      <ImageOverlay
        style={styles.itemImage}
        source={info.item.image}>
        <Text
          style={styles.itemTitle}
          category='h2'
          status='control'>
          {info.item.title}
        </Text>
        <Text
          style={styles.itemDescription}
          category='s1'
          status='control'>
          {info.item.description}
        </Text>
      </ImageOverlay>
    </Card>
  );

  return (
    <List
      style={styles.list}
      contentContainerStyle={styles.listContent}
      data={categoriesData}
      renderItem={renderItem}
    />
  );
};

const styles = RNStyleSheet.create({
  list: {
    flex: 1,
  },
  listContent: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  item: {
    marginVertical: 8,
    height: 200,
  },
  itemImage: {
    ...RNStyleSheet.absoluteFillObject,
    height: 200,
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
  itemTitle: {
    zIndex: 1,
  },
  itemDescription: {
    zIndex: 1,
    marginVertical: 16,
  },
  itemFooter: {
    position: 'absolute',
    flexDirection: 'row',
    left: 8,
    bottom: 8,
  },
  iconButton: {
    paddingHorizontal: 0,
  },
});

