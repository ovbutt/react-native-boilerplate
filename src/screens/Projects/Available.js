import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { house, slidingDoor } from '../../theme/Images';
import ProjectListItem from '../../components/ProjectListItem';

const availableProjects = [
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

const Available = () => {
  return (
    <View>
      <FlatList
        data={availableProjects}
        renderItem={({ item, index }) => (
          <ProjectListItem item={item} index={index} key={index} />
        )}
      />
    </View>
  );
};

export default Available;

const styles = StyleSheet.create({});
