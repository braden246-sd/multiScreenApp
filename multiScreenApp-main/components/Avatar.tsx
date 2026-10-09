import { Image, StyleSheet } from 'react-native';

interface AvatarProps {
    uri: string;
    size?: number;
}

export default function Avatar({ uri, size = 48}: AvatarProps) {
    return (
        <Image source= {{uri}} style={[styles.avatar, {width: size, height: size}]} />
    );
}

const styles = StyleSheet.create({
    avatar: { 
        borderRadius: 999, // circle shape from pic;
    },
});