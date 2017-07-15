import React from 'react';
import {Page, ContentBlock, Navbar} from 'framework7-react';
import ListItem from './MovieListItem.jsx'

export default class MovieList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      listData: []
    }
  }

  componentDidMount() {
    let res = require('../../api/channel-movie-more-0.json')
    this.setState({
      listData: res.data
    })
  }

  render() {
    return (
      <Page id='move-list'>
        <Navbar title="一个影视" />
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
