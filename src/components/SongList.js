import React, {Component} from 'react'
import {connect} from 'react-redux'

class SongList extends Component{

  renderList(){
    return this.props.songs.map( (song) =>{
      return(
        <div className='item' key={song.title}>
          <div className='ui floated content'>
            <button className="ui right floated button primary">
              Select
            </button>
            <div className="content">{song.title}</div>
          </div>
        </div>
      )
    })
  }

  render(){
    return(
      <div className='ui divided list'>{this.renderList()}</div>
    )
  }

}

function mapStateToProps (state){
  return {songs: state.songs}
}


export default connect(mapStateToProps)(SongList)
