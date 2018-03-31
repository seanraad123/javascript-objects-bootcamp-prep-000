 function p(value){
    console.log(value);
 }


function updatePlaylist(Obj_playlist, key_artist_name, value_song_title){
  Obj_playlist[key_artist_name] = value_song_title
   return Obj_playlist
}

const playlist = { Kanye: "Golddigger" };




function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value
 
  return obj
}
 
const recipe = { eggs: 3 }
 
p(destructivelyUpdateObjectWithKeyAndValue(recipe, 'flour', '3 cups'))

