import { useState } from 'react';
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type Conversation = {
  id: string;
  name: string;
  message: string;
  time: string;
  image: string;
  unread: number;
};

const conversations: Conversation[] = [
  {
    id: '1',
    name: 'Alex Johnson',
    message: 'Hey! How are you doing?',
    time: '2m',
    image: 'https://i.pravatar.cc/150?img=12',
    unread: 2,
  },
  {
    id: '2',
    name: 'Sarah Williams',
    message: 'Are we still meeting tomorrow?',
    time: '15m',
    image: 'https://i.pravatar.cc/150?img=47',
    unread: 1,
  },
  {
    id: '3',
    name: 'Michael Brown',
    message: 'That photo looks amazing!',
    time: '1h',
    image: 'https://i.pravatar.cc/150?img=14',
    unread: 0,
  },
  {
    id: '4',
    name: 'Emily Davis',
    message: 'Thanks for your help yesterday!',
    time: '3h',
    image: 'https://i.pravatar.cc/150?img=44',
    unread: 0,
  },
  {
    id: '5',
    name: 'Daniel Wilson',
    message: 'Just sent you the pictures.',
    time: '5h',
    image: 'https://i.pravatar.cc/150?img=13',
    unread: 0,
  },
  {
    id: '6',
    name: 'Jessica Taylor',
    message: 'Sounds good! See you soon.',
    time: '1d',
    image: 'https://i.pravatar.cc/150?img=49',
    unread: 0,
  },
];

export default function ChatsScreen() {
  const [search, setSearch] = useState('');
  const [selectedChat, setSelectedChat] = useState<string | null>(null);

  const filteredConversations = conversations.filter((chat) =>
    chat.name.toLowerCase().includes(search.toLowerCase()) ||
    chat.message.toLowerCase().includes(search.toLowerCase())
  );

  const renderConversation = ({ item }: { item: Conversation }) => (
    <Pressable
      onPress={() => setSelectedChat(item.id)}
      style={({ pressed }) => [
        styles.conversation,
        pressed && styles.pressedConversation,
        selectedChat === item.id && styles.selectedConversation,
      ]}
    >
      <Image
        source={{ uri: item.image }}
        style={styles.avatar}
      />

      <View style={styles.conversationDetails}>
        <View style={styles.nameRow}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.time}>{item.time}</Text>
        </View>

        <View style={styles.messageRow}>
          <Text
            style={[
              styles.message,
              item.unread > 0 && styles.unreadMessage,
            ]}
            numberOfLines={1}
          >
            {item.message}
          </Text>

          {item.unread > 0 && (
            <View style={styles.unreadBadge}>
              <Text style={styles.unreadText}>
                {item.unread}
              </Text>
            </View>
          )}
        </View>
      </View>
    </Pressable>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Messages</Text>

      <View style={styles.searchContainer}>
        <Text style={styles.searchIcon}>⌕</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Search messages"
          placeholderTextColor="#888"
          value={search}
          onChangeText={setSearch}
          autoCapitalize="none"
        />
      </View>

      <FlatList
        data={filteredConversations}
        renderItem={renderConversation}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        keyboardShouldPersistTaps="handled"
        ListEmptyComponent={
          <Text style={styles.emptyText}>
            No conversations found.
          </Text>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111111',
    marginTop: 18,
    marginBottom: 20,
  },
  searchContainer: {
    backgroundColor: '#E8E8E8',
    borderRadius: 12,
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  searchIcon: {
    fontSize: 27,
    color: '#777777',
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#222222',
    height: '100%',
  },
  listContent: {
    paddingBottom: 25,
  },
  conversation: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
    borderRadius: 8,
  },
  pressedConversation: {
    backgroundColor: '#F5F5F5',
  },
  selectedConversation: {
    backgroundColor: '#F3F7FF',
  },
  avatar: {
    width: 55,
    height: 55,
    borderRadius: 28,
    marginRight: 15,
    backgroundColor: '#E8E8E8',
  },
  conversationDetails: {
    flex: 1,
  },
  nameRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111111',
    flexShrink: 1,
  },
  time: {
    fontSize: 12,
    color: '#999999',
    marginLeft: 10,
  },
  messageRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  message: {
    flex: 1,
    fontSize: 14,
    color: '#777777',
    marginRight: 10,
  },
  unreadMessage: {
    color: '#333333',
    fontWeight: '500',
  },
  unreadBadge: {
    backgroundColor: '#3478F6',
    minWidth: 21,
    height: 21,
    borderRadius: 11,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  unreadText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  emptyText: {
    textAlign: 'center',
    color: '#888888',
    fontSize: 15,
    marginTop: 35,
  },
});
