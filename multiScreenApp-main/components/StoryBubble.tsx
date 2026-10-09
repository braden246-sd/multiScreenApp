import { View, Text, Image, StyleSheet } from 'react-native';

interface StoryBubbleProps {
  uri: string;
  name: string;
}

export default function StoryBubble({uri, name}: StoryBubbleProps) {
    return (
        <View style ={styles.container}>

{/* blue ring around the story avatar */}
        <View style= {styles.ring}>
            <Image source={{uri}} style={styles.image} resizeMode="cover" />
        </View>
            <Text style = {styles.label} numberOfLines={1}> {name} </Text>

        </View>
    );
}

const styles = StyleSheet.create ({
    container: {
        alignItems: 'center',
        padding: 4,
    },

    ring: {
        width: 72,
        height: 72,
        borderRadius: 36,
        borderWidth: 3,
        borderColor: '#3b82f6',
        alignItems: 'center',
        justifyContent: 'center',
    },

    image: {
        width: 64,
        height: 64,
        borderRadius: 32,
    },

    label: {
        fontSize: 12,
        color: 'dark-gray',
        marginTop: 6,
    },
});