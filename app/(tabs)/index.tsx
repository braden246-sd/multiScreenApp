//this is the main home screen that shows stories at the top and posts below
//it uses StoryBubble and postcard reusable components

import { FlatList, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PostCard from '../../components/PostCard';
import StoryBubble from '../../components/StoryBubble';

const stories = [
  { id: '1', name: 'Alice', image: 'https://picsum.photos/200/200?1' },
  { id: '2', name: 'Bob', image: 'https://picsum.photos/200/200?2' },
  { id: '3', name: 'Cara', image: 'https://picsum.photos/200/200?3' },
];

const posts = [
  {
    id: '1',
    user: 'Alice',
    avatar: 'https://picsum.photos/200/200?1',
    image: 'https://picsum.photos/600/600?10',
    caption: 'Beautiful day outside!',
  },
  {
    id: '2',
    user: 'Bob',
    avatar: 'https://picsum.photos/200/200?2',
    image: 'https://picsum.photos/600/600?11',
    caption: 'Coffee time',
  },
];

export default function HomeScreen() {
  return (
    <SafeAreaView edges= {['bottom']} style={styles.screen}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.storiesRow}>
        {stories.map((story) => ( 
          <StoryBubble key={story.id} uri={story.image} name= {story.name} />
        ))}
      </ScrollView>

      <FlatList data={posts} keyExtractor={(item) => item.id} renderItem={({item}) => <PostCard post={item}/>} showsVerticalScrollIndicator={false} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',

  },
  storiesRow: {
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,

  },
});
