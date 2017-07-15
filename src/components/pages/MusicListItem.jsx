import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardHeader, CardContent, CardFooter } from 'framework7-react'

export default class MusicListItem extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader className='no-border'>
          <p>- {this.props.itemData.tag_list.length > 0 ? this.props.itemData.tag_list[0].title : '音乐'} -</p>
        </CardHeader>
        <CardContent>
          <p className='one-item-title'>{this.props.itemData.title}</p>
          <p className='one-item-author'>文／{this.props.itemData.author.user_name}</p>
          {/* how to integrade lazy load? */}
          <img src={this.props.itemData.img_url} />
          <p className='one-item-brief'>{this.props.itemData.forward}</p>
          <p className='one-item-subtitle'>{this.props.itemData.subtitle}</p>
        </CardContent>
        <CardFooter className='no-border'>
          <p>{this.props.itemData.post_date}</p>
          <p>{this.props.itemData.like_count}</p>
        </CardFooter>
      </Card>
    )
  }
}

MusicListItem.propTypes = {
  itemData: PropTypes.object
}
