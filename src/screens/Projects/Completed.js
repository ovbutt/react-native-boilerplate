import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { house, slidingDoor } from '../../theme/Images';
import ProjectListItem from '../../components/ProjectListItem';

const completedProjects = [
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

const Completed = () => {
  return (
    <View>
      <FlatList
        data={completedProjects}
        renderItem={({ item, index }) => (
          <ProjectListItem item={item} index={index} key={index} />
        )}
      />
    </View>
  );
};

export default Completed;

const styles = StyleSheet.create({});
