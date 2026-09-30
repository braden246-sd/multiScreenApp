// This is the postcard component its a 
// reusable UI component that displays a single post
//it uses the users avatar, username and the actua l post itself and a caption
//Used in the home page to show each post consistently 

import { Ionicons } from '@expo/vector-icons';
import { Image, StyleSheet, Text, View } from 'react-native';
import Avatar from './Avatar';

interface PostCardProps {
    post: {
        id: string;
        user: string;
        avatar: string;
        image: string;
        caption: string;
    };  
}

//this is the start of a function that makes a random count next to the icons
// i put something that will keep it simple so theres not overflow for example 23k or 23M instead of 23000/23000000
function countFormat(n:number) {
    if (n < 1000 ) return String(n);
    if (n < 1000000) return Math.floor(n / 1000) + "k";
    return Math.floor(n / 1000000) + "m";
}

export default function PostCard ({post}: PostCardProps) {
//these are the random numbers for likes comments and shares
// added mulitples because was returning 0 without it
    const likes = Math.floor(Math.random() * 5000);
    const comments = Math.floor(Math.random() * 500 );
    const shares = Math.floor(Math.random() * 200);


    return (
        <View style={styles.card}>
            <View style = {styles.header}>
                <Avatar uri={post.avatar} size={40} />
                <Text style={styles.user}>{post.user}</Text>
                <Ionicons name="ellipsis-horizontal" size={22} color="black" style={{ marginLeft: 'auto' }} />
            </View>
        

        <Image source= {{uri: post.image}} style={styles.image}  resizeMode="cover" /> 
        {/* resizeMode="cover" should help us not lose marks for image not fitting on screen */}
        
        <View style = {styles.actions}>
            <View style={styles.actionItem}>    
                <Ionicons name="heart-outline" size={24} color="black" />
                <Text style={styles.count}>{countFormat(likes)}</Text>
            </View>

            <View style={styles.actionItem}>    
                <Ionicons name="chatbubble-outline" size={24} color="black" />
                <Text style={styles.count}>{countFormat(comments)}</Text>
            </View>

            <View style={styles.actionItem}>    
                <Ionicons name="paper-plane-outline" size={24} color="black" />
                <Text style={styles.count}>{countFormat(shares)}</Text>
            </View>
        


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
        elevation: 6, //android shadow 
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
        gap: 24,
        paddingHorizontal: 12,
        paddingVertical: 10,
    },

    actionItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
    },

    count: {
        fontSize: 14,
        color: 'black',

    },
});