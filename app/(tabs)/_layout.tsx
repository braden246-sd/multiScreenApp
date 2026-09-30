import { Ionicons } from '@expo/vector-icons'; //used npm install @expo/vector-icons pretty cool tool
import { Tabs } from 'expo-router';

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{headerTitleAlign: 'left', tabBarActiveTintColor: 'black', tabBarInactiveTintColor: 'gray', headerRight: () => ( <Ionicons name= "search-outline" size={36} color="black" style = {{ marginRight: 16}}/>),}}>
      <Tabs.Screen name="index" options={{ title: 'Home', headerTitleStyle: { fontSize: 28, fontWeight: '700' }, tabBarIcon: ({color, size}) => 
        ( <Ionicons name="home-outline" size={size} color={color}/> ), 
        }}
      />
      <Tabs.Screen name="chats" options={{ title: 'Chats', headerTitleStyle: { fontSize: 28, fontWeight: '700' }, tabBarIcon: ({ color, size }) => ( <Ionicons name="chatbubble-outline" size={size} color={color} /> ),
     }}
     />
      <Tabs.Screen name="notifications" options={{ title: 'Notifications', headerTitleStyle: { fontSize: 28, fontWeight: '700' }, tabBarIcon: ({ color, size }) => (
            <Ionicons name="notifications-outline" size={size} color={color} />), 
          }}
          />
      <Tabs.Screen name="profile" options={{ title: 'Profile', headerTitleStyle: { fontSize: 28, fontWeight: '700' }, tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={size} color={color} />),
          }}
          />
    </Tabs>
  );
}
