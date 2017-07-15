import React from 'react'
import {Popup, View, Pages, Page, Navbar, NavRight, Link, ContentBlockTitle, List, ListGroup, ListItem} from 'framework7-react'

export default class Profile extends React.Component {
  render() {
    return (
      <Popup id="profile">
    		<View navbarFixed>
    			<Pages>
    				<Page>
    					<Navbar title="Popup">
    						<NavRight>
    							<Link closePopup>Close</Link>
    						</NavRight>
    					</Navbar>
              <ContentBlockTitle>设置</ContentBlockTitle>
  						<List>
                <ListItem title="夜间模式" checkbox={true}></ListItem>
                <ListItem title="其它设置"></ListItem>
                <ListItem title="用户反馈"></ListItem>
  						</List>
    				</Page>
    			</Pages>
    		</View>
    	</Popup>
    )
  }
}
