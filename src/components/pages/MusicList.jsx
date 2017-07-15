import React from 'react';
import {Page, ContentBlock, Navbar} from 'framework7-react';
import ListItem from './MusicListItem.jsx'

export default class MusicList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      listData: []
    }
  }

  componentDidMount() {
    let res = require('../../api/channel-music-more-0.json')
    this.setState({
      listData: res.data
    })
  }

  render() {
    return (
      <Page id='music-list'>
        <Navbar title="一个音乐" />
        <div className='one-list'>
        {
          this.state.listData.map((data, index) => {
            return <ListItem itemData={data} key={index} />
          })
        }
        </div>
      </Page>
    )
  }
}
