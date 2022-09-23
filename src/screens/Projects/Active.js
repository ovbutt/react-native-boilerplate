import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { house, slidingDoor } from '../../theme/Images';
import { FontStyles } from '../../theme/styles/Fonts';
import ProjectListItem from '../../components/ProjectListItem';
import { Button } from '../../components';

const activeProjects = [
  {
    thumbnail: house,
    icon: slidingDoor,
    title: '2x Sliding Glass Doors',
    description: '2900 Bristol St, Costa Mesa, CA 92626',
    date: 'Aug 22, Aug 23, or Sep 1',
  },
  {
    thumbnail: house,
    icon: slidingDoor,
    title: '2x Sliding Glass Doors',
    description: '2900 Bristol St, Costa Mesa, CA 92626',
    date: 'Aug 22, Aug 23, or Sep 1',
  },
  {
    thumbnail: house,
    icon: slidingDoor,
    title: '2x Sliding Glass Doors',
    description: '2900 Bristol St, Costa Mesa, CA 92626',
    date: 'Aug 22, Aug 23, or Sep 1',
  },
  {
    thumbnail: house,
    icon: slidingDoor,
    title: '2x Sliding Glass Doors',
    description: '2900 Bristol St, Costa Mesa, CA 92626',
    date: 'Aug 22, Aug 23, or Sep 1',
  },
];

const Active = () => {
  return (
    <View>
      <Text style={[FontStyles.titleSmall, { marginTop: 20, marginLeft: 10 }]}>
        Today
      </Text>
      <FlatList
        data={activeProjects.slice(0, 3)}
        renderItem={({ item, index }) => (
          <ProjectListItem item={item} index={index} key={index} />
        )}
      />
      <Text style={[FontStyles.titleSmall, { marginTop: 20, marginLeft: 10 }]}>
        Wednesday, April 26
      </Text>
      <FlatList
        data={activeProjects}
        renderItem={({ item, index }) => (
          <ProjectListItem item={item} key={index} />
        )}
      />
    </View>
  );
};

export default Active;

const styles = StyleSheet.create({});
