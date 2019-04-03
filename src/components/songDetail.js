import React from 'react'
import {connect} from 'react-redux'

const SongDetail = ({song}) =>{

  if(!song){
    return <div>Select a song</div>
  }
  return <div>{song.songs.title}</div>

}

function mapStateToProps(state){
  return {song: state.selectSong}
}


export default connect(mapStateToProps)(SongDetail)
