export default function Song({ song }: { song: any }) {
    console.log(song)

    const { title, artist, album } = song.song.common;

    return <div className="song-container">
        <p>{title} by {artist}</p>
        <p>{album}</p>
        <audio controls>
            <source src={song.location} type="audio/mp3" />
            Your browser does not support the audio element.
        </audio>
    </div>
}