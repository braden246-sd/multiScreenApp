import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
    borderRadius: 25,
  },

  profileInfo: {
    marginLeft: 16,
    flex: 1,
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
    fontWeight: 'bold',
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
    justifyContent: 'space-between',
    marginTop: 20,
  },

  switchButtons: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    height: 40,
    width: '32%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
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
    paddingBottom: 20,
  },

  postImage: {
    width: '32%',
    aspectRatio: 1,
    borderRadius: 10,
    marginBottom: 10,
    marginRight: '2%',
  },
});
