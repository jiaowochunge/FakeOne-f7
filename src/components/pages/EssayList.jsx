import React from 'react';
import {Page, Navbar, NavLeft, NavRight, NavCenter, Link, ContentBlock } from 'framework7-react';
import ListItem from './EssayListItem.jsx'

export default class EssayList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      listData: []
    }
  }

  componentDidMount() {
    let res = require('../../api/channel-reading-more-0.json')
    this.setState({
      listData: res.data
    })
  }

  render() {
    return (
      <Page id='essay-list'>
        <Navbar>
          <NavLeft>
            <Link icon="iconBars" openPopup="#profile">i</Link>
          </NavLeft>
          <NavCenter>一个阅读</NavCenter>
          <NavRight>
            <Link icon="iconBars" openPopup="#search">s</Link>
          </NavRight>
        </Navbar>
        <div className='one-list' >
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
