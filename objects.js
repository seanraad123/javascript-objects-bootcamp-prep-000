 function p(value){
    console.log(value);
 }


var playlist = { "50cent": "oatmeal" };

function updatePlaylist(Obj_playlist, key_artist_name, value_song_title){
  Obj_playlist[key_artist_name] = value_song_title};
   return Obj_playlist
}

p(Obj_playlist)




function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value
 
  return obj
}