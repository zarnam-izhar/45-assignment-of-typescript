"use strict";
function make_album(artistName, albumTitle, tracks) {
    let album = {
        artist: artistName,
        title: albumTitle,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
let album1 = make_album("Usman", "Album title 1");
console.log(album1);
let album2 = make_album("Atif", "Album title 2");
console.log(album2);
let album3 = make_album("Sara", "Album title 3", 20);
console.log(album3);
