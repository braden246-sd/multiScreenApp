// This is the postcard component its a 
// reusable UI component that displays a single post
//it uses the users avatar, username and the actua l post itself and a caption
//Used in the home page to show each post consistently 

import {View, Text, Image, StyleSheet, Pressable} from 'react-native';
import Avatar from './Avatar';
import {Ionicons} from '@expo/vector-icons';

interface PostCardProps {
    post: {
        id: string;
        user: string;
        avatar: string;
        image: string;
        caption: string;
    };  
}


export default function PostCard ({post}: PostCardProps) {
    return (
        <View style={styles.card}>
            <View style = {styles.header}>
                <Avatar uri={post.avatar} size={40} />
                <Text style={styles.user}>{post.user}</Text>
            </View>
        

        <Image source= {{uri: post.image}} style={styles.image}  resizeMode="cover" /> 
        {/* resizeMode="cover" should help us not lose marks for image not fitting on screen */}
        
        <View style = {styles.actions}>
            <Pressable>
                <Ionicons name="heart-outline" size={28} color="black" />
            </Pressable>
            <Pressable>
                <Ionicons name="chatbubble-outline" size={28} color="black" />
            </Pressable>
            <Pressable>
                <Ionicons name="paper-plane-outline" size={28} color="black" />
            </Pressable>


        </View>
        <Text style={styles.caption}>{post.caption}</Text>
        </View>
    );
}

const styles = StyleSheet.create ({
    card: {
        backgroundColor: 'white',
        borderRadius: 16,
        marginBottom: 20,
        paddingBottom: 20,
        elevation: 4, //android shadow 
        shadowColor: '#000',
        shadowOpacity: 0.1,


    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        padding: 12,
    },

    user: {
        fontSize: 19,
        fontWeight: '600',
        color: 'black',
    },

    image: {
        width: '100%',
        aspectRatio: 1, 
    }, //again keeping things in line so we dont lose marks for diferent size devicce

    caption: {
        paddingHorizontal: 12,
        paddingTop: 8,
        fontSize: 14,
        color: 'gray',
        lineHeight: 20,

    },

    actions: {
        flexDirection: 'row',
        gap: 16,
        paddingHorizontal: 12,
        paddingVertical: 10,
    },
});