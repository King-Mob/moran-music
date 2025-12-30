import { readdir, writeFile } from "fs/promises";
import { parseFile } from "music-metadata";

const getSong = async (songFileLocation) => {
    const song = await parseFile(songFileLocation);

    console.log(song);

    return {
        song,
        location: songFileLocation,
    };
};

const getSongs = async () => {
    const songs = [];

    const songsFolder = "./public/music";

    const songNames = await readdir(songsFolder);

    for (const songName of songNames) {
        const songFile = `${songsFolder}/${songName}`;

        const song = await getSong(songFile);

        songs.push(song);
    }

    return songs;
};

const build = async () => {
    const songs = await getSongs();

    const opener = `export const songs = \n`;

    writeFile("songs.ts", opener + JSON.stringify(songs), {
        encoding: "utf8",
    });
};

build();
