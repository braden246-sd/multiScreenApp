import { Image, FlatList } from 'react-native';
import {styles} from '../styles/profileStyles'

interface PostItem {
  id: string;
  uri: string;
}

const images: PostItem[] = Array.from({ length: 30 }, (_, i) => ({
  id: i.toString(),
  uri: `https://picsum.photos/200/200?${i + 2}`,
}));

export default function PostsGrid() {
  return (
    <FlatList
      data={images}
      keyExtractor={(item) => item.id}
      numColumns={3}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => (
        <Image source={{ uri: item.uri }} style={styles.postImage} />
      )}
    />
  );
}
