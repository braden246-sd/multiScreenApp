import PostGrid from '../../components/PostsGrid';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function ProfileScreen() {
  return (
    <SafeAreaView edges= {['bottom']} style={styles.screen}>
    <View style={styles.header}>
        <Ionicons name="chevron-back-outline" size = {32}></Ionicons>
        
        <TextInput placeholder="Search" style={styles.searchBar}></TextInput>

      </View>
      <View style = {styles.profileBio}>
        
        <Image source={{uri: 'https://picsum.photos/200/200?1'}} style={styles.avatar}></Image>
        <View style={styles.profileInfo}>
          <Text style={styles.username}>Micheal Stark <Ionicons name= "checkmark-circle" size = {24} color={'blue'}></Ionicons></Text>
          <Text style = {styles.subHeading}>AI developer</Text>
          <Text style = {styles.subHeading}>www.michealstark.com</Text>
        <View style={styles.followsRow}>
          <View style={styles.followsColumn}>
            <Text style={styles.followers}>18K</Text>
            <Text style={styles.subHeading2}>Followers</Text>
          </View>
          <View style={styles.followsColumn}>
            <Text style={styles.followers}>1K</Text>
            <Text style={styles.subHeading2}>Following</Text>
          </View>
        </View>
      </View>
    </View>

    

    <Text style = {styles.bio}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
    <View style={styles.followSettings}>
    <Pressable style={styles.followButton}>
      <Text style={styles.followText}> + Follow </Text>
    </Pressable>
    <Ionicons name="ellipsis-horizontal" size={32} color="black" style={{ marginTop: 20, alignSelf: 'flex-end' }} />

    </View>

    <View style= {styles.posts}>
      <Pressable style= {styles.switchButtons}>
        <Ionicons name="grid-outline" size={24} color="#19bad7"  />
        <Text style={styles.buttonSelected}>Posts</Text>
      </Pressable>
      <Pressable style= {styles.switchButtons}>
        <Ionicons name="play-circle-outline" size={24} color="grey"  />
        <Text style={styles.buttonText}>Videos</Text>
      </Pressable>
      <Pressable style= {styles.switchButtons}>
        <Ionicons name="pricetag-outline" size={24} color="grey"  />
        <Text style={styles.buttonText}>Tags</Text>
      </Pressable>

    </View>

    <PostGrid/>



      

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',

  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
  },
  searchBar: {
    flex: 1,
    height: 40,
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    paddingHorizontal: 16,
    marginLeft: 12,
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 8,
    marginLeft: 10,
  

  },
  profileBio: {
    marginTop: 20,
    flexDirection: 'row',
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius:25,
  },
  profileInfo: {
    marginLeft: 16,
    flex: 1,
    flexDirection: 'column',
  },
  followsRow: {
    flexDirection: 'row',
    marginTop: 20,
  },
  followsColumn: {
   
    marginLeft: 10,
    alignItems: 'flex-start',
  },

  followers: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
    alignItems: 'flex-start',
  },
  subHeading: {
    fontSize: 16,
    color: 'gray',
    marginLeft: 10,
  },
  subHeading2: {
    fontSize: 16,
    color: 'gray',
  },
  bio: {
    fontSize: 14,
    color: 'gray',
    marginTop: 20,
    
  },
  followButton: {
    marginTop: 20,
    backgroundColor: '#3b82f6',
    borderRadius: 20,
    height: 40,
    flex: 1,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  followText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    
  },
  followSettings: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  posts: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    
    
  },
  switchButtons: {
    
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    height: 40,
    width: '32%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    marginTop: 10,
    marginLeft: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: 'grey',
    fontSize: 16,
    marginLeft: 8,
  },
  buttonSelected: {
    color: '#19bad7',
    fontSize: 16,
    marginLeft: 8,
  },
  postsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  postImage: {
    width: '32%',
    aspectRatio: 1,
    height: '32%',
    marginBottom: 10,
    borderRadius: 10,
  },  
});
