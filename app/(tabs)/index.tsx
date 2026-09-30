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
  { id: '4', name: 'Diana', image: 'https://picsum.photos/200/200?4' },
  { id: '5', name: 'Evan', image: 'https://picsum.photos/200/200?5' },
  { id: '6', name: 'Fiona', image: 'https://picsum.photos/200/200?6' },
  { id: '7', name: 'George', image: 'https://picsum.photos/200/200?7' },
  { id: '8', name: 'Hannah', image: 'https://picsum.photos/200/200?8' },
  { id: '9', name: 'Ivan', image: 'https://picsum.photos/200/200?9' },
  { id: '10', name: 'Julia', image: 'https://picsum.photos/200/200?10' },
];

const posts = [
  {
    id: '1',
    user: 'Alice',
    avatar: 'https://picsum.photos/200/200?1',
    image: 'https://picsum.photos/600/600?10',
    caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: '2',
    user: 'Bob',
    avatar: 'https://picsum.photos/200/200?2',
    image: 'https://picsum.photos/600/600?11',
    caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: '3',
    user: 'Cara',
    avatar: 'https://picsum.photos/200/200?3',
    image: 'https://picsum.photos/600/600?12',
    caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: '4',
    user: 'Diana',
    avatar: 'https://picsum.photos/200/200?4',
    image: 'https://picsum.photos/600/600?13',
    caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: '5',
    user: 'Evan',
    avatar: 'https://picsum.photos/200/200?5',
    image: 'https://picsum.photos/600/600?14',
    caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: '6',
    user: 'Fiona',
    avatar: 'https://picsum.photos/200/200?6',
    image: 'https://picsum.photos/600/600?15',
    caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: '7',
    user: 'George',
    avatar: 'https://picsum.photos/200/200?7',
    image: 'https://picsum.photos/600/600?16',
    caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: '8',
    user: 'Hannah',
    avatar: 'https://picsum.photos/200/200?8',
    image: 'https://picsum.photos/600/600?17',
    caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: '9',
    user: 'Ivan',
    avatar: 'https://picsum.photos/200/200?9',
    image: 'https://picsum.photos/600/600?18',
    caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: '10',
    user: 'Julia',
    avatar: 'https://picsum.photos/200/200?10',
    image: 'https://picsum.photos/600/600?19',
    caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
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
