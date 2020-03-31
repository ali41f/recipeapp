import React from 'react';
import {
  ImageBackground,
  ListRenderItemInfo,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { Button, List, Text } from '@ui-kitten/components';
import { ImageOverlay } from './extra/image-overlay.component';
import { data } from '../articlesdata'
import { Icon, TopNavigation, TopNavigationAction } from '@ui-kitten/components';

const BackIcon = (style) => (
  <Icon {...style} name='arrow-back' />
);

export default ({ route, navigation }) => {

  let [categoryState, setCategoryState] = React.useState(route.params?.category)

  let CategoryList = []
  if (route.params?.category) {
    data.forEach((d) => {
      if (d.category == route.params.category) {
        console.log(route.params.category)
        CategoryList.push(d)
      }
    })
  }

  let [headingArticle, ...listArticles] = categoryState ? CategoryList : data

  const isItemReverse = (index) => {
    return index % 2 === 1;
  };

  const onItemPress = (index) => {
    navigation && navigation.navigate('Article', {
      itemId: index
    });
  };

  const renderHeadingItem = () => (
    <ImageOverlay
      style={styles.headingArticleContainer}
      source={headingArticle.image}>
      <Text
        style={styles.headingArticleTitle}
        status='control'
        category='h3'>
        {headingArticle.title}
      </Text>
      <Text
        style={styles.headingArticleDescription}
        category='h6'
        status='control'>
        {headingArticle.description}
      </Text>
      <Button
        style={styles.readButton}
        status='control'
        onPress={() => onItemPress(headingArticle.id)}>
        READ
      </Button>
    </ImageOverlay>
  );

  const renderArticleItem = (info) => (
    <>
      <TouchableOpacity
        style={[styles.item, isItemReverse(info.index) && styles.itemReverse]}
        activeOpacity={0.95}
        onPress={() => onItemPress(info.item.id)}>
        <ImageBackground
          style={styles.itemSection}
          source={info.item.image}
        />
        <View style={styles.itemSection}>
          <Text
            style={styles.itemTitle}
            category='h5'>
            {info.item.title}
          </Text>
          <Text
            style={styles.itemCategory}
            category='h6'>
            {info.item.category}
          </Text>
        </View>
      </TouchableOpacity>
    </>
  );

  const navigateBack = () => {
    navigation.goBack();
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  );

  return (
    <>
      <TopNavigation
        title={route.params?.category ? route.params.category : "Popular"}
        alignment='center'
        leftControl={route.params?.category ? BackAction() : null} />
      <List
        style={styles.list}
        data={listArticles}
        renderItem={renderArticleItem}
        ListHeaderComponent={renderHeadingItem}
      />
    </>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  readButton: {
    width: '50%',
    marginTop: 32,
  },
  headingArticleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 300,
  },
  headingArticleTitle: {
    zIndex: 1,
    textAlign: 'center',
  },
  headingArticleDescription: {
    marginTop: 10,
    textAlign: 'center',
    zIndex: 1,
  },
  item: {
    flexDirection: 'row',
    minHeight: 100,
  },
  itemCategory: {
    marginTop: 10,
    fontStyle: 'italic'
  },
  itemReverse: {
    flexDirection: 'row-reverse',
  },
  itemSection: {
    flex: 1,
    padding: 16,
  },
  itemReactionsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 24,
    marginHorizontal: -8,
  },
  itemTitle: {
    flex: 1,
  },
  iconButton: {
    paddingHorizontal: 0,
  },
});
