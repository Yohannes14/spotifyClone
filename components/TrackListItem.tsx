import { usePlayerContext } from '@/providers/PlayerProvider'
import { Track } from '@/types'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
type TrackListItemProps = {
    track: Track
}

const TrackListItem = ({ track }: TrackListItemProps) => {
    const { setTrack } = usePlayerContext();

    return (
        <Pressable onPress={() => setTrack(track)} style={styles.container}>
            <Image
                source={{ uri: track.album.images[0]?.url }}
                style={styles.image}
            />
            <View style={{ flex: 1 }}>
                <Text style={styles.title}>{track.name}</Text>
                <Text style={styles.subtilte}>{track.artists[0]?.name}</Text>
            </View>
        </Pressable>
    )
}

export default TrackListItem

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
        padding: 5,
        width: '100%'
    },
    title: {
        color: 'black',
        fontWeight: '500',
        fontSize: 16,
    },
    subtilte: {
        color: 'gray'
    },
    image: {
        width: 50,
        aspectRatio: 1,
        borderRadius: 5,
        marginRight: 10,


    }
})