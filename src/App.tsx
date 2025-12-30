import { songs } from "../songs";
import Song from "./Song";

function App() {

  return (
    <>
      <h1>Moran Music</h1>
      {songs.map(song => <Song song={song} key={song.location} />)}
    </>
  )
}

export default App
