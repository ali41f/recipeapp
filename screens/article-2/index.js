import React from 'react';
import { ImageBackground, View } from 'react-native';
import {
  Avatar,
  Button,
  Divider,
  Layout,
  StyleService,
  Text,
  useStyleSheet,
} from '@ui-kitten/components';
import { data } from '../articlesdata'
import { Icon, TopNavigation, TopNavigationAction } from '@ui-kitten/components';

const BackIcon = (style) => (
  <Icon {...style} name='arrow-back' />
);
//const data = Article.howToEatHealthy();


export default ({ route, navigation }) => {

  const styles = useStyleSheet(themedStyles);

  const { itemId } = route.params;

  let dataArticle = {}
  data.forEach((d) => {
    if (d.id == itemId) {
      dataArticle = d
    }
  })
  //console.log(dataArticle, null, 4)
  const navigateBack = () => {
    navigation.goBack();
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  );
  return (
    <>
      <TopNavigation
        title="Salad"
        alignment='center'
        leftControl={BackAction()} />
      <Layout
        style={styles.container}
        level='2'>
        <ImageBackground
          style={styles.headerContainer}
          source={dataArticle.image}>
        </ImageBackground>
        <Layout
          style={styles.contentContainer}
          level='1'>
          <Text
            style={styles.titleLabel}
            category='h5'>
            {dataArticle.title}
          </Text>
          <Text>
            {dataArticle.content}
          </Text>
        </Layout>
      </Layout>
    </>
  );
};

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    height: 192,
    zIndex: 1,
  },
  authorPhoto: {
    position: 'absolute',
    left: 24,
    bottom: -24,
    borderWidth: 2,
    borderColor: 'border-basic-color-2',
  },
  titleLabel: {
    marginTop: 48,
    marginBottom: 24,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 24,
  },
  dateIcon: {
    width: 24,
    height: 24,
    tintColor: 'text-hint-color',
  },
  dateLabel: {
    flex: 1,
    marginHorizontal: 8,
  },
  activityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  reactionButton: {
    paddingHorizontal: 0,
  },
});
