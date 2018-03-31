 function p(value){
    console.log(value);
 }


function updatePlaylist(Obj_playlist, key_artist_name, value_song_title){
  Obj_playlist[key_artist_name] = value_song_title
   return Obj_playlist
}

const playlist = { Kanye: "Golddigger" };

p(updatePlaylist(playlist, "Jay-Z", "Big Pimpin"))
