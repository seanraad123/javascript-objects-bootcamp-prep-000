 function p(value){
    console.log(value);
 }


var playlist = { "50cent": "candy-shop" };

function updatePlaylist(Obj_playlist, key_artist_name, value_song_title){
  Obj_playlist[key_artist_name] = value_song_title
   return Obj_playlist
}


p(updatePlaylist(recipe, 'flour', '3 cups'))