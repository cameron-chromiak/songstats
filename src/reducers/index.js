import {combineReducers} from 'redux'

const songsReducer = () =>{
  return [
    {title: 'Boyz n the hood', duration: '5:26' },
    {title: 'All Star', duration: '3:15' },
    {title: 'I want it that way', duration: '1:45' }
  ]
}

const selectedSongReducer = (selectedSong=null, action) =>{
  if(action.type === 'SONG_SELECTED'){
    return action.payload
  }
  return selectedSong
}

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
})
