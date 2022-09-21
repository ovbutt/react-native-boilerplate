import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { FontStyles } from '../theme/styles/Fonts';
import { Button } from '../components';
import ProjectListItem from '../components/ProjectListItem';
import { house, slidingDoor } from '../theme/Images';

const claimProjects = [
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

const Home = () => {
  return (
    <View>
      <Text style={[FontStyles.titleSmall, { marginTop: 20 }]}>
        Claim Projects
      </Text>
      <FlatList
        data={claimProjects.slice(0, 3)}
        renderItem={({ item, index }) => (
          <ProjectListItem item={item} index={index} key={index} />
        )}
      />
      {/* {claimProjects.slice(0, 3).map((item, index) => (
        <ProjectListItem item={item} key={index} />
      ))} */}
      {claimProjects.length > 3 && (
        <View style={{ marginTop: 20 }}>
          <Button
            title={'View More'}
            color={null}
            buttonStyles={{ borderWidth: 1, borderColor: 'black' }}
            labelStyles={{ color: 'black' }}
          />
        </View>
      )}
      <Text style={[FontStyles.titleSmall, { marginTop: 20 }]}>
        Action Needed
      </Text>
      <FlatList
        data={claimProjects}
        renderItem={({ item, index }) => (
          <ProjectListItem item={item} key={index} />
        )}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
